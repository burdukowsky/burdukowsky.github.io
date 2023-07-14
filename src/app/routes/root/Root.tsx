import { FC } from 'react';

import { useMobileMediaQuery } from '../../hooks/media-queries';
import { RootDefault } from './components/root-default/RootDefault';
import { RootMobile } from './components/root-mobile/RootMobile';
import { useAutoScrollToTop } from '../../hooks/useAutoScrollToTop';

export const Root: FC = () => {
  const mobile = useMobileMediaQuery();
  useAutoScrollToTop();
  return <div id='rootChild'>{mobile ? <RootMobile /> : <RootDefault />}</div>;
};
