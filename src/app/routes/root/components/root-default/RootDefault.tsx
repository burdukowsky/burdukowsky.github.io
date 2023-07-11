import { FC } from 'react';

import { Space } from 'app/components/space/Space';
import { Menu } from 'app/layout/menu/Menu';
import { Header } from 'app/layout/header/Header';
import { Content } from 'app/layout/content/Content';
import styles from './RootDefault.module.scss';

export const RootDefault: FC = () => {
  return (
    <Space childrenFlex={[1, 3]} height='100%' className={styles.RootDefault}>
      <Menu />
      <Space direction='column' height='100%' childrenFlex={[1, 1]}>
        <Header />
        <Content />
      </Space>
    </Space>
  );
};
