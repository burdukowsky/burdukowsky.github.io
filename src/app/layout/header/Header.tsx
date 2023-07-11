import { FC } from 'react';

import styles from './Header.module.scss';
import { ThemeSwitcher } from '../../components/theme-switcher/ThemeSwitcher';
import { Space } from '../../components/space/Space';
import { Hello } from './components/hello/Hello';
import { useMobileMediaQuery } from '../../hooks/media-queries';
import { Coder } from './components/coder/Coder';

export const Header: FC = () => {
  const mobile = useMobileMediaQuery();

  return (
    <Space className={styles.Header} justifyContent='space-between'>
      <Hello />
      <Space
        direction='column'
        justifyContent='space-between'
        alignItems='end'
        height='100%'
      >
        <ThemeSwitcher />
        {!mobile && <Coder />}
      </Space>
    </Space>
  );
};
