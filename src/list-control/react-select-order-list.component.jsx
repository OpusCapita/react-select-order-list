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
    selectedData: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    availableListLabel: PropTypes.string,
    selectedListLabel: PropTypes.string,
    dataChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    availableListLabel: '',
    selectedListLabel: '',
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
      selectedData[i].priority = i;
    });
    this.props.dataChange(this.props.availableData, selectedData);
  }

  handleSelectItem = (selectedItem) => {
    const item = Object.assign({}, selectedItem);
    item.isSelected = true;
    const availableData = this.props.availableData.slice();
    const visibleAvailableData = this.state.visibleAvailableData.slice();
    const selectedData = this.props.selectedData.slice();
    item.priority = selectedData.length;
    selectedData.push(item);
    let i = availableData.findIndex((data => data.key === item.key));
    availableData[i].isSelected = true;
    
    i = visibleAvailableData.findIndex((data => data.key === item.key));
    if (i > -1) {
      visibleAvailableData[i].isSelected = true;
    }
    this.setState({ visibleAvailableData });
    this.props.dataChange(availableData, selectedData);
  }

  handleDeselectItem = (selectedItem) => {
    const item = Object.assign({}, selectedItem);
    const availableData = this.props.availableData;
    const visibleAvailableData = this.state.visibleAvailableData;
    
    const selectedData = this.props.selectedData.slice();
    let i = selectedData.findIndex((data => data.key === item.key));
    selectedData.filter(d => d.priority > i).forEach(e => e.priority -= 1);// eslint-disable-line no-return-assign
    selectedData.splice(i, 1);

    i = availableData.findIndex((data => data.key === item.key));
    availableData[i].isSelected = false;

    i = visibleAvailableData.findIndex((data => data.key === item.key));
    if (i > -1) {
      visibleAvailableData[i].isSelected = false;
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
              <ControlLabel>{this.props.availableListLabel}</ControlLabel>
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
            <FormGroup>
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
