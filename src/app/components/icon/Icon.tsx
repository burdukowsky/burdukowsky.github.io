import React, { CSSProperties, FC, useMemo } from 'react';
import { Property } from 'csstype';

import { ReactComponent as DarkMode } from 'icons/dark-mode.svg';
import { ReactComponent as LightMode } from 'icons/light-mode.svg';

export type IconType = 'DarkMode' | 'LightMode';

const icons: Record<IconType, any> = {
  DarkMode: DarkMode,
  LightMode: LightMode,
};

interface Props {
  name: IconType;
  color?: Property.Fill;
  size?: Property.Width;
}

export const Icon: FC<Props> = ({ name, color = 'var(--text)', size = 25 }) => {
  const style = useMemo<CSSProperties>(() => {
    return {
      fill: color,
      width: size,
    };
  }, [color, size]);

  return React.createElement(icons[name], { style });
};
