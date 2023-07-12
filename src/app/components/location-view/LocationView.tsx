import { Icon } from '../icon/Icon';
import { Space } from '../space/Space';
import { FCC } from '../../utils/utility-types';
import { AppText } from '../app-text/AppText';

export const LocationView: FCC = ({ children }) => {
  return (
    <Space as='p' gap='4px' alignItems='center'>
      <Icon name='place' />
      <AppText size='1.1rem'>{children}</AppText>
    </Space>
  );
};
