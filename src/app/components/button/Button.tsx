import { ButtonHTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { Property } from 'csstype';

import { FCC } from '../../utils/utility-types';
import styles from './Button.module.scss';
import { Icon, IconType } from '../icon/Icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconSize?: Property.Width;
}

export const Button: FCC<Props> = ({
  type = 'button',
  className,
  icon,
  iconSize = '18px',
  children,
  ...buttonProps
}) => {
  const computedClassName = useMemo(() => {
    return (
      classNames(styles.Button, {
        [styles.ButtonIcon]: icon != null,
      }) + ` ${className ?? ''}`
    );
  }, [className, icon]);

  return (
    <button {...buttonProps} type={type} className={computedClassName}>
      {icon == null ? children : <Icon name={icon} size={iconSize} />}
    </button>
  );
};
