import { useState, useCallback } from 'react';

export default (key, defaultValue) => {
  const [savedValue, setSavedValue] = useState(() => {
    const value = window.localStorage.getItem(key);

    return value ? JSON.parse(value) : defaultValue;
  });

  const setValue = useCallback(
    (value) => {
      setSavedValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  return [savedValue, setValue];
};
