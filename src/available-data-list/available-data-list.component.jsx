import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';

import Utils from './../data.utils';
import DataItem from './../available-data-item/available-data-item.component';

export default class AvailableDataList extends React.Component {
  static propTypes = {
    items: ImmutablePropTypes.list.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    onUnselectItem: PropTypes.func.isRequired,
    searchKeyword: PropTypes.string,
  };

  static defaultProps = {
    searchKeyword: '',
  }

  constructor(props) {
    super(props);
    this.items = props.items;
    this.state = {
      focusedElement: undefined,
      scrollUp: false,
      visibleItems: props.items,
    };
  }

  componentDidMount() {
    this.items = this.setItemsLabelText(this.items);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.items.equals(this.props.items)) {
      this.setState({
        visibleItems: nextProps.items,
      });
    }
  }

  componentDidUpdate(prevProps) {
    let shouldUpdate = false;
    if (!prevProps.items.equals(this.props.items)) {
      this.items = this.setItemsLabelText(this.props.items);
      shouldUpdate = true;
    }
    if (prevProps.searchKeyword !== this.props.searchKeyword) {
      shouldUpdate = true;
    }
    if (shouldUpdate) {
      this.filterItems(this.items, this.props.searchKeyword);
    }
  }

  setItemsLabelText = (data) => {
    const updatedData = data.map((item) => {
      const itemRef = this[item.uuid];
      const labelText = itemRef ? itemRef.span.innerText : item.label;
      return { ...item, labelText };
    });
    return updatedData;
  }

  getRefName = (moveDown, index) => {
    if (moveDown) {
      const newIndex = index > this.state.visibleItems.size - 1 ? 0 : index;
      const item = this.state.visibleItems.get(newIndex);
      if (item.isLocked) {
        return this.getRefName(moveDown, newIndex + 1);
      }
      return item.uuid;
    }
    const newIndex = index === 0 ? this.state.visibleItems.size - 1 : index - 2;
    const item = this.state.visibleItems.get(newIndex);
    if (item.isLocked) {
      return this.getRefName(moveDown, newIndex);
    }
    return item.uuid;
  }

  filterItems = (items, searchKeyword) => {
    this.setState({
      visibleItems: Utils.filterData(items, searchKeyword),
    });
  }

  handleItemClick = item => (e) => {
    if (typeof e === 'boolean') {
      const index = this.state.visibleItems.indexOf(item) + 1;
      const element = this[this.getRefName(e, index)].checkbox;
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
          {this.state.visibleItems.map(item => (
            <DataItem
              key={item.value}
              isSelected={item.isSelected}
              isLocked={item.isLocked}
              label={item.label}
              handleItemClick={this.handleItemClick(item)}
              ref={(c) => { this[item.uuid] = c; }}
            />
          ))}
        </ScrollBar>
      </div>
    );
  }
}
