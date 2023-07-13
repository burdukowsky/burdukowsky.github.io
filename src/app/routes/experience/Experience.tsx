import { FC, useMemo } from 'react';

import { ExperienceView } from './components/experience-view/ExperienceView';
import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { myXp } from 'app/data/experience';

export const Experience: FC = () => {
  const steps = useMemo<StepperStep[]>(() => {
    return myXp.map(xp => ({
      title: `${xp.from} - ${xp.to}`,
      content: <ExperienceView value={xp} />,
    }));
  }, []);

  if (steps.length === 0) {
    return <>No experience</>;
  }

  return <Stepper steps={steps} />;
};
