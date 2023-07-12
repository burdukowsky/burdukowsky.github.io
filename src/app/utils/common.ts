import { Theme } from '../types';
import { getLocalStorageValue } from './local-storage';
import { defaultTheme, lsThemeKey } from '../globals';

export function setColorTheme(theme: Theme): void {
  document.documentElement.className = theme === 'default' ? '' : theme;
}

export function configureInitialTheme(): void {
  setColorTheme(getLocalStorageValue(lsThemeKey, defaultTheme));
}

export function splitPairs<T>(arr: T[]): Array<T>[] {
  return arr.reduce<Array<T>[]>((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
}
