import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import { SystemProvider } from './providers';
import { Drawer, Header, RouteRenderer } from './components';
import { icons } from './utils';

import './scss/index.scss';

icons();

const App = () => {
  return (
    <Router>
      <Drawer>
        <SystemProvider>
          <Header />
          <Container fluid className="px-5">
            <RouteRenderer />
          </Container>
        </SystemProvider>
      </Drawer>
    </Router>
  );
};

export default memo(App);
