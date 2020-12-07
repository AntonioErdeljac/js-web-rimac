import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';

import './index.scss';

const NotFound = () => {
  return (
    <div className="r-not-found">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="r-not-found-icon">
          <FontAwesomeIcon size="8x" icon={['far', 'sad-tear']} />
        </div>
        <h4 className="mt-5 font-weight-bold">404</h4>
      </div>
    </div>
  );
};

export default memo(NotFound);
