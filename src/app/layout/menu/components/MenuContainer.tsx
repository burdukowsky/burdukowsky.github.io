import { useMobileMediaQuery } from '../../../hooks/media-queries';
import { FCC } from '../../../utils/utility-types';
import { Space } from '../../../components/space/Space';

export const MenuContainer: FCC = ({ children }) => {
  const mobile = useMobileMediaQuery();
  return mobile ? (
    <Space gap='35px' justifyContent='center' wrap>
      {children}
    </Space>
  ) : (
    <Space direction='column' justifyContent='center' height='100%' gap='15px'>
      {children}
    </Space>
  );
};
