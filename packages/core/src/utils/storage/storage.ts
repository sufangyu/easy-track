import { type StorageOptions } from '../../types';

export class TrackStorage {
  private storage: Storage;

  private suffix: string;

  private version: number;

  constructor(options: StorageOptions) {
    const { storage = localStorage, suffix, version } = options;
    this.storage = storage;
    this.suffix = suffix;
    this.version = version;
  }

  getKey(key: string) {
    return `${key}${this.suffix}_v${this.version}`;
  }

  setItem<T>(key: string, value: T): void {
    let val = value as string;
    try {
      val = JSON.stringify(value);
    } catch (_err) {
      val = value as string;
    }

    this.storage.setItem(this.getKey(key), val);
  }

  getItem<T>(key: string): T | null {
    const item = this.storage.getItem(this.getKey(key));

    if (!item) {
      return null;
    }

    try {
      return JSON.parse(item) as T;
    } catch (_err) {
      return item as T;
    }
  }

  putItem<T>(key: string, value: T): void {
    const val = this.getItem<T>(key) ?? ([] as T);
    if (Array.isArray(val)) {
      val.push(value);
      this.setItem(key, val);
    }
  }

  removeItem(key: string): void {
    this.storage.removeItem(this.getKey(key));
  }

  clear() {
    this.storage.clear();
  }

  getAllKeys() {
    return Object.keys(this.storage);
  }
}
