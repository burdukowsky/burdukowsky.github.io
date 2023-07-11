import { FC } from 'react';

import { XP } from 'app/types';
import { Space } from 'app/components/space/Space';
import { Icon } from 'app/components/icon/Icon';
import { List } from 'app/components/list/List';
import { LocationView } from 'app/components/location-view/LocationView';
import { OrgView } from 'app/components/org-view/OrgView';

interface Props {
  value: XP;
}

export const ExperienceView: FC<Props> = ({
  value: {
    position,
    location,
    description,
    org,
    orgSite,
    responsibilities,
    achievements,
  },
}) => {
  return (
    <Space direction='column'>
      <Space gap='8px' justifyContent='space-between'>
        <Space as='h3' gap='8px'>
          {position}
          <Icon name='At' />
          <OrgView name={org} site={orgSite} />
        </Space>
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
