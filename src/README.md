Back to [Root](../../README.md)

# SelectOrderList

### Description

### Usage


### API

#### SelectOrderList

| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| availableData            | List of `item`s   | required                                 | List of the selectable items |
| onChange                 | function          | required                                 | Callback function, which is called when data selection or order is changed. It returns an object of allSelected (boolean) sign and selectedData (List) |
| allLabel                 | string or element | ''                                       | Label for All checkbox |
| allSelected              | boolean           | false                                    | Sign of all available items selected |
| availableListLabel       | string or element | ''                                       | Label for available items list |
| id                       | string            | ''                                       | Id for a component div wrapper |
| searchPlaceholder        | string            | ''                                       | Placeholder for search |
| selectedData             | List of `item`s   | empty List                               | List of selected and sorted items |
| selectedListLabel        | string or element | ''                                       | Label for selected items list |

#### SelectOrderList - `item`s

| Prop name                | Type               | Default                                  | Description                                                |
| ------------------------ | ------------------ | ---------------------------------------- | ----------------------------------------- |
| label                    | string or element  | required                                 | Item label |
| value                    | string/bool/number | required                                 | Item value |
| isLocked                 | bool               | false                                    | Item locked sign |

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
          value: 1',
        },
        {
          label: 'two',
          value: 2,
        },
        {
          label: 'three',
          value: 3,
        },
      ]),
      selectedData: List([
        {
          label: 'two',
          value: 2,
        },
        {
          label: 'three',
          value: 3,
        },
      ]),
      allSelected: false,
    };
  }

  onChange =(data) => {
    this.setState({ ...data });
  }

  render() {
    return (
      <SelectOrderList
        allLabel="All"
        allSelected={this.state.allSelected}
        availableData={this.state.availableData}
        availableListLabel="Available data"
        id="example"
        onChange={this.onChange}
        selectedData={this.state.selectedData}
        selectedListLabel="Selected data"
      />
    );
  }
}
```

