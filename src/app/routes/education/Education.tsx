import { FC, useMemo } from 'react';

import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { EducationView } from './components/EducationView';
import { myEdu } from 'app/data/education';

export const Education: FC = () => {
  const steps = useMemo<StepperStep[]>(() => {
    return myEdu.map(edu => ({
      title: edu.title,
      content: <EducationView value={edu} />,
    }));
  }, []);

  if (steps.length === 0) {
    return <>No education</>;
  }

  return <Stepper steps={steps} />;
};
