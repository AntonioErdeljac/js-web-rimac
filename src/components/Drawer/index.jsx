import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import Sidebar from 'react-sidebar';

import { Content } from './components';

import { useDrawer } from '../../providers';

import './index.scss';

const mql = window.matchMedia(`(min-width: 992px)`);

const Drawer = ({ children }) => {
  const drawer = useDrawer();

  const [isDocked, setIsDocked] = useState(mql.matches);

  const handleMediaQueryChange = useCallback(() => {
    setIsDocked(mql.matches);
  }, []);

  useEffect(() => {
    mql.addListener(handleMediaQueryChange);

    return () => mql.removeListener(handleMediaQueryChange);
  }, [handleMediaQueryChange]);

  return (
    <Sidebar
      sidebar={<Content />}
      open={drawer.isOpen}
      onSetOpen={drawer.toggle}
      docked={isDocked}
      sidebarClassName="r-sidebar"
    >
      {children}
    </Sidebar>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Drawer);
