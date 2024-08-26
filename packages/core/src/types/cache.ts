export const enum TransactionType {
  Readwrite = 'readwrite',
  Readonly = 'readonly'
}

export interface StoreParameter {
  /**
   * 表名
   */
  name: string;
  params: IDBObjectStoreParameters;
}

export interface DBOptions {
  /**
   * 数据库名称
   *
   * @type {string}
   * @memberof DBOptions
   */
  dbName: string;
  /**
   * 数据库版本号
   *
   * @type {number}
   * @memberof DBOptions
   */
  dbVersion: number;
  /**
   * 表信息
   *
   * @type {StoreParameter[]}
   * @memberof DBOptions
   */
  stores?: StoreParameter[];
  /**
   * 表名前缀
   *
   * @type {string}
   * @memberof DBOptions
   */
  dbNamesuffix: string;
}

export interface StorageOptions {
  /**
   * 缓存类型. localStorage, sessionStorage
   *
   * @type {Storage}
   * @memberof StorageOptions
   */
  storage?: Storage;
  /**
   * 缓存 key 前缀
   *
   * @type {string}
   * @memberof StorageOptions
   */
  suffix: string;
  /**
   * 缓存 key 版本
   *
   * @type {number}
   * @memberof StorageOptions
   */
  version: number;
}
