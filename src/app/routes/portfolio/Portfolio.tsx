import { FC } from 'react';

import { Space } from '../../components/space/Space';
import { AppText } from '../../components/app-text/AppText';
import { useExtraMobileMediaQuery } from '../../hooks/media-queries';
import { PortfolioDesktop } from './components/PortfolioDesktop';
import { PortfolioMobile } from './components/PortfolioMobile';

export const Portfolio: FC = () => {
  const extraMobile = useExtraMobileMediaQuery();

  return (
    <Space direction='column' gap='1em'>
      <AppText as='h2' align='center' className='mt-0 comment'>
        Some of my pet-projects
      </AppText>
      {extraMobile ? <PortfolioMobile /> : <PortfolioDesktop />}
    </Space>
  );
};
