import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import { FCC } from 'app/utils/utility-types';
import styles from './StepperButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const StepperButton: FCC<Props> = ({
  type = 'button',
  className,
  active,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      type={type}
      className={
        classNames(styles.StepperButton, {
          [styles.StepperButtonActive]: active,
        }) + ` ${className}`
      }
    >
      {children}
    </button>
  );
};
