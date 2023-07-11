import React, { Children, createElement, CSSProperties, useMemo } from 'react';
import { Property } from 'csstype';

import { FCC } from '../../utils/utility-types';

interface Props {
  as?: keyof React.JSX.IntrinsicElements;
  inline?: boolean;
  direction?: Property.FlexDirection;
  gap?: Property.Gap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  wrap?: Property.FlexWrap | boolean;
  width?: Property.Width;
  height?: Property.Height;
  className?: string;
  style?: CSSProperties;
  childrenFlex?: Array<Property.Flex | undefined>;
  childrenStyle?: CSSProperties[];
}

export const Space: FCC<Props> = ({
  as = 'div',
  inline = false,
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
      display: inline ? 'inline-flex' : 'flex',
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
    inline,
    justifyContent,
    width,
  ]);

  return createElement(
    as,
    { className, style },
    Children.map(
      children,
      (child, index) =>
        child != null && (
          <span
            style={{ flex: childrenFlex?.[index], ...childrenStyle?.[index] }}
          >
            {child}
          </span>
        ),
    ),
  );
};
