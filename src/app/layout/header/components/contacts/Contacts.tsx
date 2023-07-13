import { FC } from 'react';

import { Space } from 'app/components/space/Space';
import { Icon } from 'app/components/icon/Icon';

export const Contacts: FC = () => {
  return (
    <Space gap='10px' alignItems='center'>
      <a href='tel:+79137533394' title='Phone'>
        <Icon name='phone' />
      </a>
      <a href='mailto:burdukowskystas@gmail.com' title='E-Mail'>
        <Icon name='mail' />
      </a>
      <a
        href='https://github.com/burdukowsky'
        target='_blank'
        rel='noreferrer'
        title='Github'
      >
        <Icon name='github' />
      </a>
      <a
        href='https://vk.com/stas6386778'
        target='_blank'
        rel='noreferrer'
        title='VK'
      >
        <Icon name='vk' />
      </a>
      <a
        href='https://t.me/stanislav_burdukowsky'
        target='_blank'
        rel='noreferrer'
        title='Telegram'
      >
        <Icon name='telegram' />
      </a>
    </Space>
  );
};
