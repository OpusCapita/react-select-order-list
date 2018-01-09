/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl } from 'react-bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import AvailableDataList from './available-list/available-list.component';
import SelectedDataList from './selected-list/selected-list.component';
import Utils from './data.utils';
import './react-select-order-list.component.scss';

export default class SelectOrderList extends React.PureComponent {
  static propTypes = {
    availableData: ImmutablePropTypes.list.isRequired,
    selectedData: ImmutablePropTypes.list.isRequired,
    availableListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    selectedListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    dataChange: PropTypes.func.isRequired,
    searchPlaceholder: PropTypes.string,
  };

  static defaultProps = {
    availableListLabel: '',
    selectedListLabel: '',
    searchPlaceholder: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      visibleAvailableData: this.props.availableData,
    };
  }

  handleKeywordChange = (e) => {
    const keyword = e.target.value;
    const visibleAvailableData =
      Utils.filterData(
        this.props.availableData,
        keyword,
      );
    this.setState({ keyword, visibleAvailableData });
  }

  handleSortChange = ({ oldIndex, newIndex }) => {
    const selectedData =
      Utils.changeDataSort(
        this.props.selectedData,
        oldIndex,
        newIndex,
      );

    selectedData.forEach((data, i) => {
      selectedData.get(i).priority = i;
    });
    this.props.dataChange(this.props.availableData, selectedData);
  }

  handleSelectItem = (selectedItem) => {
    const item = Object.assign({}, selectedItem);
    item.isSelected = true;
    const availableData = this.props.availableData.slice();
    const visibleAvailableData = this.state.visibleAvailableData.slice();
    let selectedData = this.props.selectedData.slice();
    item.priority = selectedData.size;
    selectedData = selectedData.push(item);
    let i = availableData.findIndex((data => data.key === item.key));
    availableData.get(i).isSelected = true;

    i = visibleAvailableData.findIndex((data => data.key === item.key));
    if (i > -1) {
      visibleAvailableData.get(i).isSelected = true;
    }
    this.setState({ visibleAvailableData });
    this.props.dataChange(availableData, selectedData);
  }

  handleDeselectItem = (selectedItem) => {
    const item = Object.assign({}, selectedItem);
    const { availableData } = this.props;
    const { visibleAvailableData } = this.state;

    let selectedData = this.props.selectedData.slice();
    let i = selectedData.findIndex((data => data.key === item.key));
    selectedData.filter(d => d.priority > i).forEach(e => e.priority -= 1);// eslint-disable-line no-return-assign,max-len
    selectedData = selectedData.splice(i, 1);

    i = availableData.findIndex((data => data.key === item.key));
    availableData.get(i).isSelected = false;

    i = visibleAvailableData.findIndex((data => data.key === item.key));
    if (i > -1) {
      visibleAvailableData.get(i).isSelected = false;
    }

    this.setState({ visibleAvailableData });
    this.props.dataChange(availableData, selectedData);
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
              <ControlLabel>{this.props.availableListLabel}</ControlLabel>
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
                items={this.props.selectedData}
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
