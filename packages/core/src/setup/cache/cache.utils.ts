import {
  DB_EVENT_STORE_NAME,
  DB_EVENT_STORE_PRIMARY_KEY,
  STORAGE_KEY_SUFFIX,
  STORAGE_VERSION
} from '../../setting';
import { EventParams } from '../../types';
import { TrackIndexedDB, TrackStorage } from '../../utils';

export const storage = new TrackStorage({
  suffix: STORAGE_KEY_SUFFIX,
  version: STORAGE_VERSION
});

export const db = new TrackIndexedDB<EventParams>({
  dbNamesuffix: STORAGE_KEY_SUFFIX,
  dbVersion: STORAGE_VERSION,
  stores: [
    {
      name: DB_EVENT_STORE_NAME,
      params: { keyPath: DB_EVENT_STORE_PRIMARY_KEY }
    }
  ]
});
