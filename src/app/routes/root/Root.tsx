import { FC } from 'react';

import { useMobileMediaQuery } from '../../hooks/media-queries';
import { RootDefault } from './components/root-default/RootDefault';
import { RootMobile } from './components/root-mobile/RootMobile';

export const Root: FC = () => {
  const mobile = useMobileMediaQuery();
  return <div id='rootChild'>{mobile ? <RootMobile /> : <RootDefault />}</div>;
};
