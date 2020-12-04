import CountUp from 'react-countup';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo } from 'react';
import { Card, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

import { useSystem } from '../../providers';

const Info = ({ icon, title, value, suffix, min, max, warning, edit, onChange }) => {
  const { warn, clearWarning } = useSystem();

  const isFaulty = useMemo(() => {
    const maxError = value > max;
    const minError = value < min;

    return maxError || minError;
  }, [value, min, max]);

  useEffect(() => {
    if (isFaulty && !edit) {
      warn(warning);
    } else if (!edit) {
      clearWarning(warning);
    }
  }, [isFaulty, warning, warn, clearWarning, edit]);

  return (
    <Card className="r-info mb-4">
      <Card.Body className="d-flex align-items-center flex-column">
        <FontAwesomeIcon size="2x" className="r-info r-info-icon" icon={icon} />
        <div className="mt-4">
          <strong className="text-primary">{title}</strong>
        </div>
        {edit ? (
          <div className="mt-3">
            <FormControl className="my-2" placeholder="Min" onChange={onChange} name="min" />
            <FormControl placeholder="Max" onChange={onChange} name="max" />
          </div>
        ) : (
          <>
            <div className="mt-4">
              <strong className={cn({ 'text-danger': isFaulty })}>
                <CountUp preserveValue duration={5} end={value} />
                {suffix}
              </strong>
            </div>
            <hr className="w-100" />
            <div className="d-inline-flex align-items-center justify-content-between w-100 px-5">
              <small className="text-muted">Max: {max}</small>
              <small className="text-muted">Min: {min}</small>
            </div>
          </>
        )}
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
  warning: PropTypes.string,
  edit: PropTypes.bool,
  onChange: PropTypes.func,
};

Info.defaultProps = {
  suffix: '',
  value: 0,
  min: -Infinity,
  max: Infinity,
  edit: false,
  onChange: () => {},
  warning: '',
};

export default memo(Info);
