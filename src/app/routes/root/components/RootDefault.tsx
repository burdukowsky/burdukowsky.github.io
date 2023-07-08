import { FC } from 'react';

import { Space } from '../../../components/space/Space';
import { Menu } from '../../../layout/menu/Menu';
import { Header } from '../../../layout/header/Header';
import { Content } from '../../../layout/content/Content';

export const RootDefault: FC = () => {
  return (
    <Space childrenFlex={[1, 2]} height='100%'>
      <Menu />
      <Space direction='column' height='100%' childrenFlex={[1, 1]}>
        <Header />
        <Content />
      </Space>
    </Space>
  );
};
