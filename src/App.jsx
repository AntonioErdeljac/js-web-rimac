import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SystemProvider } from './providers';
import { Drawer, Header } from './components';
import { Home, Settings, Help } from './views';
import { icons } from './utils';

import './scss/index.scss';
import routes from './routes';

icons();

const App = () => {
  return (
    <Router>
      <Drawer>
        <SystemProvider>
          <Header />
          <Container fluid className="px-5">
            <Switch>
              {routes({ Home, Settings, Help }).map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  component={route.component}
                  path={route.path}
                />
              ))}
            </Switch>
          </Container>
        </SystemProvider>
      </Drawer>
    </Router>
  );
};

export default memo(App);
