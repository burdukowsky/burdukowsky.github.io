import { Fragment, ReactElement, ReactNode } from 'react';

interface Props<T> {
  data: T[];
  renderItem: (item: T) => ReactNode;
}

export function SeparatedList<T>({ data, renderItem }: Props<T>): ReactElement {
  return (
    <>
      {data.map((item, index) => (
        <Fragment key={index}>
          {index !== 0 && <hr className='my-4' />}
          {renderItem(item)}
        </Fragment>
      ))}
    </>
  );
}
