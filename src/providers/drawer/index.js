import PropTypes from 'prop-types';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const Context = createContext();

export const useDrawer = () => {
  const systemContext = useContext(Context);

  if (systemContext === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }

  return systemContext;
};

const mql = window.matchMedia(`(min-width: 992px)`);

export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocked, setIsDocked] = useState(mql.matches);

  const handleMediaQueryChange = useCallback(() => {
    setIsDocked(mql.matches);
  }, []);

  useEffect(() => {
    mql.addEventListener('change', handleMediaQueryChange);

    return () => mql.addEventListener('change', handleMediaQueryChange);
  }, [handleMediaQueryChange]);

  const toggle = useCallback(() => {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  }, []);

  const value = useMemo(() => ({ isOpen, toggle, isDocked }), [isOpen, toggle, isDocked]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
