import { Icon } from '../icon/Icon';
import { Space } from '../space/Space';
import { FCC } from '../../utils/utility-types';

export const LocationView: FCC = ({ children }) => {
  return (
    <Space as='p' gap='4px' alignItems='center'>
      <Icon name='Place' />
      {children}
    </Space>
  );
};
