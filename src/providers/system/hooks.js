import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isFuture } from 'date-fns';

import { FIREBASE_COLLECTION, CONNECTION_MS } from './constants';

import { firebase } from '../../utils';

export const useSystemProvider = () => {
  const [isConnected, setIsConnected] = useState(false);

  const oldMemory = useRef(0);
  const oldNetworkConnections = useRef(0);
  const oldBattery = useRef(0);
  const oldTemperature = useRef(0);

  const expiresAt = useRef(new Date());

  const [memory, setMemory] = useState(0);
  const [networkConnections, setNetworkConnections] = useState(0);
  const [battery, setBattery] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const warnings = useRef([]);

  useEffect(() => {
    const ref = firebase.db.ref(FIREBASE_COLLECTION);

    ref?.on('value', (snapshot) => {
      const values = snapshot.val();

      if (values.memoryPercentage !== oldMemory.current) {
        oldMemory.current = values.memoryPercentage;
        setMemory(values.memoryPercentage);
      }

      if (values.batteryPercentage !== oldBattery.current) {
        oldBattery.current = values.batteryPercentage;
        setBattery(values.batteryPercentage);
      }

      if (values.temperature !== oldTemperature.current) {
        oldTemperature.current = values.temperature;
        setTemperature(values.temperature);
      }

      if (values.networkConnections !== oldNetworkConnections.current) {
        oldNetworkConnections.current = values.networkConnections;
        setNetworkConnections(values.networkConnections);
      }

      if (values.expiresAt !== expiresAt.current) {
        expiresAt.current = values.expiresAt;
      }
    });

    return () => ref?.off();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(isFuture(new Date(expiresAt.current)));
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
  const getTemperature = useCallback(() => temperature, [temperature]);
  const getBattery = useCallback(() => battery, [battery]);
  const getMemory = useCallback(() => memory, [memory]);
  const getNetworkConnections = useCallback(() => networkConnections, [networkConnections]);

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
