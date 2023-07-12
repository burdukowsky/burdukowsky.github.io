import { FC } from 'react';

import { Edu } from 'app/types';
import { List } from 'app/components/list/List';
import { LocationView } from 'app/components/location-view/LocationView';
import { Space } from 'app/components/space/Space';
import { OrgView } from 'app/components/org-view/OrgView';
import { AppText } from 'app/components/app-text/AppText';

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

      <Space gap='8px' justifyContent='space-between' alignItems='center'>
        <AppText size='1.1rem'>
          <OrgView name={org} site={orgSite} />
        </AppText>
        <LocationView>{location}</LocationView>
      </Space>

      <p>
        {from} - {to}, {form}
      </p>

      {achievements != null && (
        <List title='Achievements' items={achievements} />
      )}
    </Space>
  );
};
