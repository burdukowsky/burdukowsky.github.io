import { FC } from 'react';

import { Menu } from 'app/layout/menu/Menu';
import { Header } from 'app/layout/header/Header';
import { Content } from 'app/layout/content/Content';

export const RootMobile: FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <Content />
    </>
  );
};
