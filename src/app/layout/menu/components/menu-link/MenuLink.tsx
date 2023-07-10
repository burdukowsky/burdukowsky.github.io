import { NavLink } from 'react-router-dom';
import { ComponentProps, useCallback } from 'react';
import classNames from 'classnames';

import { FCC } from 'app/utils/utility-types';
import styles from './MenuLink.module.scss';

interface Props extends ComponentProps<typeof NavLink> {
  className?: string;
}

interface ClassNameCallbackArg {
  isActive: boolean;
  isPending: boolean;
}

export const MenuLink: FCC<Props> = ({ className, children, ...linkProps }) => {
  const classNameCallback = useCallback(
    ({ isActive }: ClassNameCallbackArg) => {
      return classNames(className, styles.MenuLink, {
        [styles.MenuLinkActive]: isActive,
      });
    },
    [className],
  );

  return (
    <NavLink {...linkProps} className={classNameCallback}>
      <span className={styles.MenuLinkWrap}>{children}</span>
    </NavLink>
  );
};
