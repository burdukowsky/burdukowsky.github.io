import { FC } from 'react';

import styles from './Header.module.scss';
import { ThemeSwitcher } from '../../components/theme-switcher/ThemeSwitcher';
import { Space } from '../../components/space/Space';
import { Hello } from './components/hello/Hello';
import { useMobileMediaQuery } from '../../hooks/media-queries';

export const Header: FC = () => {
  const mobile = useMobileMediaQuery();

  return (
    <Space
      className={styles.Header}
      justifyContent='space-between'
      childrenFlex={[1, 1]}
    >
      <Hello />
      <Space
        direction='column'
        justifyContent='space-between'
        height='100%'
        childrenStyle={[{ alignSelf: 'end' }, { alignSelf: 'center' }]}
      >
        <ThemeSwitcher />
        {!mobile && <img src='img/coder.png' alt='Me' width='300px' />}
      </Space>
    </Space>
  );
};
