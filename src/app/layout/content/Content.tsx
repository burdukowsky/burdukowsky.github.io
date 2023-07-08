import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Content.module.scss';

export const Content: FC = () => {
  return (
    <div className={styles.Content}>
      <Outlet />
    </div>
  );
};
