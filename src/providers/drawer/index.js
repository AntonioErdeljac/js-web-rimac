import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

export const Context = createContext();

export const useDrawer = () => {
  const systemContext = useContext(Context);

  if (systemContext === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }

  return systemContext;
};

export const DrawerProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
