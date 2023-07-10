import { FC } from 'react';

import { XP } from 'app/types';
import { Space } from 'app/components/space/Space';
import { Icon } from 'app/components/icon/Icon';

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
          {orgSite == null ? (
            <span>{org}</span>
          ) : (
            <a href={orgSite} target='_blank' rel='noreferrer'>
              {org}
            </a>
          )}
        </Space>
        <Space as='p' gap='4px' alignItems='center'>
          <Icon name='Place' />
          {location}
        </Space>
      </Space>
      {description != null && <p>{description}</p>}
      <h4>Responsibilities:</h4>
      <ul>
        {responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
      {achievements != null && (
        <>
          <h4>Achievements:</h4>
          <ul>
            {achievements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </>
      )}
    </Space>
  );
};
