import React from 'react';
import { Panel, Col, Row } from 'react-bootstrap';
import { List } from 'immutable';

import SelectOrderList from '../../src/index';

export default class SelectOrderListView extends React.Component {
  constructor(props) {
    super(props);
    const availableData = this.initializeData(30);
    const selectedData = this.initializeData(5);
    const selectionList = this.initializeData(5);
    this.state = {
      availableData,
      selectedData,
      selectionList,
      allSelected: false,
    };
  }

  onChange = (data) => {
    this.setState({ ...data });
  }

  initializeData = (n) => {
    const numberOfItems = n < 2 ? 2 : n;
    let data = List([
      {
        isLocked: true,
        label: 'Item 1',
        value: 1,
      },
      {
        label: <span>Item 2</span>,
        value: 2,
      },
      {
        label: <div><span>Item 3</span></div>,
        value: 3,
      },
    ]);
    for (let i = 4; i <= numberOfItems; i += 1) {
      data = data.push({
        label: `Item ${i}`,
        value: i,
      });
    }
    return data;
  }

  render() {
    return (
      <Row>
        <Col xs={12} lg={6}>
          <Panel>
            <SelectOrderList
              allSelected={this.state.allSelected}
              availableData={this.state.availableData}
              id="example1"
              onChange={this.onChange}
              selectedData={this.state.selectedData}
              translations={{
                allLabel: 'All',
                availableListLabel: 'Available data',
                selectedListLabel: 'Selected data',
                searchTooltip: 'Test',
              }}
            />
          </Panel>
        </Col>
        <Col xs={12} lg={6}>
          <Panel>
            <SelectOrderList
              singleColumn
              selectedData={this.state.selectionList}
              id="example2"
              onChange={this.onChange}
              translations={{
                selectedListLabel: 'Order list',
              }}
            />
          </Panel>
        </Col>
      </Row>
    );
  }
}
