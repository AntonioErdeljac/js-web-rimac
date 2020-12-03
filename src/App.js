import React from 'react';

import { SystemProvider } from './providers';
import { Home } from './views';

const App = () => {
  return (
    <SystemProvider>
      <Home />
    </SystemProvider>
  );
};

export default App;
