import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

import { SystemProvider } from './providers';
import { Home } from './views';
import { Drawer, Header } from './components';
import { icons } from './utils';

import './scss/index.scss';

icons();

const App = () => {
  return (
    <Drawer>
      <SystemProvider>
        <Header />
        <Container fluid className="px-5">
          <Home />
        </Container>
      </SystemProvider>
    </Drawer>
  );
};

export default memo(App);
