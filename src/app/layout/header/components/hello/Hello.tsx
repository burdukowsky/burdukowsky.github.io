import { FC } from 'react';

import { Space } from 'app/components/space/Space';
import { AppText } from 'app/components/text/Text';

export const Hello: FC = () => {
  return (
    <Space direction='column' height='100%' justifyContent='center'>
      <AppText as='p' color='primary' size='20px'>
        Hi, I'm
      </AppText>
      <h1>
        Stanislav
        <br />
        Burdukowsky
      </h1>
      <AppText as='p' size='18px'>
        Senior Frontend Developer
      </AppText>
    </Space>
  );
};
