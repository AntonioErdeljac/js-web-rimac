import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Info = ({ icon, title, value, suffix }) => {
  return (
    <Card className="r-info mb-4">
      <Card.Body className="d-flex align-items-center flex-column">
        <FontAwesomeIcon className="r-info r-info-icon" icon={icon} />
        <div className="mt-4">
          <strong className="text-primary">{title}</strong>
        </div>
        <div className="mt-4">
          <strong className="text-primary">
            {value}
            {suffix}
          </strong>
        </div>
      </Card.Body>
    </Card>
  );
};

Info.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  suffix: PropTypes.string,
};

Info.defaultProps = {
  suffix: '',
};

export default memo(Info);
