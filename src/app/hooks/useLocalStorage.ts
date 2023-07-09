import { useEffect, useMemo, useState } from 'react';
import { localStoragePrefix } from '../globals';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (val: T) => void] {
  const lsKey = useMemo(() => {
    return localStoragePrefix + key;
  }, [key]);

  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(lsKey) ?? String(defaultValue),
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify(value));
  }, [value, lsKey]);

  return [value, setValue];
}
