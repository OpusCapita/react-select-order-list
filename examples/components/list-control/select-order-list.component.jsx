import React from 'react';
import { SelectOrderList } from '../../../src/index';
import '../../../src/list-control/react-select-order-list.component.scss';
import './style.scss';

export default class ListItemsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: [],
      availableData: [
        {
          key: 1,
          label: 'one',
          isSelected: false,
          priority: -1,
        },
        {
          key: 2,
          label: 'two',
          isSelected: true,
          priority: 1,
        },
        {
          key: 3,
          label: 'three',
          isSelected: true,
          priority: 0,
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      selectedData: this.getSelectedData(),
    });
  }
  getSelectedData() {
    const sortedData = this.state.availableData.slice();
    sortedData.sort((a, b) => a.priority > b.priority);
    return sortedData.filter(d => d.isSelected === true);
  }

  dataChange = (availableData, selectedData) => {
    this.setState({ availableData, selectedData });
  }

  render() {
    return (
      <div className="oc-select-order-list">
        <SelectOrderList
          availableData={this.state.availableData}
          selectedData={this.state.selectedData}
          availableListLabel={'Available data'}
          selectedListLabel={'Selected data'}
          dataChange={this.dataChange}
        />
      </div>
    );
  }
}
