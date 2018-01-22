/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Checkbox,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  Row } from 'react-bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import AvailableDataList from './available-list/available-list.component';
import SelectedDataList from './selected-list/selected-list.component';
import Utils from './data.utils';
import './react-select-order-list.component.scss';

export default class SelectOrderList extends React.PureComponent {
  static propTypes = {
    availableData: ImmutablePropTypes.listOf(PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
      isLocked: PropTypes.bool,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    dataSelectionId: PropTypes.string.isRequired,
    allSelectionId: PropTypes.string.isRequired,
    selectedData: ImmutablePropTypes.listOf(PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
      isLocked: PropTypes.bool,
    })),
    availableListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    selectedListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    allLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    searchPlaceholder: PropTypes.string,
    allSelected: PropTypes.bool,
  };

  static defaultProps = {
    selectedData: List(),
    availableListLabel: '',
    selectedListLabel: '',
    searchPlaceholder: 'Search...',
    allSelected: false,
    allLabel: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      ...this.initData(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const availableData = !this.props.availableData.equals(nextProps.availableData) ?
      this.initAvailableData(nextProps) :
      this.state.availableData.map(item => ({
        ...item,
        isSelected: nextProps.allSelected || nextProps.selectedData.filter(data =>
          (data.label === item.label)).size !== 0,
      }));
    const selectedData = nextProps.selectedData.map((item, index) => ({
      ...item,
      key: index,
      priority: index,
      isSelected: true,
    }));

    this.setState({
      visibleAvailableData: Utils.filterData(availableData, this.state.keyword),
      availableData,
      selectedData,
    });
  }

  onAllSelectionChange = () => {
    let selectedData;
    if (this.props.allSelected) {
      selectedData = List();
    } else if (this.props.selectedData.size === 0) {
      selectedData = this.sortDataAlphabetically(this.props.availableData);
    } else {
      const unselectedData = this.props.availableData.filter(item =>
        (this.props.selectedData.findIndex(data => (data.label === item.label)) === -1));
      selectedData = this.props.selectedData.concat(unselectedData);
    }
    this.props.onChange({
      [this.props.allSelectionId]: !this.props.allSelected,
      [this.props.dataSelectionId]: selectedData,
    });
  }

  initData = () => {
    const availableData = this.initAvailableData();
    let selectedData;
    if (this.props.allSelected) {
      selectedData = availableData;
    } else {
      selectedData = this.props.selectedData.map((item, index) => ({
        ...item,
        key: index,
        priority: index,
        isSelected: true,
      }));
    }

    return {
      visibleAvailableData: availableData,
      availableData,
      selectedData,
    };
  }

  initAvailableData = (props = this.props) => {
    const sortedData = this.sortDataAlphabetically(props.availableData);

    return sortedData.map((item, index) => ({
      ...item,
      key: index,
      priority: index,
      isSelected: props.allSelected || props.selectedData.filter(data =>
        (data.label === item.label)).size !== 0,
    }));
  }

  sortDataAlphabetically = data => (
    data.sort((a, b) => (
      a.label.toLowerCase().localeCompare(b.label.toLowerCase())
    ))
  )

  handleKeywordChange = (e) => {
    const keyword = e.target.value;
    const visibleAvailableData =
      Utils.filterData(
        this.state.availableData,
        keyword,
      );
    this.setState({ keyword, visibleAvailableData });
  }

  handleSortChange = ({ oldIndex, newIndex }) => {
    if (newIndex === null || newIndex === oldIndex) {
      return;
    }

    let selectedData =
      Utils.changeDataSort(
        this.state.selectedData,
        oldIndex,
        newIndex,
      );
    selectedData = selectedData.map(data => ({
      label: data.label,
      value: data.value,
      isLocked: data.isLocked,
    }));

    this.props.onChange({
      [this.props.allSelectionId]: selectedData.length === this.props.availableData.size,
      [this.props.dataSelectionId]: selectedData,
    });
  }

  handleSelectItem = (selectedItem) => {
    const item = {
      label: selectedItem.label,
      value: selectedItem.value,
      isLocked: false,
    };
    const selectedData = this.state.selectedData.push(item);
    this.props.onChange({
      [this.props.allSelectionId]: selectedData.length === this.props.availableData.size,
      [this.props.dataSelectionId]: selectedData,
    });
  }

  handleDeselectItem = (selectedItem) => {
    const selectedData =
      this.props.selectedData.filter(data => (data.label !== selectedItem.label));
    this.props.onChange({
      [this.props.allSelectionId]: false,
      [this.props.dataSelectionId]: selectedData,
    });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <FormControl
                id="oc-keyword"
                type="text"
                name="keyword"
                placeholder={this.props.searchPlaceholder}
                value={this.state.keyword}
                onChange={this.handleKeywordChange}
                className="oc-data-keyword-input"
              />
              <i className="oc-data-keyword-icon" name="search" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <Row>
                <Col xs={6}>
                  <ControlLabel>{this.props.availableListLabel}</ControlLabel>
                </Col>
                <Col xs={6}>
                  <Checkbox
                    onChange={this.onAllSelectionChange}
                    checked={this.props.allSelected}
                    className="oc-react-select-order-list-all"
                  >
                    {this.props.allLabel}
                  </Checkbox>
                </Col>
              </Row>
              <AvailableDataList
                id="oc-available-data"
                items={this.state.visibleAvailableData}
                onSelectItem={this.handleSelectItem}
                onDeselectItem={this.handleDeselectItem}
              />
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel>{this.props.selectedListLabel}</ControlLabel>
              <SelectedDataList
                id="oc-selected-data"
                items={this.state.selectedData}
                onSortChange={this.handleSortChange}
                onRemoveItem={this.handleDeselectItem}
              />
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
