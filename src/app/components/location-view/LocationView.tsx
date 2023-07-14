import { FCC } from '../../utils/utility-types';
import { AppText } from '../app-text/AppText';
import { WithIcon } from '../with-icon/WithIcon';

export const LocationView: FCC = ({ children }) => {
  return (
    <WithIcon icon='place'>
      <AppText size='1.1rem'>{children}</AppText>
    </WithIcon>
  );
};
