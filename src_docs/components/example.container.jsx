import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import ExampleComponent from './example.component';
import GithubLogo from '../logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={11} md={8} lg={6}>
        <Row>
          <Col xs={10}>
            <h3>React select order list</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-select-order-list"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel>
          <ExampleComponent />
        </Panel>
      </Col>
    </Row>
  </Grid>
);
