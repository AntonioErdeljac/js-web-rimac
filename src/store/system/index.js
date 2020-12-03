import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

export const Context = createContext();

export const useSystem = () => {
  const systemContext = useContext(Context);

  if (systemContext === undefined) {
    throw new Error('useSystem must be used within a SystemProvider');
  }

  return systemContext;
};

export const SystemProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

SystemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
