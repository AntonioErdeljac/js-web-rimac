import React, { memo } from 'react';
import { Item } from './components';

import { ReactComponent as Logo } from './images/rimac.svg';

import routes from '../../../../routes';

import './index.scss';

const Content = () => {
  return (
    <div className="r-drawer">
      <div className="p-4 r-drawer r-drawer-logo">
        <Logo height={45} width={45} />
      </div>
      <div className="pt-4 mt-2 d-flex justify-content-center align-items-center flex-column">
        {routes().map((route) => (
          <Item key={route.path} icon={route.icon} path={route.path} />
        ))}
      </div>
    </div>
  );
};

export default memo(Content);
