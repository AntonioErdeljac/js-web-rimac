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
      <Header />
      <Container fluid className="px-5">
        <SystemProvider>
          <Home />
        </SystemProvider>
      </Container>
    </Drawer>
  );
};

export default memo(App);
