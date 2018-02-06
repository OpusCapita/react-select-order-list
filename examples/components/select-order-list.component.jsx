import React from 'react';
import { List } from 'immutable';

import SelectOrderList from '../../src/index';
import '../../src/react-select-order-list.component.scss';
import './style.scss';

export default class SelectOrderListView extends React.Component {
  constructor(props) {
    super(props);
    const data = this.initializeData();
    this.state = {
      availableData: data,
      selectedData: data,
    };
  }

  onChange = (data) => {
    this.setState({ selectedData: data });
  }

  initializeData = () => {
    let data = List([
      {
        isLocked: true,
        label: 'Item 1',
        value: 1,
      },
    ]);
    for (let i = 2; i <= 30; i += 1) {
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
          allLabel="All"
          availableData={this.state.availableData}
          availableListLabel="Available data"
          onChange={this.onChange}
          selectedData={this.state.selectedData}
          selectedListLabel="Selected data"
        />
      </div>
    );
  }
}
