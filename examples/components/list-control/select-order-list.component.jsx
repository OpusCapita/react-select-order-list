import React from 'react';
import { List } from 'immutable';
import SelectOrderList from '../../../src/index';
import '../../../src/list-control/react-select-order-list.component.scss';
import './style.scss';

export default class ListItemsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableData: List([
        {
          label: 'one',
          value: 'one',
          isLocked: false,
        },
        {
          label: 'two',
          value: 'two',
          isLocked: true,
        },
        {
          label: 'three',
          value: 'three',
          isLocked: false,
        },
      ]),
      selectedData: List([
        {
          label: 'one',
          value: 'one',
          isLocked: false,
          isSelected: true,
        },
        {
          label: 'two',
          value: 'two',
          isLocked: true,
          isSelected: true,
        },
        {
          label: 'three',
          value: 'three',
          isLocked: false,
          isSelected: true,
        },
      ]),
      allSelected: false,
    };
  }

  onAllSelectionChange = (allSelected) => {
    const selectedData = allSelected ? this.state.availableData : List();
    this.setState({ allSelected, selectedData });
  }

  onChange =(data) => {
    this.setState(data);
  }

  render() {
    return (
      <div className="oc-select-order-list">
        <SelectOrderList
          availableData={this.state.availableData}
          selectedData={this.state.selectedData}
          dataSelectionId="selectedData"
          allSelectionId="allSelected"
          availableListLabel="Available data"
          selectedListLabel="Selected data"
          allLabel="All"
          allSelected={this.state.allSelected}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
