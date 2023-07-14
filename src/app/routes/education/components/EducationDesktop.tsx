import { FC, useMemo } from 'react';

import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { myEdu } from 'app/data/education';
import { EducationView } from './EducationView';

export const EducationDesktop: FC = () => {
  const steps = useMemo<StepperStep[]>(() => {
    return myEdu.map(edu => ({
      title: edu.title,
      content: <EducationView value={edu} />,
    }));
  }, []);

  return <Stepper steps={steps} />;
};
