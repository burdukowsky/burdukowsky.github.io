import { FC } from 'react';

import { Menu } from '../../../layout/menu/Menu';
import { Header } from '../../../layout/header/Header';
import { Content } from '../../../layout/content/Content';

export const RootMobile: FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <Content />
    </>
  );
};
