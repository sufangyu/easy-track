import { logger } from '../debug';

export * from './db';

export const checkIsIndexedDBSupported = () => {
  if ('indexedDB' in window) {
    return true;
  }

  logger.warn('IndexedDB is not supported in this browser.');
  return false;
};
