import { useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, (key: string) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.error(e);
    }
  };

  const clearValue = (key: string): void => {
    try {
      setStoredValue(initialValue);
      localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  };

  const clearStorage = (): void => {
    try {
      localStorage.clear();
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setValue, clearValue, clearStorage];
};

export default useLocalStorage;
