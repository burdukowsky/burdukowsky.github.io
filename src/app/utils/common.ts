import { Theme } from '../types';
import { getLocalStorageValue } from './local-storage';
import { defaultTheme, lsThemeKey } from '../globals';

export function setColorTheme(theme: Theme): void {
  document.body.className = theme === 'default' ? '' : theme;
}

export function configureInitialTheme(): void {
  setColorTheme(getLocalStorageValue(lsThemeKey, defaultTheme));
}
