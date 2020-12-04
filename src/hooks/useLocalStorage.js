import { useState, useCallback } from 'react';

export default (key) => {
  const [savedValue, setSavedValue] = useState(() => {
    const value = window.localStorage.getItem(key);

    return JSON.parse(value);
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
