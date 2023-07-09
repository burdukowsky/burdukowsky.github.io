import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import { FCC } from '../../utils/utility-types';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

export const Button: FCC<Props> = ({
  type = 'button',
  icon = false,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      type={type}
      className={classNames(styles.Button, {
        [styles.ButtonIcon]: icon,
      })}
    >
      {children}
    </button>
  );
};
