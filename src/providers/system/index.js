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
    getAlertMessage,
    getStatus,
    getTemperature,
    getBattery,
    getMemory,
    getNetworkConnections,
    warn,
    getWarning,
    clearWarning,
  } = useSystemProvider();

  return (
    <Context.Provider
      value={{
        getAlertMessage,
        getStatus,
        getTemperature,
        getBattery,
        getMemory,
        getNetworkConnections,
        warn,
        getWarning,
        clearWarning,
      }}
    >
      {children}
    </Context.Provider>
  );
};

SystemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
