import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Sidebar from 'react-sidebar';

import { Content } from './components';

import './index.scss';

const Drawer = ({ children }) => {
  return (
    <Sidebar sidebar={<Content />} docked sidebarClassName="r-sidebar">
      {children}
    </Sidebar>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Drawer);
