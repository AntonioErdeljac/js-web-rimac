import React, { lazy, memo, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DrawerProvider, SystemProvider } from './providers';
import { Drawer, Header, Loader } from './components';
import { icons } from './utils';

import './scss/index.scss';
import routes from './routes';

const Help = lazy(() => import('./views/Help'));
const Home = lazy(() => import('./views/Home'));
const Settings = lazy(() => import('./views/Settings'));
const NotFound = lazy(() => import('./views/NotFound'));

icons.initialize();

const App = () => {
  return (
    <Router>
      <DrawerProvider>
        <Drawer>
          <SystemProvider>
            <Header />
            <Container fluid className="px-lg-5 px-3 mb-3">
              <Suspense fallback={<Loader />}>
                <Switch>
                  {routes({ Home, Settings, Help, NotFound }).map((route) => (
                    <Route
                      key={route.path}
                      exact={route.exact}
                      component={route.component}
                      path={route.path}
                    />
                  ))}
                </Switch>
              </Suspense>
            </Container>
          </SystemProvider>
        </Drawer>
      </DrawerProvider>
    </Router>
  );
};

export default memo(App);
