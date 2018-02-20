# react-select-order-list

### Description
**SelectOrderList** component renders two lists. First contains data and we can check and uncheck them. After that selected row appears on second list where we can sort data by drag and drop function. We also have delete option avaiable from second list by remove icon.

### Installation
```
npm install @opuscapita/react-select-order-list
```
* Install and load font-awesome font to your project

### Demo
View the [DEMO](https://opuscapita.github.io/react-select-order-list)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
#### SelectOrderList

| Prop name                | Type                      | Default  | Description                           |
| ------------------------ | --------------------------| ---------| --------------------------------------|
| availableData            | Immutable List of `item`s | required | List of the selectable items          |
| onChange                 | function                  | required | Callback function, which is called when data selection or order is changed. It returns an object of allSelected (boolean) sign and selectedData (List) |
| allLabel                 | string or element         | ''       | Label for All checkbox                |
| allSelected              | boolean                   | false    | Sign of all available items selected  |
| availableListLabel       | string or element         | ''       | Label for available items list        |
| id                       | string                    | ''       | Id for a component div wrapper        |
| searchPlaceholder        | string                    | ''       | Placeholder for search                |
| selectedData             | Immutable List of `item`s | List     | List of selected and sorted items     |
| selectedListLabel        | string or element         | ''       | Label for selected items list         |

#### SelectOrderList - `item`s

| Prop name                | Type                      | Default  | Description                           |
| ------------------------ | ------------------------- | ---------| ------------------------------------- |
| label                    | string or element         | required | Item label                            |
| value                    | string/bool/number        | required | Item value                            |
| isLocked                 | bool                      | false    | Item locked sign                      |

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
