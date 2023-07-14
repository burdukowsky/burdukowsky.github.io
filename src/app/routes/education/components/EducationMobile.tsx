import { FC } from 'react';

import { SeparatedList } from 'app/components/separated-list/SeparatedList';
import { myEdu } from 'app/data/education';
import { EducationView } from './EducationView';

export const EducationMobile: FC = () => {
  return (
    <SeparatedList
      data={myEdu}
      renderItem={edu => <EducationView value={edu} />}
    />
  );
};
