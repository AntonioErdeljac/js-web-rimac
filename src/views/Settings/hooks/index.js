import { useCallback } from 'react';

import { useLocalStorage } from '../../../hooks';

export const useSettings = () => {
  const [battery, setBattery] = useLocalStorage('r-battery', {});
  const [network, setNetwork] = useLocalStorage('r-network', {});
  const [cpu, setCpu] = useLocalStorage('r-cpu', {});
  const [memory, setMemory] = useLocalStorage('r-memory', {});

  const onChangeBattery = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setBattery({ ...battery, [name]: value });
    },
    [battery, setBattery],
  );

  const onChangeNetwork = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setNetwork({ ...network, [name]: value });
    },
    [network, setNetwork],
  );

  const onChangeCpu = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setCpu({ ...cpu, [name]: value });
    },
    [cpu, setCpu],
  );

  const onChangeMemory = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setMemory({ ...memory, [name]: value });
    },
    [memory, setMemory],
  );

  return {
    battery,
    memory,
    cpu,
    network,
    onChangeBattery,
    onChangeMemory,
    onChangeCpu,
    onChangeNetwork,
  };
};
