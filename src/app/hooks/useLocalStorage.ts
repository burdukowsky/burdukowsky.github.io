import { useEffect, useState } from 'react';

import {
  getLocalStorageValue,
  setLocalStorageValue,
} from '../utils/local-storage';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (val: T) => void] {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, defaultValue);
  });

  useEffect(() => {
    setLocalStorageValue(key, value);
  }, [value, key]);

  return [value, setValue];
}
