import { FC, useMemo } from 'react';

import { Space } from 'app/components/space/Space';
import { ProjectView } from './project-view/ProjectView';
import { splitPairs } from 'app/utils/common';
import { myProjects } from 'app/data/portfolio';
import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { portfolioMobileGap } from './common';

export const PortfolioDesktop: FC = () => {
  const mobile = useMobileMediaQuery();

  const pairs = useMemo(() => {
    return splitPairs(myProjects);
  }, []);

  return (
    <Space direction='column' gap={mobile ? portfolioMobileGap : '1em'}>
      {pairs.map((pair, pairIndex) => {
        return (
          <Space
            key={pairIndex}
            gap={mobile ? portfolioMobileGap : '2em'}
            childrenFlex={['1 1 0', '1 1 0']}
          >
            {pair.map((p, i) => (
              <ProjectView
                key={i}
                value={p}
                border
                style={{ width: '100%', height: '100%' }}
              />
            ))}
          </Space>
        );
      })}
    </Space>
  );
};
