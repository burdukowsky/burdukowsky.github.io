import { FC } from 'react';

interface Props {
  title?: string;
  items: string[];
}

export const List: FC<Props> = ({ title, items }) => {
  return (
    <>
      {title != null && <h4>{title}:</h4>}
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};
