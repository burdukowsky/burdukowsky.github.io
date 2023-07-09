import { FC, useCallback, useEffect } from 'react';

import { Icon, IconType } from '../icon/Icon';
import { Button } from '../button/Button';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { localStoragePrefix } from '../../globals';

type Theme = 'default' | 'dark-theme';

const map: Record<Theme, IconType> = {
  default: 'DarkMode',
  'dark-theme': 'LightMode',
};

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useLocalStorage<Theme>(
    `${localStoragePrefix}theme`,
    'dark-theme',
  );

  useEffect(() => {
    document.body.className = theme === 'default' ? '' : theme;
  }, [theme]);

  const onClick = useCallback(() => {
    setTheme(theme === 'default' ? 'dark-theme' : 'default');
  }, [setTheme, theme]);

  return (
    <Button icon onClick={onClick}>
      <Icon name={map[theme]} />
    </Button>
  );
};
