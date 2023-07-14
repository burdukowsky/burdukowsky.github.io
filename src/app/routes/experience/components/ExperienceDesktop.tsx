import { FC, useMemo } from 'react';

import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { myXp } from 'app/data/experience';
import { ExperienceView } from './experience-view/ExperienceView';

export const ExperienceDesktop: FC = () => {
  const steps = useMemo<StepperStep[]>(() => {
    return myXp.map(xp => ({
      title: `${xp.from} - ${xp.to}`,
      content: <ExperienceView value={xp} />,
    }));
  }, []);

  return <Stepper steps={steps} />;
};
