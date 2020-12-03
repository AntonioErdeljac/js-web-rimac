import { useCallback, useEffect, useState } from 'react';
import { isFuture } from 'date-fns';

import { FIREBASE_COLLECTION, CONNECTION_MS } from './constants';

import { firebase } from '../../utils';

export const useSystemProvider = () => {
  const [info, setInfo] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    firebase.db.ref(FIREBASE_COLLECTION).on('value', (snapshot) => {
      setInfo(snapshot.val() || {});
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(isFuture(new Date(info.expiresAt)));
    }, CONNECTION_MS);

    return () => clearInterval(interval);
  }, [info.expiresAt]);

  const getStatus = useCallback(() => `${isConnected}`, [isConnected]);
  const getTemperature = useCallback(() => `${info.temperature}°C`, [info.temperature]);
  const getBattery = useCallback(() => `${info.batteryPercentage}%`, [info.batteryPercentage]);
  const getMemory = useCallback(() => `${info.memoryPercentage}%`, [info.memoryPercentage]);
  const getNetworkConnections = useCallback(() => info.networkConnections, [
    info.networkConnections,
  ]);

  return { getStatus, getTemperature, getBattery, getMemory, getNetworkConnections };
};
