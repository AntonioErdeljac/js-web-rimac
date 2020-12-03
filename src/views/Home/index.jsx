import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Info, Message } from '../../components';
import { useSystem } from '../../providers';

const Home = () => {
  const system = useSystem();

  return (
    <div className="mt-5">
      <Row>
        <Col md={4}>
          <Message
            variant={system.getIsConnected() ? 'success' : 'danger'}
            icon="exclamation-circle"
            title="Alert"
            description={
              system.getIsConnected() ? 'Actively connected.' : 'No connection with any hardware.'
            }
          />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Info title="Battery" icon="bolt" value={system.getBattery()} suffix="%" />
        </Col>
        <Col md={4}>
          <Info
            title="Network Connections"
            icon="network-wired"
            value={system.getNetworkConnections()}
          />
        </Col>
        <Col md={4}>
          <Info
            title="CPU Temperature"
            icon="thermometer-three-quarters"
            value={system.getTemperature()}
            suffix="°C"
          />
        </Col>
        <Col md={4}>
          <Info title="Memory Usage" icon="memory" value={system.getMemory()} suffix="%" />
        </Col>
      </Row>
    </div>
  );
};

export default memo(Home);
