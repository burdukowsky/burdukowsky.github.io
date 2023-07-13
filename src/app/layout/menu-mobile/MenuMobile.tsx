import { FC, useCallback, useState } from 'react';
import classNames from 'classnames';

import { Button } from '../../components/button/Button';
import styles from './MenuMobile.module.scss';
import { MenuLink } from '../menu/components/menu-link/MenuLink';
import { Space } from '../../components/space/Space';

export const MenuMobile: FC = () => {
  const [active, setActive] = useState(false);

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <div
      className={classNames(styles.MenuMobileWrap, {
        [styles.MenuMobileActive]: active,
      })}
    >
      <div className={styles.MenuMobile}>
        <Space direction='column' gap='1em'>
          <MenuLink to='/' onClick={toggle}>
            Experience
          </MenuLink>
          <MenuLink to='/edu' onClick={toggle}>
            Education
          </MenuLink>
          <MenuLink to='/portfolio' onClick={toggle}>
            Portfolio
          </MenuLink>
        </Space>
      </div>
      <Button
        icon='link'
        iconSize='35px'
        className={styles.MenuMobileButton}
        onClick={toggle}
      />
    </div>
  );
};
