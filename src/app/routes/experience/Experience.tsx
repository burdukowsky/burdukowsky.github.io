import { FC, useMemo } from 'react';

import { ExperienceView } from './components/experience-view/ExperienceView';
import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { myXp } from 'app/data/experience';
import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { Page } from 'app/components/page/Page';

export const Experience: FC = () => {
  const mobile = useMobileMediaQuery();

  const steps = useMemo<StepperStep[]>(() => {
    return myXp.map(xp => ({
      title: `${xp.from} - ${xp.to}`,
      content: <ExperienceView value={xp} />,
    }));
  }, []);

  return (
    <Page title={mobile ? 'Experience' : undefined}>
      {steps.length === 0 ? 'No experience' : <Stepper steps={steps} />}
    </Page>
  );
};
