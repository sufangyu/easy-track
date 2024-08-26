import { DBOptions, StoreParameter, TransactionType } from '../../types';

export class TrackIndexedDB<T> {
  private dbNamesuffix: string;

  private _dbName: string = '';

  private dbName: string = '';

  private dbVersion: number;

  private db!: IDBDatabase;

  private stores: StoreParameter[] = [];

  constructor(options: Pick<DBOptions, 'dbNamesuffix' | 'stores' | 'dbVersion'>) {
    const { dbVersion, dbNamesuffix, stores } = options;
    this.dbVersion = dbVersion;
    this.dbNamesuffix = dbNamesuffix;
    this.stores = stores || [];
  }

  /**
   * 初始化连接数据库
   *
   * @param {Pick<DBOptions, "dbName">} options
   * @memberof TrackIndexedDB
   */
  init(options: Pick<DBOptions, 'dbName'>): Promise<void> {
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
        resolve();
      };

      request.onerror = (event: Event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  /**
   * 创建数据库表
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

  private getTransaction(storeName: string, transactionType: TransactionType) {
    return this.db.transaction(storeName, transactionType);
  }

  private getObjectStore(storeName: string, transactionType: TransactionType) {
    const transaction = this.getTransaction(storeName, transactionType);
    const objectStore = transaction.objectStore(storeName);

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
      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = transaction.objectStore(storeName);
      objectStore.add(item);

      transaction.oncomplete = () => resolve();

      transaction.onerror = (event: Event) => {
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
      const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);

      const request = objectStore.get(primaryKey);

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
      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = transaction.objectStore(storeName);
      objectStore.put(item);

      transaction.oncomplete = () => resolve();

      transaction.onerror = (event: Event) => {
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
      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = transaction.objectStore(storeName);
      objectStore.delete(primaryKey);

      transaction.oncomplete = () => resolve();

      transaction.onerror = (event: Event) => {
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
      const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
      const request = objectStore.count();

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
      const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
      const request = objectStore.getAll();

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
  clear(storeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
      const objectStore = this.getObjectStore(storeName, TransactionType.Readwrite);

      objectStore.clear();

      transaction.oncomplete = () => resolve();

      transaction.onerror = (event: Event) => {
        reject((event.target as IDBTransaction).error);
      };
    });
  }
}
