import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isFuture } from 'date-fns';

import { FIREBASE_COLLECTION, CONNECTION_MS } from './constants';

import { firebase } from '../../utils';

export const useSystemProvider = () => {
  const [isConnected, setIsConnected] = useState(false);

  const warnings = useRef([]);
  const info = useRef({});

  useEffect(() => {
    const ref = firebase.db.ref(FIREBASE_COLLECTION);

    ref?.on('value', (snapshot) => {
      info.current = snapshot.val() || {};
    });

    return () => ref?.off();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(isFuture(new Date(info.current.expiresAt)));
    }, CONNECTION_MS);

    return () => clearInterval(interval);
  }, []);

  const warn = useCallback((message) => {
    warnings.current = [message, ...warnings.current];
  }, []);

  const getWarning = useCallback(() => warnings.current[0], []);
  const clearWarning = useCallback((id) => {
    warnings.current = [...warnings.current.filter((warning) => warning !== id)];
  }, []);

  const getStatus = useCallback(() => {
    if (!isConnected) {
      return 'danger';
    }

    if (warnings.current[0]) {
      return 'warning';
    }

    return 'success';
  }, [isConnected]);
  const getAlertMessage = useCallback(() => {
    const messagesMap = {
      danger: 'Connection not established.',
      success: 'All systems operational.',
      warning: getWarning(),
    };

    return messagesMap[getStatus()];
  }, [getStatus, getWarning]);
  const getTemperature = useCallback(() => info.current.temperature, []);
  const getBattery = useCallback(() => info.current.batteryPercentage, []);
  const getMemory = useCallback(() => info.current.memoryPercentage, []);
  const getNetworkConnections = useCallback(() => info.current.networkConnections, []);

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
