import { FC, useMemo } from 'react';

import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { EducationView } from './components/EducationView';
import { myEdu } from 'app/data/education';
import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { Page } from 'app/components/page/Page';

export const Education: FC = () => {
  const mobile = useMobileMediaQuery();

  const steps = useMemo<StepperStep[]>(() => {
    return myEdu.map(edu => ({
      title: edu.title,
      content: <EducationView value={edu} />,
    }));
  }, []);

  return (
    <Page title={mobile ? 'Education' : undefined}>
      {steps.length === 0 ? 'No education' : <Stepper steps={steps} />}
    </Page>
  );
};
