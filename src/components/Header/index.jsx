import React, { memo } from 'react';
import { Message } from '..';

import { useSystem } from '../../providers';

import './index.scss';

const Header = () => {
  const system = useSystem();

  return (
    <div className="r-header d-inline-flex align-items-center justify-content-between px-5">
      <h4 className="text-primary text-monospace">CONCEPT_TWO</h4>
      <Message
        variant={system.getStatus()}
        icon="exclamation-circle"
        title={system.getStatus()}
        description={system.getAlertMessage()}
      />
    </div>
  );
};

export default memo(Header);
