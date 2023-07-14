import { FC } from 'react';

import { myXp } from 'app/data/experience';
import { ExperienceView } from './experience-view/ExperienceView';
import { SeparatedList } from 'app/components/separated-list/SeparatedList';

export const ExperienceMobile: FC = () => {
  return (
    <SeparatedList
      data={myXp}
      renderItem={xp => <ExperienceView value={xp} />}
    />
  );
};
