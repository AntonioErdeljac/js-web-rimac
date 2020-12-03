import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { useSystemProvider } from './hooks';

export const Context = createContext();

export const useSystem = () => {
  const systemContext = useContext(Context);

  if (systemContext === undefined) {
    throw new Error('useSystem must be used within a SystemProvider');
  }

  return systemContext;
};

export const SystemProvider = ({ children }) => {
  const {
    getIsConnected,
    getTemperature,
    getBattery,
    getMemory,
    getNetworkConnections,
  } = useSystemProvider();

  return (
    <Context.Provider
      value={{ getIsConnected, getTemperature, getBattery, getMemory, getNetworkConnections }}
    >
      {children}
    </Context.Provider>
  );
};

SystemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
