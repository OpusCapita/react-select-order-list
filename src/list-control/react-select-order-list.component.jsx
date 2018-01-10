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
    })).isRequired,
    onDataSelectionChange: PropTypes.func.isRequired,
    onAllSelectionChange: PropTypes.func.isRequired,
    selectedData: ImmutablePropTypes.listOf(PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
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
    searchPlaceholder: '',
    allSelected: false,
    allLabel: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      ...this.initData(this.props, ''),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.initData(nextProps, this.state.keyword),
    });
  }

  onAllSelectionChange = () => {
    this.props.onAllSelectionChange(!this.props.allSelected);
  }

  initData = (props, keyword) => {
    const sortedData = props.availableData.sort((a, b) => (
      a.label.toLowerCase().localeCompare(b.label.toLowerCase())
    ));

    const availableData = sortedData.map((item, index) => ({
      ...item,
      key: index,
      priority: index,
      isSelected: props.allSelected || props.selectedData.filter(data =>
        (data.label === item.label)).size !== 0,
    }));

    const selectedData = props.selectedData.map((item, index) => ({
      ...item,
      key: index,
      priority: index,
      isSelected: true,
    }));

    if (props.allSelected) {
      const priorityOffset = props.selectedData.size;
      availableData.forEach((item, index) => {
        if (props.selectedData.filter(data => (data.label === item.label)).size === 0) {
          selectedData.push({
            ...item,
            key: index + priorityOffset,
            priority: index + priorityOffset,
            isSelected: true,
          });
        }
      });
    }

    return {
      visibleAvailableData: List(Utils.filterData(availableData, keyword)),
      availableData: List(availableData),
      selectedData: List(selectedData),
    };
  }

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
    let selectedData =
      Utils.changeDataSort(
        this.state.selectedData,
        oldIndex,
        newIndex,
      );

    selectedData = selectedData.toJS().map(data => ({
      label: data.label,
      value: data.value,
    }));
    this.props.onDataSelectionChange(List(selectedData));
  }

  handleSelectItem = (selectedItem) => {
    const item = {
      ...selectedItem,
      isSelected: true,
    };
    const selectedData = [...this.state.selectedData.toJS(), item].map(data => ({
      label: data.label,
      value: data.value,
    }));
    this.props.onDataSelectionChange(List(selectedData));
    if (selectedData.length === this.props.availableData.size) {
      this.props.onAllSelectionChange(true);
    }
  }

  handleDeselectItem = (selectedItem) => {
    const selectedData =
      this.state.selectedData.toJS().filter(data => (data.label !== selectedItem.label));
    this.props.onDataSelectionChange(List(selectedData.map(data => ({
      label: data.label,
      value: data.value,
    }))));
    if (this.props.allSelected) {
      this.props.onAllSelectionChange(false);
    }
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
                items={List(this.state.visibleAvailableData)}
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
                items={List(this.state.selectedData)}
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
