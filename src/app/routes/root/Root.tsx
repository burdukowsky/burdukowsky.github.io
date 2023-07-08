import { FC } from 'react';

import { useMobileMediaQuery } from '../../hooks/media-queries';
import { RootDefault } from './components/RootDefault';
import { RootMobile } from './components/RootMobile';

export const Root: FC = () => {
  const mobile = useMobileMediaQuery();
  return mobile ? <RootMobile /> : <RootDefault />;
};
