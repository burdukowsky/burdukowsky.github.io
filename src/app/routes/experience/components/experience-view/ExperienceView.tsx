import { FC } from 'react';

import { XP } from 'app/types';
import { Space } from 'app/components/space/Space';
import { List } from 'app/components/list/List';
import { LocationView } from 'app/components/location-view/LocationView';
import { OrgView } from 'app/components/org-view/OrgView';
import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { WithIcon } from 'app/components/with-icon/WithIcon';

interface Props {
  value: XP;
}

export const ExperienceView: FC<Props> = ({
  value: {
    from,
    to,
    position,
    location,
    description,
    org,
    orgSite,
    responsibilities,
    achievements,
  },
}) => {
  const mobile = useMobileMediaQuery();

  return (
    <Space direction='column' gap='.5em'>
      <Space
        gap='8px'
        justifyContent='space-between'
        alignItems={mobile ? undefined : 'center'}
        wrap
        direction={mobile ? 'column' : undefined}
      >
        <Space as='h3' gap='8px' wrap className='mb-0'>
          {position}
          <WithIcon icon='at'>
            <OrgView name={org} site={orgSite} />
          </WithIcon>
        </Space>
        {mobile && (
          <WithIcon icon='dateRange'>
            {from} - {to}
          </WithIcon>
        )}
        <LocationView>{location}</LocationView>
      </Space>
      {description != null && <p>{description}</p>}
      <List title='Responsibilities' items={responsibilities} />
      {achievements != null && (
        <List title='Achievements' items={achievements} />
      )}
    </Space>
  );
};
