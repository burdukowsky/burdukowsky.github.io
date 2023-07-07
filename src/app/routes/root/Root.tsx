import { FC } from 'react';

import { Space } from '../../components/space/Space';
import { Content } from '../../layout/content/Content';
import { Header } from '../../layout/header/Header';
import { Menu } from '../../layout/menu/Menu';

export const Root: FC = () => {
  return (
    <Space>
      <Menu />
      <Space direction='column'>
        <Header />
        <Content />
      </Space>
    </Space>
  );
};
