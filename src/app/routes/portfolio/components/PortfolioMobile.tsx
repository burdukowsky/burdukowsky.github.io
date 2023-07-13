import { FC, Fragment } from 'react';

import { Space } from 'app/components/space/Space';
import { ProjectView } from './project-view/ProjectView';
import { myProjects } from 'app/data/portfolio';
import { portfolioMobileGap } from './common';

export const PortfolioMobile: FC = () => {
  return (
    <Space direction='column' gap={portfolioMobileGap}>
      {myProjects.map((p, i) => (
        <Fragment key={i}>
          <ProjectView value={p} style={{ width: '100%' }} />
          {i !== myProjects.length - 1 && (
            <hr style={{ marginTop: portfolioMobileGap }} />
          )}
        </Fragment>
      ))}
    </Space>
  );
};
