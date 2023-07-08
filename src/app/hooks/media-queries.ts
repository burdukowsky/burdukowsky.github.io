import { useMediaQuery } from 'react-responsive';

export function useMobileMediaQuery(): boolean {
  return useMediaQuery({ maxWidth: 767 });
}
