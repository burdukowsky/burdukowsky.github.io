import { FC } from 'react';

import { Space } from 'app/components/space/Space';
import { AppText } from 'app/components/app-text/AppText';
import styles from './Hello.module.scss';
import { Contacts } from '../contacts/Contacts';

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
        Stanislav Burdukowsky
      </AppText>
      <AppText as='p' size='1.7rem'>
        Senior Frontend Developer
      </AppText>
      <Contacts />
    </Space>
  );
};
