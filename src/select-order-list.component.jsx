/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Col,
  ControlLabel,
  FormGroup,
  Grid,
  Row,
} from 'react-bootstrap';
import Checkbox from '@opuscapita/react-checkbox';
import SearchBar from '@opuscapita/react-searchbar';

import AvailableDataList from './available-data-list/available-data-list.component';
import SelectedDataList from './selected-data-list/selected-data-list.component';
import Utils from './data.utils';
import './select-order-list.component.scss';

export default class SelectOrderList extends React.PureComponent {
  static propTypes = {
    availableData: ImmutablePropTypes.list,
    onChange: PropTypes.func.isRequired,
    allSelected: PropTypes.bool,
    singleColumn: PropTypes.bool,
    id: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    selectedData: ImmutablePropTypes.list,
    translations: PropTypes.shape({
      allLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      availableListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      searchTooltip: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      selectedListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    }),
  };

  static defaultProps = {
    availableData: List(),
    allSelected: false,
    id: '',
    searchPlaceholder: 'Search...',
    selectedData: List(),
    singleColumn: false,
    translations: {
      allLabel: '',
      availableListLabel: '',
      searchTooltip: null,
      selectedListLabel: '',
    },
  }

  constructor(props) {
    super(props);
    const availableDataList = Utils.getAvailableDataList(props.availableData, props.selectedData);
    this.state = {
      availableDataList,
      selectedDataList: Utils.getSelectedDataList(props.selectedData),
      keyword: '',
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
    this.setState({ keyword });
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

  renderSearchBar = () => {
    const { singleColumn } = this.props;
    const columnCount = singleColumn ? 12 : 6;
    return (
      <Col xs={columnCount}>
        <FormGroup className="oc-select-order-list-keyword-group">
          { singleColumn ||
            <SearchBar
              dynamicSearchStartsFrom={1}
              inputClassName="oc-select-order-list-keyword-input"
              onSearch={this.handleKeywordChange}
              searchPlaceHolder={this.props.searchPlaceholder}
              tooltip={this.props.translations.searchTooltip}
              value={this.state.keyword}
            />
          }
        </FormGroup>
      </Col>
    );
  }

  renderAavailableDataHeader = () => {
    if (this.props.singleColumn) return null;

    return (
      <div>
        <Col xs={4}>
          <FormGroup className="oc-select-order-list-label">
            <ControlLabel>
              {this.props.translations.availableListLabel}
            </ControlLabel>
          </FormGroup>
        </Col>
        <Col xs={2}>
          <FormGroup>
            <Checkbox
              className="oc-select-order-list-select-all-checkbox"
              checked={this.props.allSelected}
              onChange={this.handleAllSelectedChange}
              label={this.props.translations.allLabel}
            />
          </FormGroup>
        </Col>
      </div>
    );
  }

  renderSelectedDataHeader = () => (
    <Col xs={this.props.singleColumn ? 12 : 6}>
      <FormGroup className="oc-select-order-list-label">
        <ControlLabel>
          {this.props.translations.selectedListLabel}
        </ControlLabel>
      </FormGroup>
    </Col>
  )

  renderAavailableDataContent = () => {
    if (this.props.singleColumn) return null;

    return (
      <Col xs={6}>
        <FormGroup>
          <AvailableDataList
            items={this.state.availableDataList}
            onSelectItem={this.handleSelectItem}
            onUnselectItem={this.handleUnselectItem}
            searchKeyword={this.state.keyword}
          />
        </FormGroup>
      </Col>
    );
  }

  renderSelectedContent = () => (
    <Col xs={this.props.singleColumn ? 12 : 6}>
      <FormGroup>
        <SelectedDataList
          items={this.state.selectedDataList}
          onSortChange={this.handleSortChange}
          onRemoveItem={this.handleUnselectItem}
          showRemoveIcon={!this.props.singleColumn}
        />
      </FormGroup>
    </Col>
  )

  render() {
    const id = this.props.id ? `oc-select-order-list-${this.props.id}` : 'oc-select-order-list';
    return (
      <Grid id={id} fluid>
        <Row>
          {this.renderSearchBar()}
        </Row>
        <Row>
          {this.renderAavailableDataHeader()}
          {this.renderSelectedDataHeader()}
        </Row>
        <Row>
          {this.renderAavailableDataContent()}
          {this.renderSelectedContent()}
        </Row>
      </Grid>
    );
  }
}
