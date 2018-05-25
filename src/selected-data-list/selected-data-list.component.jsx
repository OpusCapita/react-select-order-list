/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Icon } from '@opuscapita/react-icons';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';
import {
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value, handleItemRemove, handleMouseDown }) => (
  <div
    key={value.value}
    className={`oc-select-order-list-selected-data-item${value.isLocked ? ' locked' : ''}`}
    onMouseDown={handleMouseDown}
  >
    <span className="oc-select-order-list-selected-data-item-text">
      {value.label}
    </span>
    {!value.isLocked &&
      <Icon
        type="indicator"
        name="draggingArrows"
        className="oc-select-order-list-dragging-icon"
        width={20}
        height={20}
      />
    }
    {value.isLocked &&
      <Icon
        type="indicator"
        name="locked"
        className="oc-select-order-list-locked-icon"
        width={30}
        height={30}
      />
    }
    {!value.isLocked &&
      <Icon
        type="indicator"
        name="remove"
        className="oc-select-order-list-remove-icon"
        width={20}
        height={20}
        onClick={handleItemRemove}
      />
    }
  </div>
));

const SortableList = SortableContainer(({ items, handleItemRemove, handleMouseDown }) => (
  <div className="oc-select-order-list-selected-data-list">
    <ScrollBar>
      {items.map((value, index) => (
        <SortableItem
          key={value.value}
          index={index}
          value={value}
          disabled={value.isLocked}
          handleItemRemove={handleItemRemove(value)}
          handleMouseDown={handleMouseDown}
        />
      ))}
    </ScrollBar>
  </div>
));

export default class SelectedDataList extends React.PureComponent {
  static propTypes = {
    items: ImmutablePropTypes.list.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onSortChange: PropTypes.func.isRequired,
  };

  handleItemRemove = item => () => {
    this.props.onRemoveItem(item);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
  }

  shouldCancelStart = (e) => {
    if (e.target.id === 'oc-icon-remove' || (e.target.className.baseVal && e.target.className.baseVal.indexOf('oc-icon-remove') !== -1)) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <SortableList
        handleItemRemove={this.handleItemRemove}
        handleMouseDown={this.handleMouseDown}
        items={this.props.items}
        onSortEnd={this.props.onSortChange}
        shouldCancelStart={this.shouldCancelStart}
      />
    );
  }
}
