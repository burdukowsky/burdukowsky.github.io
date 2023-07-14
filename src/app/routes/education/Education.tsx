import { FC } from 'react';

import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { Page } from 'app/components/page/Page';
import { EducationDesktop } from './components/EducationDesktop';
import { EducationMobile } from './components/EducationMobile';

export const Education: FC = () => {
  const mobile = useMobileMediaQuery();

  return (
    <Page title={mobile ? 'Education' : undefined}>
      {mobile ? <EducationMobile /> : <EducationDesktop />}
    </Page>
  );
};
