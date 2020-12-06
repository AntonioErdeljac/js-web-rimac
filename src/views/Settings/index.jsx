import FadeIn from 'react-fade-in';
import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';

import { useSettings } from './hooks';

import { Info } from '../../components';

const Settings = () => {
  const {
    battery,
    memory,
    cpu,
    network,
    onChangeBattery,
    onChangeMemory,
    onChangeCpu,
    onChangeNetwork,
  } = useSettings();

  return (
    <FadeIn>
      <div className="r-settings mt-5">
        <Row>
          <Col lg={3} md={6}>
            <Info
              min={battery?.min}
              max={battery?.max}
              onChange={onChangeBattery}
              title="Battery"
              icon="bolt"
              edit
            />
          </Col>
          <Col lg={3} md={6}>
            <Info
              min={network?.min}
              max={network?.max}
              onChange={onChangeNetwork}
              title="Network Connections"
              icon="network-wired"
              edit
            />
          </Col>
          <Col lg={3} md={6}>
            <Info
              min={cpu?.min}
              max={cpu?.max}
              onChange={onChangeCpu}
              title="CPU Temperature"
              icon="thermometer-three-quarters"
              edit
            />
          </Col>
          <Col lg={3} md={6}>
            <Info
              min={memory?.min}
              max={memory?.max}
              onChange={onChangeMemory}
              title="Memory Usage"
              icon="memory"
              edit
            />
          </Col>
        </Row>
      </div>
    </FadeIn>
  );
};

export default memo(Settings);
