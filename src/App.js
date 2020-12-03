import React from 'react';

import { SystemProvider } from './providers';
import { Home } from './views';

import './scss/index.scss';

const App = () => {
  return (
    <SystemProvider>
      <Home />
    </SystemProvider>
  );
};

export default App;
