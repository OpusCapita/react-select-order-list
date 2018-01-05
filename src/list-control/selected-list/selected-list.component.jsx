import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Icon } from '@opuscapita/react-icons';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';
import {
  SortableContainer,
  SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value, handleItemRemove }) => (
  <div
    key={value.key}
    className={'oc-selected-data-item'}
  >
    <span className="oc-selected-data-item-text">
      {value.label}
    </span>
    {<Icon
      type="indicator"
      name="draggingArrows"
      className="oc-selected-data-dragging-icon"
      width={20}
      height={20}
    />}
    {<Icon
      type="indicator"
      name="remove"
      className="oc-selected-data-remove-icon"
      width={16}
      height={16}
      onClick={handleItemRemove}
    />}
  </div>
));

const SortableList = SortableContainer(({ items, handleItemRemove }) => (
  <div className="oc-selected-data-list">
    <ScrollBar>
      {items.map((value, index) => (
        <SortableItem
          key={value.key}
          index={index}
          value={value}
          handleItemRemove={handleItemRemove(value)}
        />
      ))}
    </ScrollBar>
  </div>
));

export default class SelectedDataList extends React.PureComponent {
  static propTypes = {
    items: ImmutablePropTypes.list.isRequired, // eslint-disable-line react/forbid-prop-types
    onSortChange: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
  };

  handleItemRemove = value => () => {
    this.props.onRemoveItem(value);
  }

  shouldCancelStart = e => e.target.className.baseVal && e.target.className.baseVal.indexOf('oc-icon-remove') !== -1

  render() {
    return (
      <SortableList
        items={this.props.items}
        onSortEnd={this.props.onSortChange}
        handleItemRemove={this.handleItemRemove}
        shouldCancelStart={this.shouldCancelStart}
      />
    );
  }
}
