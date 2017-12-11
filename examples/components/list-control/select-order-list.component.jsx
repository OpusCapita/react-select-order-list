import React from 'react';
import { SelectOrderList } from '../../../src/index';
import '../../../src/list-control/react-select-order-list.component.scss';
import './style.scss';

export default class ListItemsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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


  dataChange = (selectedData) => {
    this.setState({ selectedData });
  }

  render() {
    return (
      <div id="oc-select-order-list">
        <SelectOrderList
          availableData={this.state.availableData}
          avaibleListLabel={'Avaible data'}
          selectedListLabel={'Selected data'}
          dataChange={this.dataChange}
        />
      </div>
    );
  }
}
