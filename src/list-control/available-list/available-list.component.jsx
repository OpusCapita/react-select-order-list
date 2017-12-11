import React from 'react';
import PropTypes from 'prop-types';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';
import DataItem from './available-item.component';

export default class AvailableColumnsList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    onSelectItem: PropTypes.func.isRequired,
    onDeselectItem: PropTypes.func.isRequired,
  };

  handleItemClick = item => () => {
    if (item.isSelected) {
      this.props.onDeselectItem(item);
    } else {
      this.props.onSelectItem(item);
    }
  }

  render() {
    return (
      <div className="oc-available-data-list">
        <ScrollBar>
          {this.props.items.map(item => (
            <DataItem
              key={item.key}
              isSelected={item.isSelected}
              label={item.label}
              handleItemClick={this.handleItemClick(item)}
            />
          ))}
        </ScrollBar>
      </div>
    );
  }
}
