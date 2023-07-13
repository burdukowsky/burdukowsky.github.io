import { FC, useMemo } from 'react';

import { Edu } from 'app/types';
import { Stepper, StepperStep } from 'app/components/stepper/Stepper';
import { EducationView } from './components/EducationView';

const myEdu: Edu[] = [
  {
    title: "Master's Degree",
    qualification: 'Master in "Information Systems and Technologies"',
    qualificationProfile: 'Electronic Business',
    form: 'Full-time',
    org: 'Novosibirsk State University of Economics and Management',
    orgSite: 'https://nsuem.ru/',
    from: '2016',
    to: '2018',
    location: 'Novosibirsk, Russia',
    achievements: ['Honours degree'],
  },
  {
    title: "Bachelor's Degree",
    qualification: 'Bachelor in "Fundamental Informatics and IT"',
    qualificationProfile: 'Software Engineering',
    form: 'Full-time',
    org: 'Novosibirsk State University of Economics and Management',
    orgSite: 'https://nsuem.ru/',
    from: '2012',
    to: '2016',
    location: 'Novosibirsk, Russia',
    achievements: [
      'Honours degree',
      'Nomination "The Most Technological Project" at the Exhibition of Web Technologies for Business at NSUEM in 2016',
    ],
  },
];

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
