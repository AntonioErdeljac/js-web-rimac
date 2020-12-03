import React, { useEffect, useState } from 'react';
import { isFuture } from 'date-fns';

import { firebase } from './utils';

const CONNECTION_MS = 1000;

const App = () => {
  const [info, setInfo] = useState({});
  const [online, setOnline] = useState(false);

  useEffect(() => {
    firebase.db.ref('info').on('value', (snapshot) => {
      setInfo(snapshot.val() || {});
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnline(isFuture(new Date(info.expiresAt)));
    }, CONNECTION_MS);

    return () => clearInterval(interval);
  }, [info.expiresAt]);

  return (
    <>
      <div>CPU Temp: {info.temperature} C°</div>
      <div>Battery percentage: {info.batteryPercentage}%</div>
      <div>Used memory percentage: {info.memoryPercentage}%</div>
      <div>Online: {`${online}`}</div>
    </>
  );
};

export default App;
