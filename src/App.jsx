import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

import { SystemProvider } from './providers';
import { Home } from './views';
import { Drawer } from './components';

import './scss/index.scss';

const App = () => {
  return (
    <Drawer>
      <Container fluid>
        <SystemProvider>
          <Home />
        </SystemProvider>
      </Container>
    </Drawer>
  );
};

export default memo(App);
