import { FC } from 'react';

import { XP } from 'app/types';

interface Props {
  value: XP;
}

export const ExperienceView: FC<Props> = ({ value }) => {
  return <>{JSON.stringify(value)}</>;
};
