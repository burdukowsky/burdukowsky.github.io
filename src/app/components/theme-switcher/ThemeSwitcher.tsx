import { FC, useCallback, useEffect } from 'react';

import { Icon, IconType } from '../icon/Icon';
import { Button } from '../button/Button';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Theme } from '../../types';
import { setColorTheme } from '../../utils/common';
import { defaultTheme, lsThemeKey } from '../../globals';

const map: Record<Theme, IconType> = {
  default: 'DarkMode',
  'dark-theme': 'LightMode',
};

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useLocalStorage<Theme>(lsThemeKey, defaultTheme);

  useEffect(() => {
    setColorTheme(theme);
  }, [theme]);

  const onClick = useCallback(() => {
    setTheme(theme === 'default' ? 'dark-theme' : 'default');
  }, [setTheme, theme]);

  return (
    <Button icon onClick={onClick}>
      <Icon name={map[theme]} size='25px' />
    </Button>
  );
};
