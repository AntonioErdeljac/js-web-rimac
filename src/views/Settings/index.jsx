import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Info } from '../../components';

const Settings = () => {
  return (
    <Fade left>
      <div className="r-settings mt-5">
        <Row>
          <Col lg={3} md={6}>
            <Info title="Battery" icon="bolt" edit />
          </Col>
          <Col lg={3} md={6}>
            <Info title="Network Connections" icon="network-wired" edit />
          </Col>
          <Col lg={3} md={6}>
            <Info title="CPU Temperature" icon="thermometer-three-quarters" edit />
          </Col>
          <Col lg={3} md={6}>
            <Info title="Memory Usage" icon="memory" edit />
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

export default memo(Settings);
