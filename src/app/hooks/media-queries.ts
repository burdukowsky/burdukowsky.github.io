import { useMediaQuery } from 'react-responsive';

export function useMobileMediaQuery(): boolean {
  return useMediaQuery({ maxWidth: 767 });
}

export function useExtraMobileMediaQuery(): boolean {
  return useMediaQuery({ maxWidth: 575 });
}
