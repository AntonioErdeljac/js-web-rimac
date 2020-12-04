import React, { memo, useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import { Info } from '../../components';
import { useLocalStorage } from '../../hooks';

const Settings = () => {
  const [battery, setBattery] = useLocalStorage('r-battery', {});
  const [network, setNetwork] = useLocalStorage('r-network', {});
  const [cpu, setCpu] = useLocalStorage('r-cpu', {});
  const [memory, setMemory] = useLocalStorage('r-memory', {});

  const onChangeBattery = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setBattery({ ...battery, [name]: value });
    },
    [battery, setBattery],
  );

  const onChangeNetwork = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setNetwork({ ...network, [name]: value });
    },
    [network, setNetwork],
  );

  const onChangeCpu = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setCpu({ ...cpu, [name]: value });
    },
    [cpu, setCpu],
  );

  const onChangeMemory = useCallback(
    (event) => {
      const {
        target: { value, name },
      } = event;

      setMemory({ ...memory, [name]: value });
    },
    [memory, setMemory],
  );

  return (
    <Fade left>
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
    </Fade>
  );
};

export default memo(Settings);
