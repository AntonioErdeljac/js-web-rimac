import { useCallback, useEffect, useMemo, useState } from 'react';
import { isFuture } from 'date-fns';

import { FIREBASE_COLLECTION, CONNECTION_MS } from './constants';

import { firebase } from '../../utils';

export const useSystemProvider = () => {
  const [info, setInfo] = useState({});
  const [isConnected, setIsConnected] = useState(false);
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    const ref = firebase.db.ref(FIREBASE_COLLECTION);

    ref?.on('value', (snapshot) => {
      setInfo(snapshot.val() || {});
    });

    return () => ref?.off();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(isFuture(new Date(info.expiresAt)));
    }, CONNECTION_MS);

    return () => clearInterval(interval);
  }, [info.expiresAt]);

  const warn = useCallback(
    (message) => setWarnings((oldWarnings) => [message, ...oldWarnings]),
    [],
  );
  const getWarning = useCallback(() => warnings[0], [warnings]);
  const clearWarning = useCallback(
    (id) => setWarnings((oldWarnings) => [...oldWarnings.filter((warning) => warning !== id)]),
    [],
  );

  const getStatus = useCallback(() => {
    if (!isConnected) {
      return 'danger';
    }

    if (warnings[0]) {
      return 'warning';
    }

    return 'success';
  }, [warnings, isConnected]);
  const getAlertMessage = useCallback(() => {
    const messagesMap = {
      danger: 'Connection not established.',
      success: 'All systems operational.',
      warning: getWarning(),
    };

    return messagesMap[getStatus()];
  }, [getStatus, getWarning]);
  const getTemperature = useCallback(() => info.temperature, [info.temperature]);
  const getBattery = useCallback(() => info.batteryPercentage, [info.batteryPercentage]);
  const getMemory = useCallback(() => info.memoryPercentage, [info.memoryPercentage]);
  const getNetworkConnections = useCallback(() => info.networkConnections, [
    info.networkConnections,
  ]);

  const value = useMemo(
    () => ({
      getAlertMessage,
      getStatus,
      getTemperature,
      getBattery,
      getMemory,
      getNetworkConnections,
      warn,
      getWarning,
      clearWarning,
    }),
    [
      getAlertMessage,
      getStatus,
      getTemperature,
      getBattery,
      getMemory,
      getNetworkConnections,
      warn,
      getWarning,
      clearWarning,
    ],
  );

  return value;
};
