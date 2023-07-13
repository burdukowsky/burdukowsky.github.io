import { FC } from 'react';

import { Space } from 'app/components/space/Space';
import styles from './Hello.module.scss';
import { Contacts } from '../contacts/Contacts';

export const Hello: FC = () => {
  return (
    <Space direction='column' height='100%' justifyContent='center' gap='.5em'>
      <Space direction='column'>
        <p className={styles.HelloHi}>Hi, I'm</p>
        <h1 className={styles.HelloName}>Stanislav Burdukowsky</h1>
        <p className={styles.HelloSenior}>Senior Frontend Developer</p>
      </Space>
      <Contacts />
    </Space>
  );
};
