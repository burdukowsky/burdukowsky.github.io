import { FC } from 'react';

import { useExtraMobileMediaQuery } from '../../hooks/media-queries';
import { PortfolioDesktop } from './components/PortfolioDesktop';
import { PortfolioMobile } from './components/PortfolioMobile';
import { Page } from 'app/components/page/Page';

export const Portfolio: FC = () => {
  const extraMobile = useExtraMobileMediaQuery();

  return (
    <Page title='Some of my pet-projects'>
      {extraMobile ? <PortfolioMobile /> : <PortfolioDesktop />}
    </Page>
  );
};
