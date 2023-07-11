import React, { createElement, CSSProperties } from 'react';
import { Property } from 'csstype';

import { FCC } from 'app/utils/utility-types';

type TextColor =
  | 'primary'
  | 'primary-dark'
  | 'primary-light'
  | 'background'
  | 'surface';

interface Props {
  as?: keyof React.JSX.IntrinsicElements;
  color?: TextColor;
  size?: Property.FontSize;
  weight?: Property.FontWeight;
  align?: Property.TextAlign;
  className?: string;
  style?: CSSProperties;
}

export const AppText: FCC<Props> = ({
  as = 'span',
  color,
  size,
  weight,
  align,
  className,
  style,
  children,
}) => {
  return createElement(
    as,
    {
      className,
      style: {
        color: `var(--${color})`,
        fontSize: size,
        fontWeight: weight,
        textAlign: align,
        ...style,
      },
    },
    children,
  );
};
