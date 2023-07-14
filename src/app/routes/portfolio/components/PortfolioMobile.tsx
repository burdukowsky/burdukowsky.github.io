import { FC } from 'react';

import { ProjectView } from './project-view/ProjectView';
import { myProjects } from 'app/data/portfolio';
import { SeparatedList } from 'app/components/separated-list/SeparatedList';

export const PortfolioMobile: FC = () => {
  return (
    <SeparatedList
      data={myProjects}
      renderItem={p => <ProjectView value={p} style={{ width: '100%' }} />}
    />
  );
};
