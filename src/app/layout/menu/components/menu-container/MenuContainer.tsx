import classNames from 'classnames';

import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { FCC } from 'app/utils/utility-types';
import { Space } from 'app/components/space/Space';
import styles from './MenuContainer.module.scss';

interface Props {
  className?: string;
}

export const MenuContainer: FCC<Props> = ({ className, children }) => {
  const mobile = useMobileMediaQuery();
  return mobile ? (
    <Space gap='35px' justifyContent='center' wrap className={className}>
      {children}
    </Space>
  ) : (
    <div className={classNames(className, styles.MenuContainerDesktop)}>
      <Space direction='column' justifyContent='center' gap='15px'>
        {children}
      </Space>
    </div>
  );
};
