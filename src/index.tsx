import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

export const useLocalStorage = (key: string, defaultValue: string) => {
  return useStorage(window.localStorage, key, defaultValue);
};

export const useSessionStorage = (key: string, defaultValue: string) => {
  return useStorage(window.sessionStorage, key, defaultValue);
};

const useStorage = (
  storageObj: Storage,
  key: string,
  defaultValue: string
): [
  undefined | string,
  Dispatch<SetStateAction<undefined | string>>,
  () => void
] => {
  const [value, setValue] = useState<undefined | string>(
    storageObj.getItem(key) ?? defaultValue
  );

  const remove = useCallback(() => {
    storageObj.removeItem(key);
    setValue(undefined);
  }, [key, storageObj]);

  useEffect(() => {
    value && storageObj.setItem(key, value);
  }, [key, value, storageObj]);

  return [value, setValue, remove];
};
