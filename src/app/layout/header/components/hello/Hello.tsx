import { FC } from 'react';

import { Space } from 'app/components/space/Space';

export const Hello: FC = () => {
  return (
    <Space direction='column' height='100%' justifyContent='center'>
      <p>Hi, I'm</p>
      <h1>
        Stanislav
        <br />
        Burdukowsky
      </h1>
      <p>Senior Frontend Developer</p>
    </Space>
  );
};
