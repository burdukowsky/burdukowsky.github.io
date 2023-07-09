import { ButtonHTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';

import { FCC } from '../../utils/utility-types';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

export const Button: FCC<Props> = ({
  type = 'button',
  className,
  icon = false,
  children,
  ...buttonProps
}) => {
  const computedClassName = useMemo(() => {
    return (
      classNames(styles.Button, {
        [styles.ButtonIcon]: icon,
      }) + ` ${className ?? ''}`
    );
  }, [className, icon]);

  return (
    <button {...buttonProps} type={type} className={computedClassName}>
      {children}
    </button>
  );
};
