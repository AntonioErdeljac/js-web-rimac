import React, { memo } from 'react';

import './index.scss';

const Header = () => {
  return (
    <div className="r-header d-inline-flex align-items-center px-5">
      <h4 className="text-primary">
        <b>Dashboard</b>
      </h4>
    </div>
  );
};

export default memo(Header);
