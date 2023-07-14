import { FC } from 'react';

import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { Page } from 'app/components/page/Page';
import { ExperienceDesktop } from './components/ExperienceDesktop';
import { ExperienceMobile } from './components/ExperienceMobile';

export const Experience: FC = () => {
  const mobile = useMobileMediaQuery();

  return (
    <Page title={mobile ? 'Experience' : undefined}>
      {mobile ? <ExperienceMobile /> : <ExperienceDesktop />}
    </Page>
  );
};
