import React, { CSSProperties, FC, useMemo } from 'react';
import { Property } from 'csstype';

import { ReactComponent as DarkMode } from 'icons/dark-mode.svg';
import { ReactComponent as LightMode } from 'icons/light-mode.svg';
import { ReactComponent as Place } from 'icons/place.svg';
import { ReactComponent as At } from 'icons/at.svg';

export type IconType = 'DarkMode' | 'LightMode' | 'Place' | 'At';

const icons: Record<IconType, any> = {
  DarkMode: DarkMode,
  LightMode: LightMode,
  Place: Place,
  At: At,
};

interface Props {
  name: IconType;
  color?: Property.Fill;
  size?: Property.Width;
}

export const Icon: FC<Props> = ({
  name,
  color = 'var(--text)',
  size = '24px',
}) => {
  const style = useMemo<CSSProperties>(() => {
    return {
      fill: color,
      width: size,
    };
  }, [color, size]);

  return React.createElement(icons[name], { style });
};
