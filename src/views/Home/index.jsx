import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import car from './car.png';

import { Info } from '../../components';
import { useSystem } from '../../providers';

const Home = () => {
  const system = useSystem();

  return (
    <div>
      <Row className="d-inline-flex align-items-center justify-content-center w-100 flex-column">
        <img className="mb-5" height={280} alt="car" src={car} />
      </Row>
      <Row>
        <Col md={3}>
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
        <Col md={3}>
          <Info
            min={10}
            max={130}
            title="Network Connections"
            icon="network-wired"
            value={system.getNetworkConnections()}
            warning="Too many network connections!"
          />
        </Col>
        <Col md={3}>
          <Info
            min={30}
            max={70}
            title="CPU Temperature"
            icon="thermometer-three-quarters"
            value={system.getTemperature()}
            suffix=" °C"
            warning="CPU is overheating!"
          />
        </Col>
        <Col md={3}>
          <Info
            min={30}
            max={70}
            title="Memory Usage"
            icon="memory"
            value={system.getMemory()}
            suffix="%"
          />
        </Col>
      </Row>
    </div>
  );
};

export default memo(Home);
