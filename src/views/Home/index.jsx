import cn from 'classnames';
import FadeIn from 'react-fade-in';
import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import car from './images/car.png';

import { Info } from '../../components';
import { useSystem } from '../../providers';
import { useLocalStorage } from '../../hooks';

import './index.scss';

const Home = () => {
  const system = useSystem();

  const [battery] = useLocalStorage('r-battery', {});
  const [network] = useLocalStorage('r-network', {});
  const [cpu] = useLocalStorage('r-cpu', {});
  const [memory] = useLocalStorage('r-memory', {});

  return (
    <FadeIn>
      <div className="r-home">
        <div className="d-inline-flex align-items-center justify-content-center w-100">
          <img
            className={cn('mb-5 r-home r-home-image img-fluid', {
              'r-home-image--danger': system.getStatus() !== 'success',
            })}
            height={280}
            alt="car"
            src={car}
          />
        </div>
        <Row>
          <Col lg={3} md={6}>
            <Info
              min={battery.min}
              max={battery.max}
              title="Battery"
              icon="bolt"
              value={system.getBattery()}
              suffix="%"
              warning="Battery level not ideal!"
            />
          </Col>
          <Col lg={3} md={6}>
            <Info
              min={network.min}
              max={network.max}
              title="Network Connections"
              icon="network-wired"
              value={system.getNetworkConnections()}
              warning="Too many network connections!"
            />
          </Col>
          <Col lg={3} md={6}>
            <Info
              min={cpu.min}
              max={cpu.max}
              title="CPU Temperature"
              icon="thermometer-three-quarters"
              value={system.getTemperature()}
              suffix=" °C"
              warning="CPU temperature not ideal"
            />
          </Col>
          <Col lg={3} md={6}>
            <Info
              min={memory.min}
              max={memory.max}
              title="Memory Usage"
              icon="memory"
              value={system.getMemory()}
              suffix="%"
              warning="Memory usage level not ideal!"
            />
          </Col>
        </Row>
      </div>
    </FadeIn>
  );
};

export default memo(Home);
