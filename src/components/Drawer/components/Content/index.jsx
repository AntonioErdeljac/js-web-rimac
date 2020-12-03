import React, { memo } from 'react';
import { Item } from './components';

import { ReactComponent as Logo } from './images/rimac.svg';

import './index.scss';

const Content = () => {
  return (
    <div className="r-drawer">
      <div className="p-4 r-drawer r-drawer-logo">
        <Logo height={50} width={50} />
      </div>
      <div className="pt-5 mt-2 d-flex justify-content-center align-items-center flex-column">
        <Item isActive icon="chart-line" />
        <Item icon="cogs" />
      </div>
    </div>
  );
};

export default memo(Content);
