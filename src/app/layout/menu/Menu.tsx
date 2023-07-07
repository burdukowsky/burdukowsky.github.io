import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Space } from '../../components/space/Space';

export const Menu: FC = () => {
  return (
    <Space direction='column'>
      <Link to='/'>Me</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/edu'>Education</Link>
      <Link to='/contacts'>Contacts</Link>
    </Space>
  );
};
