import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';

import DataItem from './../available-data-item/available-data-item.component';

export default class AvailableDataList extends React.Component {
  static propTypes = {
    items: ImmutablePropTypes.list.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    onUnselectItem: PropTypes.func.isRequired,
  };

  handleItemClick = item => () => {
    if (item.isSelected) {
      this.props.onUnselectItem(item);
    } else {
      this.props.onSelectItem(item);
    }
  }

  render() {
    return (
      <div className="oc-select-order-list-available-data-list">
        <ScrollBar>
          {this.props.items.map(item => (
            <DataItem
              key={item.value}
              isSelected={item.isSelected}
              isLocked={item.isLocked}
              label={item.label}
              handleItemClick={this.handleItemClick(item)}
            />
          ))}
        </ScrollBar>
      </div>
    );
  }
}
