/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Checkbox,
  Col,
  ControlLabel,
  FormGroup,
  Grid,
  Row,
} from 'react-bootstrap';
import { SearchBar } from '@opuscapita/react-searchbar';
import 'font-awesome/scss/font-awesome.scss';

import AvailableDataList from './available-data-list/available-data-list.component';
import SelectedDataList from './selected-data-list/selected-data-list.component';
import Utils from './data.utils';
import './react-select-order-list.component.scss';

export default class SelectOrderList extends React.PureComponent {
  static propTypes = {
    availableData: ImmutablePropTypes.list.isRequired,
    onChange: PropTypes.func.isRequired,
    allLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    availableListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    id: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    selectedData: ImmutablePropTypes.list,
    selectedListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  };

  static defaultProps = {
    allLabel: '',
    availableListLabel: '',
    id: '',
    searchPlaceholder: 'Search...',
    selectedData: List(),
    selectedListLabel: '',
  }

  constructor(props) {
    super(props);
    const availableDataList = Utils.getAvailableDataList(props.availableData, props.selectedData);
    const selectedDataList = Utils.getSelectedDataList(props.selectedData);
    this.state = {
      availableDataList,
      selectedDataList,
      keyword: '',
      selectedAll: availableDataList.size === selectedDataList.size,
      visibleAvailableDataList: availableDataList,
    };
  }

  handleSelectedAllChange = () => {
    const selectedAll = !this.state.selectedAll;
    let { availableDataList, keyword, visibleAvailableDataList } = this.state;
    let selectedDataList = List();
    availableDataList = availableDataList.map((item) => {
      const newItem = item;
      if (!item.isLocked) {
        newItem.isSelected = selectedAll;
      }
      if (selectedAll || item.isLocked) {
        selectedDataList = selectedDataList.push(newItem);
      }
      return newItem;
    });
    if (selectedAll) {
      keyword = '';
      visibleAvailableDataList = availableDataList;
    } else {
      visibleAvailableDataList = visibleAvailableDataList.map((item) => {
        const newItem = item;
        if (!item.isLocked) {
          newItem.isSelected = selectedAll;
        }
        return newItem;
      });
    }
    this.setState({
      availableDataList,
      keyword,
      selectedAll,
      selectedDataList,
      visibleAvailableDataList,
    });
    this.props.onChange(selectedDataList);
  }

  handleKeywordChange = (e) => {
    const keyword = e;
    const visibleAvailableDataList = Utils.filterData(this.state.availableDataList, keyword);
    this.setState({ keyword, visibleAvailableDataList });
  }

  handleSortChange = ({ oldIndex, newIndex }) => {
    const selectedDataList =
      List(Utils.changeDataSort(this.state.selectedDataList.toJS(), oldIndex, newIndex));
    this.setState({ selectedDataList });
    this.props.onChange(selectedDataList);
  }

  handleSelectItem = (selectedItem) => {
    // add selected item to the end of the list
    const selectedDataList = this.state.selectedDataList.push(selectedItem);
    let { availableDataList, visibleAvailableDataList } = this.state;
    availableDataList = availableDataList.map((item) => {
      const newItem = item;
      if (item.value === selectedItem.value) {
        newItem.isSelected = true;
      }
      return newItem;
    });
    visibleAvailableDataList = visibleAvailableDataList.map((item) => {
      const newItem = item;
      if (item.value === selectedItem.value) {
        newItem.isSelected = true;
      }
      return newItem;
    });
    this.setState({ availableDataList, visibleAvailableDataList, selectedDataList });
    this.props.onChange(selectedDataList);
  }

  handleUnselectItem = (unselectedItem) => {
    const selectedDataList =
      this.state.selectedDataList.filter(i => i.value !== unselectedItem.value);
    let { availableDataList, visibleAvailableDataList } = this.state;
    availableDataList = availableDataList.map((item) => {
      const newItem = item;
      if (item.value === unselectedItem.value) {
        newItem.isSelected = false;
      }
      return newItem;
    });
    visibleAvailableDataList = visibleAvailableDataList.map((item) => {
      const newItem = item;
      if (item.value === unselectedItem.value) {
        newItem.isSelected = false;
      }
      return newItem;
    });
    this.setState({
      availableDataList,
      visibleAvailableDataList,
      selectedDataList,
      selectedAll: false,
    });
    this.props.onChange(selectedDataList);
  }

  render() {
    const id = this.props.id ? `oc-select-order-list-${this.props.id}` : 'oc-select-order-list';
    return (
      <Grid id={id} fluid>
        <Row>
          <Col xs={6}>
            <FormGroup className="oc-select-order-list-keyword-group">
              <SearchBar
                dynamicSearchStartsFrom={1}
                inputClassName="oc-select-order-list-keyword-input"
                onSearch={this.handleKeywordChange}
                searchPlaceHolder={this.props.searchPlaceholder}
                value={this.state.keyword}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <FormGroup className="oc-select-order-list-label">
              <ControlLabel>{this.props.availableListLabel}</ControlLabel>
            </FormGroup>
          </Col>
          <Col xs={2}>
            <FormGroup>
              <Checkbox
                className="oc-select-order-list-select-all-checkbox"
                checked={this.state.selectedAll}
                onChange={this.handleSelectedAllChange}
              >
                {this.props.allLabel}
              </Checkbox>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup className="oc-select-order-list-label">
              <ControlLabel>{this.props.selectedListLabel}</ControlLabel>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <AvailableDataList
                items={this.state.visibleAvailableDataList}
                onSelectItem={this.handleSelectItem}
                onUnselectItem={this.handleUnselectItem}
              />
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <SelectedDataList
                items={this.state.selectedDataList}
                onSortChange={this.handleSortChange}
                onRemoveItem={this.handleUnselectItem}
              />
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
