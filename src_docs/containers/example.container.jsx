import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={12}>
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
        <ExampleComponent />
      </Col>
    </Row>
  </Grid>
);
