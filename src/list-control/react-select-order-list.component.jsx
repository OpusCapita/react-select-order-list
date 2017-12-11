/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
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
    availableData: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    avaibleListLabel: PropTypes.string,
    selectedListLabel: PropTypes.string,
    dataChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    avaibleListLabel: '',
    selectedListLabel: '',
  }

  constructor(props) {
    super(props);
    const availableData =
      Utils.getAvailableData(props.availableData, props.availableData);
    const selectedData =
      Utils.getSelectedData(availableData);
    this.state = {
      keyword: '',
      visibleAvailableData: availableData,
      selectedData,
      availableData,
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
    const selectedData =
      Utils.changeDataSort(
        this.state.selectedData,
        oldIndex,
        newIndex,
      );
    this.setState({ selectedData });
    this.props.dataChange(selectedData);
  }

  handleSelectItem = (item) => {
    const availableData = this.state.availableData;
    const visibleAvailableData = this.state.visibleAvailableData;
    const selectedData = [];
    this.state.selectedData.forEach((d) => {
      selectedData.push(d);
    });
    selectedData.push(item);
    selectedData[selectedData.length - 1].priority = selectedData.length - 1;
    availableData.forEach((data, i) => {
      if (data.key === item.key) {
        availableData[i].isSelected = true;
      }
    });
    visibleAvailableData.forEach((data, i) => {
      if (data.key === item.key) {
        visibleAvailableData[i].isSelected = true;
      }
    });
    this.setState({ visibleAvailableData, availableData, selectedData });
    this.props.dataChange(selectedData);
  }

  handleDeselectItem = (item) => {
    const availableData = this.state.availableData;
    const visibleAvailableData = this.state.visibleAvailableData;
    const selectedData = [];
    this.state.selectedData.forEach((d) => {
      if (d.priority < item.priority) {
        selectedData.push(d);
      } else if (d.priority > item.priority) {
        const currentItem = Object.assign({}, d);
        currentItem.priority -= 1;
        selectedData.push(currentItem);
      }
    });
    availableData.forEach((d, i) => {
      if (d.key === item.key) {
        availableData[i].isSelected = false;
        availableData[i].priority = -1;
      }
      if (d.priority > item.priority) {
        availableData[i].priority -= 1;
      }
    });
    visibleAvailableData.forEach((d, i) => {
      if (d.key === item.key) {
        visibleAvailableData[i].isSelected = false;
      }
    });
    this.setState({ visibleAvailableData, availableData, selectedData });
    this.props.dataChange(selectedData);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel>{this.props.avaibleListLabel}</ControlLabel>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel>{this.props.selectedListLabel}</ControlLabel>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup className="oc-data-keyword-group">
              <FormControl
                id={'oc-keyword'}
                type="text"
                name="keyword"
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
              <AvailableDataList
                id={'oc-available-data'}
                items={this.state.visibleAvailableData}
                onSelectItem={this.handleSelectItem}
                onDeselectItem={this.handleDeselectItem}
              />
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <SelectedDataList
                id={'oc-selected-data'}
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
