import { FC } from 'react';

import { Space } from 'app/components/space/Space';
import { AppText } from 'app/components/app-text/AppText';
import styles from './Hello.module.scss';

export const Hello: FC = () => {
  return (
    <Space
      direction='column'
      height='100%'
      justifyContent='center'
      className={styles.Hello}
    >
      <AppText as='p' color='primary' size='1.8rem'>
        Hi, I'm
      </AppText>
      <AppText as='h1' size='2.8rem'>
        Stanislav
        <br />
        Burdukowsky
      </AppText>
      <AppText as='p' size='1.7rem'>
        Senior Frontend Developer
      </AppText>
    </Space>
  );
};
