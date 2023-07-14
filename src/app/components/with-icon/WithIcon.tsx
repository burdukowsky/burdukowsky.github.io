import { FCC } from 'app/utils/utility-types';
import { Icon, IconType } from '../icon/Icon';
import { Space } from '../space/Space';

interface Props {
  icon: IconType;
}

export const WithIcon: FCC<Props> = ({ icon, children }) => {
  return (
    <Space gap='8px' alignItems='center'>
      <Icon name={icon} />
      {children}
    </Space>
  );
};
