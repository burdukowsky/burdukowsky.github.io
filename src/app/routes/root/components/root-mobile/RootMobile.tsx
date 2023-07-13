import { FC } from 'react';

import { Header } from 'app/layout/header/Header';
import { Content } from 'app/layout/content/Content';
import { MenuMobile } from 'app/layout/menu-mobile/MenuMobile';

export const RootMobile: FC = () => {
  return (
    <>
      <Header />
      <Content />
      <MenuMobile />
    </>
  );
};
