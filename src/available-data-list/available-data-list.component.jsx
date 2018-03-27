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

  constructor(props) {
    super(props);
    this.state = {
      focusedElement: undefined,
      scrollUp: false,
    };
  }

  getRefName = (moveDown, index) => {
    if (moveDown) {
      const newIndex = index > this.props.items.size - 1 ? 0 : index;
      const item = this.props.items.get(newIndex);
      if (item.isLocked) {
        return this.getRefName(moveDown, newIndex + 1);
      }
      return item.label;
    }
    const newIndex = index === 0 ? this.props.items.size - 1 : index - 2;
    const item = this.props.items.get(newIndex);
    if (item.isLocked) {
      return this.getRefName(moveDown, newIndex);
    }
    return item.label;
  }

  handleItemClick = item => (e) => {
    if (typeof e === 'boolean') {
      const element = this[this.getRefName(e, item.sort)].input;
      this.setState({
        focusedElement: element,
        scrollUp: !e,
      });
      element.focus();
    } else if (item.isSelected) {
      this.props.onUnselectItem(item);
    } else {
      this.props.onSelectItem(item);
    }
  }

  handleScroll = () => {
    if (this.state.focusedElement) {
      this.state.focusedElement.scrollIntoView(this.state.scrollUp);
      this.setState({
        focusedElement: undefined,
      });
    }
  }

  render() {
    return (
      <div className="oc-select-order-list-available-data-list">
        <ScrollBar onScrollY={this.handleScroll} >
          {this.props.items.map(item => (
            <DataItem
              key={item.value}
              isSelected={item.isSelected}
              isLocked={item.isLocked}
              label={item.label}
              handleItemClick={this.handleItemClick(item)}
              ref={(c) => { this[item.label] = c; }}
            />
          ))}
        </ScrollBar>
      </div>
    );
  }
}
