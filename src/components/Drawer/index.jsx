import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Sidebar from 'react-sidebar';

import { Content } from './components';

import { useDrawer } from '../../providers';

import './index.scss';

const Drawer = ({ children }) => {
  const drawer = useDrawer();

  return (
    <Sidebar
      sidebar={<Content />}
      open={drawer.isOpen}
      onSetOpen={drawer.toggle}
      docked={drawer.isDocked}
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
