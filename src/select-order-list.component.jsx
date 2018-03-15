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

import AvailableDataList from './available-data-list/available-data-list.component';
import SelectedDataList from './selected-data-list/selected-data-list.component';
import Utils from './data.utils';
import './select-order-list.component.scss';

export default class SelectOrderList extends React.PureComponent {
  static propTypes = {
    availableData: ImmutablePropTypes.list.isRequired,
    onChange: PropTypes.func.isRequired,
    allLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    allSelected: PropTypes.bool,
    availableListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    id: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    searchTooltip: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    selectedData: ImmutablePropTypes.list,
    selectedListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  };

  static defaultProps = {
    allLabel: '',
    allSelected: false,
    availableListLabel: '',
    id: '',
    searchPlaceholder: 'Search...',
    searchTooltip: null,
    selectedData: List(),
    selectedListLabel: '',
  }

  constructor(props) {
    super(props);
    const availableDataList = Utils.getAvailableDataList(props.availableData, props.selectedData);
    this.state = {
      availableDataList,
      selectedDataList: Utils.getSelectedDataList(props.selectedData),
      keyword: '',
      visibleAvailableDataList: availableDataList,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) ||
    !nextProps.selectedData.equals(this.props.selectedData)) {
      const selectedDataList = Utils.getSelectedDataList(nextProps.selectedData);
      const availableDataList =
        Utils.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList,
        selectedDataList,
        visibleAvailableDataList: Utils.filterData(availableDataList, this.state.keyword),
      });
    }
  }

  handleAllSelectedChange = () => {
    const allSelected = !this.props.allSelected;
    const selectedData = allSelected ? this.state.availableDataList :
      this.state.selectedDataList.filter(data => data.isLocked === true);
    this.props.onChange({ allSelected, selectedData });
  }

  handleKeywordChange = (e) => {
    const keyword = e;
    const visibleAvailableDataList = Utils.filterData(this.state.availableDataList, keyword);
    this.setState({ keyword, visibleAvailableDataList });
  }

  handleSortChange = ({ oldIndex, newIndex }) => {
    if (newIndex === null || newIndex === oldIndex) {
      return;
    }
    const selectedData = Utils.changeDataSort(this.state.selectedDataList, oldIndex, newIndex);
    this.props.onChange({ selectedData, allSelected: this.props.allSelected });
  }

  handleSelectItem = (item) => {
    // add selected item to the end of the list
    this.props.onChange({
      allSelected: this.state.selectedDataList.size + 1 === this.props.availableData.size,
      selectedData: this.state.selectedDataList.push(item),
    });
  }

  handleUnselectItem = (item) => {
    this.props.onChange({
      allSelected: false,
      selectedData: this.state.selectedDataList.filter(i => i.value !== item.value),
    });
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
                tooltip={this.props.searchTooltip}
                value={this.state.keyword}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <FormGroup className="oc-select-order-list-label">
              <ControlLabel>
                {this.props.availableListLabel}
              </ControlLabel>
            </FormGroup>
          </Col>
          <Col xs={2}>
            <FormGroup>
              <Checkbox
                className="oc-select-order-list-select-all-checkbox"
                checked={this.props.allSelected}
                onChange={this.handleAllSelectedChange}
              >
                {this.props.allLabel}
              </Checkbox>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup className="oc-select-order-list-label">
              <ControlLabel>
                {this.props.selectedListLabel}
              </ControlLabel>
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
