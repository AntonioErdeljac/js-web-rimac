import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../routes';

const RouteRenderer = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact={route.exact} component={route.component} path={route.path} />
      ))}
    </Switch>
  );
};

export default memo(RouteRenderer);
