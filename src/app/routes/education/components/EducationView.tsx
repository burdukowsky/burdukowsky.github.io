import { FC } from 'react';

import { Edu } from 'app/types';
import { List } from 'app/components/list/List';
import { LocationView } from 'app/components/location-view/LocationView';
import { Space } from 'app/components/space/Space';
import { OrgView } from 'app/components/org-view/OrgView';

interface Props {
  value: Edu;
}

export const EducationView: FC<Props> = ({
  value: {
    qualification,
    form,
    org,
    orgSite,
    from,
    to,
    location,
    achievements,
  },
}) => {
  return (
    <Space direction='column'>
      <h3>{qualification}</h3>

      <OrgView name={org} site={orgSite} />

      <Space gap='16px' alignItems='center'>
        <p>
          {from} - {to}, {form}
        </p>
        <LocationView>{location}</LocationView>
      </Space>

      {achievements != null && (
        <List title='Achievements' items={achievements} />
      )}
    </Space>
  );
};
