Back to [Root](../../README.md)

# SelectOrderList

### Description

### Usage


### API

#### SelectOrderList

| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| availableData            | List of `item`s   | required                                 | List of the selectedable items |
| onChange                 | function          | required                                 | Callback function, which is called when data selection or order is changed |
| dataSelectionId          | string            | required                                 | Property name of the callback function parameter, which  object of selected data |
| allSelectionId           | strings           | required                                 |  |
| selectedData             | List of `item`s   | empty List                               | List of selected and sorted items |
| availableListLabel       | string or element | ''                                       | Label for selectable item list |
| selectedListLabel        | string or element | ''                                       | Label for slected and sorted item list |
| allLabel                 | string or element | ''                                       | Label for All selection checkbox |
| searchPlaceholder        | string            | ''                                       | Placeholder for search |
| allSelected              | boolean           | false                                    |  |

#### SelectOrderList - `item`s

| Prop name                | Type               | Default                                  | Description                                                |
| ------------------------ | ------------------ | ---------------------------------------- | ---------------------------------------------------------- |
| label                    | string or element  | required                                 | ID of the datagrid                                         |
| value                    | string/bool/number |                                          | Key path to unique ID value in the grid data, used in many |


### Code example

```jsx
import React from 'react';
import { List } from 'immutable';
import SelectOrderList from '../../../src/index';

export default class ListItemsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableData: List([
        {
          label: 'one',
          value: 'one',
        },
        {
          label: 'two',
          value: 'two',
        },
        {
          label: 'three',
          value: 'three',
        },
      ]),
      selectedData: List([
        {
          label: 'two',
          value: 'two',
        },
        {
          label: 'three',
          value: 'three',
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
```

