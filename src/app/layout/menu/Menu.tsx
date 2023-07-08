import { FC } from 'react';
import { Link } from 'react-router-dom';

import { MenuContainer } from './components/MenuContainer';

export const Menu: FC = () => {
  return (
    <MenuContainer>
      <Link to='/'>Me</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/edu'>Education</Link>
      <Link to='/contacts'>Contacts</Link>
    </MenuContainer>
  );
};
