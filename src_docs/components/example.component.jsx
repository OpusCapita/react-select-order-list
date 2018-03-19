import React from 'react';
import { List } from 'immutable';

import SelectOrderList from '../../src/index';
import './example.component.scss';

export default class SelectOrderListView extends React.Component {
  constructor(props) {
    super(props);
    const availableData = this.initializeData(30);
    const selectedData = this.initializeData(5);
    this.state = {
      availableData,
      selectedData,
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
    ]);
    for (let i = 2; i <= numberOfItems; i += 1) {
      data = data.push({
        label: `Item ${i}`,
        value: i,
      });
    }
    return data;
  }

  render() {
    return (
      <div className="oc-select-order-list">
        <SelectOrderList
          allSelected={this.state.allSelected}
          availableData={this.state.availableData}
          id="example"
          onChange={this.onChange}
          selectedData={this.state.selectedData}
          translations={{
            allLabel: 'All',
            availableListLabel: 'Available data',
            selectedListLabel: 'Selected data',
            searchTooltip: 'Test',
          }}
        />
      </div>
    );
  }
}
