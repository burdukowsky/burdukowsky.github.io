import { Children, CSSProperties, useMemo } from 'react';
import { Property } from 'csstype';
import classNames from 'classnames';

import { FCC } from '../../utils/utility-types';
import styles from './Space.module.scss';

interface Props {
  direction?: Property.FlexDirection;
  gap?: Property.Gap;
  justifyContent?: Property.JustifyContent;
  wrap?: Property.FlexWrap | boolean;
  width?: Property.Width;
  height?: Property.Height;
  className?: string;
  style?: CSSProperties;
  childrenFlex?: Property.Flex[];
}

export const Space: FCC<Props> = ({
  direction,
  gap,
  justifyContent,
  wrap,
  width,
  height,
  childrenFlex,
  className,
  style: baseStyle,
  children,
}) => {
  const flexWrap = useMemo<Property.FlexWrap | undefined>(() => {
    if (typeof wrap === 'boolean') {
      return wrap ? 'wrap' : undefined;
    }
    return wrap;
  }, [wrap]);

  const style = useMemo<CSSProperties>(() => {
    return {
      flexDirection: direction,
      gap,
      justifyContent,
      width,
      height,
      flexWrap,
      ...baseStyle,
    };
  }, [baseStyle, direction, flexWrap, gap, height, justifyContent, width]);

  return (
    <div className={classNames(styles.Space, className)} style={style}>
      {Children.map(children, (child, index) => (
        <div style={{ flex: childrenFlex?.[index] }}>{child}</div>
      ))}
    </div>
  );
};
