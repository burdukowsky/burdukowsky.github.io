import { FC } from 'react';

interface Props {
  name: string;
  site?: string;
}

export const OrgView: FC<Props> = ({ name, site }) => {
  return site == null ? (
    <span>{name}</span>
  ) : (
    <a href={site} target='_blank' rel='noreferrer'>
      {name}
    </a>
  );
};
