import { FC } from 'react';

import { Space } from './app/components/space/Space';
import { Content } from './app/layout/content/Content';
import { Header } from './app/layout/header/Header';
import { Menu } from './app/layout/menu/Menu';

export const App: FC = () => {
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
