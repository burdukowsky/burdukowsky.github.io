import { ButtonHTMLAttributes, useMemo } from 'react';
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
  const computedClassName = useMemo(() => {
    return (
      classNames(styles.StepperButton, {
        [styles.StepperButtonActive]: active,
      }) + ` ${className}`
    );
  }, [active, className]);

  return (
    <div className={styles.StepperButtonWrap}>
      <button {...buttonProps} type={type} className={computedClassName}>
        {children}
      </button>
    </div>
  );
};
