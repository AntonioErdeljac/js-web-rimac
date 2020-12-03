import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Sidebar from 'react-sidebar';

import { Content } from './components';

const Drawer = ({ children }) => {
  return (
    <Sidebar sidebar={<Content />} docked styles={{ sidebar: { background: 'white' } }}>
      {children}
    </Sidebar>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Drawer);
