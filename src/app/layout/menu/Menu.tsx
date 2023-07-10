import { FC } from 'react';

import { MenuContainer } from './components/MenuContainer';
import styles from './Menu.module.scss';
import { MenuLink } from './components/menu-link/MenuLink';

export const Menu: FC = () => {
  return (
    <MenuContainer className={styles.Menu}>
      <MenuLink to='/'>Experience</MenuLink>
      <MenuLink to='/edu'>Education</MenuLink>
      <MenuLink to='/portfolio'>Portfolio</MenuLink>
    </MenuContainer>
  );
};
