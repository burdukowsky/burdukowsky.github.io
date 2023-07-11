import { FC } from 'react';

import styles from './Coder.module.scss';

export const Coder: FC = () => {
  return (
    <div
      className={styles.Coder}
      style={{ backgroundImage: 'url("img/coder.png")' }}
    />
  );
};
