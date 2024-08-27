import { DBOptions, StoreParameter, TransactionType } from '../../types';

export class TrackIndexedDB<T> {
  private dbNamesuffix: string;
  private _dbName: string = '';
  private dbName: string = '';
  private dbVersion: number;
  private db!: IDBDatabase;
  private stores: StoreParameter[] = [];
  private isInitialized = false;
  private unInitializedDataMap = new Map<string, T[]>();

  constructor(options: Pick<DBOptions, 'dbNamesuffix' | 'stores' | 'dbVersion'>) {
    const { dbVersion, dbNamesuffix, stores } = options;
    this.dbVersion = dbVersion;
    this.dbNamesuffix = dbNamesuffix;
    this.stores = stores || [];
  }

  /**
   * 打开或创建数据库
   *
   * @param {Pick<DBOptions, "dbName">} options
   * @memberof TrackIndexedDB
   */
  async init(options: Pick<DBOptions, 'dbName'>): Promise<void> {
    const { dbName } = options;
    this._dbName = dbName;
    this.dbName = `${this._dbName}${this.dbNamesuffix}`;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      // 创建和更新数据库版本号触发事件
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        this.stores.forEach(({ name, params }) => this.createStore(name, params));
        resolve();
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        this.isInitialized = true;

        // 数据库初始化后，将暂存的数据插入到数据库中然后清空暂存数据, 避免数据丢失
        this.unInitializedDataMap.forEach((dataList, storeName) => {
          dataList.forEach(async (item) => {
            await this.add(storeName, item);
          });
        });
        this.unInitializedDataMap.clear();

        resolve();
      };

      request.onerror = (event: Event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  /**
   * 创建数据库表/存储空间
   *
   * @private
   * @param {string} storeName
   * @param {IDBObjectStoreParameters} [options]
   * @memberof TrackIndexedDB
   */
  private createStore(storeName: string, options?: IDBObjectStoreParameters) {
    const { objectStoreNames } = this.db;

    if (!objectStoreNames.contains(storeName)) {
      this.db.createObjectStore(storeName, options);
    }
  }

  /**
   * 获取数据库事务
   *
   * @private
   * @param {string} storeName
   * @param {TransactionType} transactionType
   * @return {*}
   * @memberof TrackIndexedDB
   */
  private getTransaction(storeName: string, transactionType: TransactionType) {
    if (!this.isInitialized) {
      // throw new Error('Database not initialized');
      return;
    }

    return this.db.transaction(storeName, transactionType);
  }

  /**
   * 获取数据库对象存储
   *
   * @private
   * @param {string} storeName
   * @param {TransactionType} transactionType
   * @return {*}
   * @memberof TrackIndexedDB
   */
  private getObjectStore(storeName: string, transactionType: TransactionType) {
    const transaction = this.getTransaction(storeName, transactionType);
    const objectStore = transaction?.objectStore(storeName);

    return objectStore;
  }

  /**
   * 添加表数据
   *
   * @param {string} storeName 表名
   * @param {T} item 数据
   * @return {*}  {Promise<void>}
   * @memberof TrackIndexedDB
   */
  add(storeName: string, item: T): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        // 如果数据库未初始化，将数据存储在内存中
        let curStoreUnInitializedData = this.unInitializedDataMap.get(storeName);
        if (!curStoreUnInitializedData) {
          curStoreUnInitializedData = [];
          this.unInitializedDataMap.set(storeName, curStoreUnInitializedData);
        }
        curStoreUnInitializedData.push(item);
        return;
      }

      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = transaction!.objectStore(storeName);
      // fix: 单纯使用时间戳作为主键可能会重复, 故需自定义主键（随机字符串+时间戳）
      const uniqueKey = `${Math.random().toString(36).substr(2, 9)}-${(item as any).time || Date.now().toString()}`;

      objectStore.add({ id: uniqueKey, ...item });

      transaction!.oncomplete = () => resolve();

      transaction!.onerror = (event: Event) => {
        reject((event.target as IDBTransaction).error);
      };
    });
  }

  /**
   * 根据表名和主键获取数据
   *
   * @param storeName 表名
   * @param primaryKey 主键
   * @returns 返回查询结果，若未找到则返回 undefined
   */
  get(storeName: string, primaryKey: string): Promise<T[] | undefined> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        return;
      }

      const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
      const request = objectStore!.get(primaryKey);

      request.onsuccess = (event: Event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event: Event) => {
        reject((event.target as IDBRequest).error);
      };
    });
  }

  /**
   * 更新表数据
   *
   * @param {string} storeName 表名
   * @param {T} item 更新数据
   * @return {*}  {Promise<void>}
   * @memberof TrackIndexedDB
   */
  update(storeName: string, item: T): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        return;
      }

      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = transaction!.objectStore(storeName);
      objectStore.put(item);

      transaction!.oncomplete = () => resolve();

      transaction!.onerror = (event: Event) => {
        reject((event.target as IDBTransaction).error);
      };
    });
  }

  /**
   * 删除表数据
   *
   * @param {string} storeName 表名
   * @param {string} primaryKey 删除数据主键
   * @return {*}  {Promise<void>}
   * @memberof TrackIndexedDB
   */
  remove(storeName: string, primaryKey: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        return;
      }

      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = transaction!.objectStore(storeName);
      objectStore.delete(primaryKey);

      transaction!.oncomplete = () => resolve();

      transaction!.onerror = (event: Event) => {
        reject((event.target as IDBTransaction).error);
      };
    });
  }

  /**
   * 获取表数据条数
   *
   * @param {string} storeName 表名
   * @return {*}  {Promise<number>}
   * @memberof TrackIndexedDB
   */
  getCount(storeName: string): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        return;
      }

      const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
      const request = objectStore!.count();

      request.onsuccess = (event: Event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event: Event) => {
        reject((event.target as IDBRequest).error);
      };
    });
  }

  /**
   * 获取表全部数据
   *
   * @param {string} storeName 表名
   * @return {*}  {(Promise<T[] | undefined>)}
   * @memberof TrackIndexedDB
   */
  getAll(storeName: string): Promise<T[] | undefined> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        return;
      }

      const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
      const request = objectStore!.getAll();

      request.onsuccess = (event: Event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event: Event) => {
        reject((event.target as IDBRequest).error);
      };
    });
  }

  /**
   * 删除数据库
   *
   * @param {string} storeName 数据库名称
   * @return {*}  {Promise<void>}
   * @memberof TrackIndexedDB
   */
  async clear(storeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isInitialized) {
        return;
      }

      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = this.getObjectStore(storeName, TransactionType.Readwrite);

      objectStore!.clear();

      transaction!.oncomplete = () => resolve();

      transaction!.onerror = (event: Event) => {
        reject((event.target as IDBTransaction).error);
      };
    });
  }
}
