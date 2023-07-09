import { lsPrefix } from '../globals';

function getLsKey(key: string): string {
  return lsPrefix + key;
}

export function getLocalStorageValue<T>(key: string, defaultValue: T): T {
  try {
    return JSON.parse(
      localStorage.getItem(getLsKey(key)) ?? String(defaultValue),
    );
  } catch (error) {
    return defaultValue;
  }
}

export function setLocalStorageValue(key: string, value: any): void {
  localStorage.setItem(getLsKey(key), JSON.stringify(value));
}
