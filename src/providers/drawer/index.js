import PropTypes from 'prop-types';
import React, { createContext, useCallback, useContext, useState } from 'react';

export const Context = createContext();

export const useDrawer = () => {
  const systemContext = useContext(Context);

  if (systemContext === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }

  return systemContext;
};

export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  }, []);

  return <Context.Provider value={{ isOpen, toggle }}>{children}</Context.Provider>;
};

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
