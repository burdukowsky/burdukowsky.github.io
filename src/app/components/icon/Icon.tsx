import React, { CSSProperties, FC, useMemo } from 'react';
import { Property } from 'csstype';

import { ReactComponent as DarkMode } from 'icons/dark-mode.svg';
import { ReactComponent as LightMode } from 'icons/light-mode.svg';
import { ReactComponent as Place } from 'icons/place.svg';
import { ReactComponent as At } from 'icons/at.svg';
import { ReactComponent as Android } from 'icons/android.svg';
import { ReactComponent as Extension } from 'icons/extension.svg';
import { ReactComponent as Download } from 'icons/download.svg';
import { ReactComponent as Github } from 'icons/github.svg';
import { ReactComponent as Link } from 'icons/link.svg';
import { ReactComponent as Npm } from 'icons/npm.svg';

export type IconType =
  | 'darkMode'
  | 'lightMode'
  | 'place'
  | 'at'
  | 'android'
  | 'extension'
  | 'download'
  | 'github'
  | 'link'
  | 'npm';

const icons: Record<IconType, any> = {
  darkMode: DarkMode,
  lightMode: LightMode,
  place: Place,
  at: At,
  android: Android,
  extension: Extension,
  download: Download,
  github: Github,
  link: Link,
  npm: Npm,
};

interface Props {
  name: IconType;
  color?: Property.Fill;
  size?: Property.Width;
}

export const Icon: FC<Props> = ({
  name,
  color = 'currentColor',
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
