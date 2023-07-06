import { Property } from 'csstype';

import { FCC } from '../../utils/utility-types';
import styles from './Space.module.scss';

interface Props {
  direction?: Property.FlexDirection;
}

export const Space: FCC<Props> = ({ direction, children }) => {
  return (
    <div className={styles.Space} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};
