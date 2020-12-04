import React, { memo } from 'react';
import { Item } from './components';

import { ReactComponent as Logo } from './images/rimac.svg';

import './index.scss';

const Content = () => {
  return (
    <div className="r-drawer">
      <div className="p-4 r-drawer r-drawer-logo">
        <Logo height={45} width={45} />
      </div>
      <div className="pt-4 mt-2 d-flex justify-content-center align-items-center flex-column">
        <Item isActive icon="tachometer-alt" />
        <Item icon="cog" />
      </div>
    </div>
  );
};

export default memo(Content);
