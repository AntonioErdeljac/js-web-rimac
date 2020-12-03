import React, { memo } from 'react';

import { useSystem } from '../../providers';

const Home = () => {
  const system = useSystem();

  return (
    <div>
      <h3 className="text-primary">
        <strong>Dashboard</strong>
      </h3>
      <p>Online: {system.getStatus()}</p>
      <p>Battery: {system.getBattery()}</p>
      <p>Network Connections: {system.getNetworkConnections()}</p>
      <p>CPU Temperature: {system.getTemperature()}</p>
      <p>Memory Usage: {system.getMemory()}</p>
    </div>
  );
};

export default memo(Home);