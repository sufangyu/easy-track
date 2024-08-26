import options from '../../options';
import { logger, checkIsIndexedDBSupported } from '../../utils';
import { db, storage } from './cache.utils';

// 初始化缓存
const setupStorage = (appCode: string) => {
  const val = storage.getItem(appCode);
  if (!Array.isArray(val)) {
    storage.setItem(`${appCode}`, []);
  }
};

// 初始化数据库
const setupDB = async (appCode: string) => {
  try {
    if (!checkIsIndexedDBSupported()) {
      throw new Error('当前浏览器不支持 IndexedDB');
    }

    await db.init({
      dbName: appCode
    });
  } catch (_err) {
    logger.warn('初始化IndexedDB失败, 已关闭并且缓存降级为 normal');
    options.setCacheType('normal');
  }
};

export const setupCache = async () => {
  const { cacheType, appCode } = options.get();

  switch (cacheType) {
    case 'storage':
      setupStorage(appCode);
      break;
    case 'db':
      await setupDB(appCode);
      break;
    default:
      break;
  }
};
