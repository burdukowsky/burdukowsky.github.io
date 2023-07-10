import { FC, useMemo } from 'react';

import { XP } from '../../types';
import { ExperienceView } from './components/experience-view/ExperienceView';
import { Stepper, StepperStep } from '../../components/stepper/Stepper';

const myXp: XP[] = [
  {
    position: 'Lead Developer',
    org: 'RT MIS',
    orgSite: 'https://rtmis.ru/',
    from: 'May 2021',
    to: 'Ongoing',
    location: 'Novosibirsk, Russia',
    responsibilities: [
      'Development and support of a front-end business analytics project (development with React, Hooks, Redux Toolkit, Styled Components)',
      'Managing a development team (two subordinates)',
      'Development of the OpenAPI specification',
    ],
    achievements: [
      'Project development from scratch and bringing to production',
    ],
  },
  {
    position: 'Team Leader',
    org: 'ELTEX',
    orgSite: 'https://eltex-co.com/',
    from: 'Apr 2017',
    to: 'Apr 2021',
    location: 'Novosibirsk, Russia',
    responsibilities: [
      'Development and support of a corporate CRM system (Spring)',
      'Role of the technical lead in the front-end part of the smart home project (development in Angular 7+, migration from KnockoutJS)',
    ],
    achievements: [
      'Migrating from RequireJS to Webpack (migration, implementing ES6+, SCSS, VueJS, building icon font)',
      'Promotion from junior to technical lead',
    ],
  },
  {
    position: 'Web Developer',
    org: 'Edison Studio',
    orgSite: 'https://edisonstudio.ru/',
    from: 'Sep 2016',
    to: 'Mar 2017',
    location: 'Novosibirsk, Russia',
    responsibilities: [
      'Development of the front-end part of the sites (responsive layout based on PSD)',
      'Server side development (CMS Joomla, OpenCart and CodeIgniter framework)',
      'Development of the administrative panel of sites',
    ],
    achievements: [
      'Development of Project Management module for the company',
      'Development of mail client (IMAP, SMTP)',
      'Development of CMS for the company',
    ],
  },
  {
    position: 'Laboratory Assistant',
    org: 'NSUEM',
    orgSite: 'https://nsuem.ru/',
    from: 'Jun 2013',
    to: 'Jun 2016',
    location: 'Novosibirsk, Russia',
    responsibilities: [
      'Android application development (Java, Android)',
      'Development of back-end services (MySQL, PHP)',
    ],
  },
];

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
