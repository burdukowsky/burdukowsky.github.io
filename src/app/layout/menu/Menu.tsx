import { FC } from 'react';
import { Link } from 'react-router-dom';

import { MenuContainer } from './components/MenuContainer';
import styles from './Menu.module.scss';

export const Menu: FC = () => {
  return (
    <MenuContainer className={styles.Menu}>
      <Link to='/'>Experience</Link>
      <Link to='/edu'>Education</Link>
      <Link to='/portfolio'>Portfolio</Link>
    </MenuContainer>
  );
};
