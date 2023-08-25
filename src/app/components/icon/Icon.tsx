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
import { ReactComponent as Mail } from 'icons/mail.svg';
import { ReactComponent as Phone } from 'icons/phone.svg';
import { ReactComponent as Telegram } from 'icons/telegram.svg';
import { ReactComponent as Vk } from 'icons/vk.svg';
import { ReactComponent as Menu } from 'icons/menu.svg';
import { ReactComponent as Close } from 'icons/close.svg';
import { ReactComponent as DateRange } from 'icons/date-range.svg';
import { ReactComponent as Habr } from 'icons/habr.svg';
import { ReactComponent as Hh } from 'icons/hh.svg';

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
  | 'npm'
  | 'mail'
  | 'phone'
  | 'telegram'
  | 'vk'
  | 'menu'
  | 'close'
  | 'dateRange'
  | 'habr'
  | 'hh';

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
  mail: Mail,
  phone: Phone,
  telegram: Telegram,
  vk: Vk,
  menu: Menu,
  close: Close,
  dateRange: DateRange,
  habr: Habr,
  hh: Hh,
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
