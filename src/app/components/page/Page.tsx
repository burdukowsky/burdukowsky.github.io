import { FCC } from 'app/utils/utility-types';
import { Space } from '../space/Space';
import { AppText } from '../app-text/AppText';

interface Props {
  title?: string;
}

export const Page: FCC<Props> = ({ title, children }) => {
  return (
    <Space direction='column' gap='.5em'>
      {title != null && (
        <AppText as='h2' align='center' className='mt-0 comment'>
          {title}
        </AppText>
      )}
      {children}
    </Space>
  );
};
