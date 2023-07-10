import React, { Children, createElement, CSSProperties, useMemo } from 'react';
import { Property } from 'csstype';
import classNames from 'classnames';

import { FCC } from '../../utils/utility-types';
import styles from './Space.module.scss';

interface Props {
  as?: keyof React.JSX.IntrinsicElements;
  direction?: Property.FlexDirection;
  gap?: Property.Gap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  wrap?: Property.FlexWrap | boolean;
  width?: Property.Width;
  height?: Property.Height;
  className?: string;
  style?: CSSProperties;
  childrenFlex?: Property.Flex[];
  childrenStyle?: CSSProperties[];
}

export const Space: FCC<Props> = ({
  as = 'div',
  direction,
  gap,
  justifyContent,
  alignItems,
  wrap,
  width,
  height,
  childrenFlex,
  childrenStyle,
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
      alignItems,
      width,
      height,
      flexWrap,
      ...baseStyle,
    };
  }, [
    alignItems,
    baseStyle,
    direction,
    flexWrap,
    gap,
    height,
    justifyContent,
    width,
  ]);

  return createElement(
    as,
    {
      className: classNames(styles.Space, className),
      style,
    },
    Children.map(children, (child, index) => (
      <span style={{ flex: childrenFlex?.[index], ...childrenStyle?.[index] }}>
        {child}
      </span>
    )),
  );
};
