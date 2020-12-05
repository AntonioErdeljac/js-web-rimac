import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import Sidebar from 'react-sidebar';

import { Content } from './components';

import './index.scss';

const mql = window.matchMedia(`(min-width: 992px)`);

const Drawer = ({ children }) => {
  const [isDocked, setIsDocked] = useState(mql.matches);

  const handleMediaQueryChange = useCallback(() => {
    setIsDocked(mql.matches);
  }, []);

  useEffect(() => {
    mql.addListener(handleMediaQueryChange);

    return () => mql.removeListener(handleMediaQueryChange);
  }, [handleMediaQueryChange]);

  return (
    <Sidebar sidebar={<Content />} docked={isDocked} sidebarClassName="r-sidebar">
      {children}
    </Sidebar>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Drawer);
