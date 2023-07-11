import { Icon, IconType } from 'app/components/icon/Icon';
import { Space } from 'app/components/space/Space';
import { FCC } from 'app/utils/utility-types';

interface Props {
  icon: IconType;
}

export const ProjectLinkContent: FCC<Props> = ({ icon, children }) => {
  return (
    <Space gap='6px' alignItems='center'>
      <Icon name={icon} size='20px' />
      {children}
    </Space>
  );
};
