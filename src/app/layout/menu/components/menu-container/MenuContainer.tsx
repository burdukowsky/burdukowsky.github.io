import classNames from 'classnames';

import { FCC } from 'app/utils/utility-types';
import { Space } from 'app/components/space/Space';
import styles from './MenuContainer.module.scss';

interface Props {
  className?: string;
}

export const MenuContainer: FCC<Props> = ({ className, children }) => {
  return (
    <div className={classNames(className, styles.MenuContainerDesktop)}>
      <Space direction='column' justifyContent='center' gap='15px'>
        {children}
      </Space>
    </div>
  );
};
