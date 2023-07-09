import { useMobileMediaQuery } from 'app/hooks/media-queries';
import { FCC } from 'app/utils/utility-types';
import { Space } from 'app/components/space/Space';

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
    <Space
      direction='column'
      justifyContent='center'
      height='100%'
      gap='15px'
      className={className}
    >
      {children}
    </Space>
  );
};
