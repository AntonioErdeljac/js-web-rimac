import cn from 'classnames';
import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import car from './images/car.png';

import { Info } from '../../components';
import { useSystem } from '../../providers';

import './index.scss';

const Home = () => {
  const system = useSystem();

  return (
    <div className="r-home">
      <Row className="d-inline-flex align-items-center justify-content-center w-100 flex-column">
        <img
          className={cn('mb-5 r-home r-home-image img-fluid', {
            'r-home-image--danger': system.getStatus() !== 'success',
          })}
          height={280}
          alt="car"
          src={car}
        />
      </Row>
      <Row>
        <Col lg={3} md={6}>
          <Info
            min={92}
            max={100}
            title="Battery"
            icon="bolt"
            value={system.getBattery()}
            suffix="%"
            warning="Battery level not ideal!"
          />
        </Col>
        <Col lg={3} md={6}>
          <Info
            min={10}
            max={130}
            title="Network Connections"
            icon="network-wired"
            value={system.getNetworkConnections()}
            warning="Too many network connections!"
          />
        </Col>
        <Col lg={3} md={6}>
          <Info
            min={30}
            max={70}
            title="CPU Temperature"
            icon="thermometer-three-quarters"
            value={system.getTemperature()}
            suffix=" °C"
            warning="CPU temperature not ideal"
          />
        </Col>
        <Col lg={3} md={6}>
          <Info
            min={30}
            max={70}
            title="Memory Usage"
            icon="memory"
            value={system.getMemory()}
            suffix="%"
            warning="Memory usage level not ideal!"
          />
        </Col>
      </Row>
    </div>
  );
};

export default memo(Home);
