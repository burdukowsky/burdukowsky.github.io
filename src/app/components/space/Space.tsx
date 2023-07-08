import { Children, CSSProperties, useMemo } from 'react';
import { Property } from 'csstype';

import { FCC } from '../../utils/utility-types';
import styles from './Space.module.scss';

interface Props {
  direction?: Property.FlexDirection;
  gap?: Property.Gap;
  width?: Property.Width;
  height?: Property.Height;
  childrenFlex?: Property.Flex[];
}

export const Space: FCC<Props> = ({
  direction,
  gap,
  width,
  height,
  childrenFlex,
  children,
}) => {
  const style = useMemo<CSSProperties>(() => {
    return {
      flexDirection: direction,
      gap,
      width,
      height,
    };
  }, [direction, gap, height, width]);

  return (
    <div className={styles.Space} style={style}>
      {Children.map(children, (child, index) => (
        <div style={{ flex: childrenFlex?.[index] }}>{child}</div>
      ))}
    </div>
  );
};
