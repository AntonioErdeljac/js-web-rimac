import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Message } from '../../components';

import { useSystem } from '../../providers';

const Home = () => {
  const system = useSystem();

  return (
    <div className="mt-5">
      <Row>
        <Col md={4}>
          <Message
            variant="danger"
            icon="exclamation-circle"
            title="Alert"
            description="No connection with any hardware."
          />
        </Col>
        <p>Online: {system.getStatus()}</p>
        <p>Battery: {system.getBattery()}</p>
        <p>Network Connections: {system.getNetworkConnections()}</p>
        <p>CPU Temperature: {system.getTemperature()}</p>
        <p>Memory Usage: {system.getMemory()}</p>
      </Row>
    </div>
  );
};

export default memo(Home);
