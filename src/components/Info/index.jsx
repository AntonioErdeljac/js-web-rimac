import CountUp from 'react-countup';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Info = ({ icon, title, value, suffix, min, max }) => {
  const isFaulty = useMemo(() => {
    const maxError = value >= max;
    const minError = value < min;

    return maxError || minError;
  }, [value, min, max]);

  return (
    <Card className="r-info mb-4">
      <Card.Body className="d-flex align-items-center flex-column">
        <FontAwesomeIcon className="r-info r-info-icon" icon={icon} />
        <div className="mt-4 mb-2">
          <strong className="text-primary">{title}</strong>
        </div>
        <div className="my-5">
          <h4 className={cn({ 'text-danger': isFaulty })}>
            <CountUp duration={5} end={value} />
            {suffix}
          </h4>
        </div>
      </Card.Body>
    </Card>
  );
};

Info.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  suffix: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

Info.defaultProps = {
  suffix: '',
  value: 0,
  min: -Infinity,
  max: Infinity,
};

export default memo(Info);
