import { FC } from 'react';

import styles from './Header.module.scss';
import { ThemeSwitcher } from '../../components/theme-switcher/ThemeSwitcher';

export const Header: FC = () => {
  return (
    <div className={styles.Header}>
      Header
      <ThemeSwitcher />
    </div>
  );
};
