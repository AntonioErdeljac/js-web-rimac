import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

import { SystemProvider } from './providers';
import { Home } from './views';
import { Drawer } from './components';
import { icons } from './utils';

import './scss/index.scss';

icons();

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
