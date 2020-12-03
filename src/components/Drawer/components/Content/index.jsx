import React, { memo } from 'react';

import { ReactComponent as Logo } from './images/rimac.svg';

import './index.scss';

const Content = () => {
  return (
    <div className="r-drawer p-4">
      <div className="r-drawer r-drawer-logo">
        <Logo height={50} width={50} />
      </div>
    </div>
  );
};

export default memo(Content);
