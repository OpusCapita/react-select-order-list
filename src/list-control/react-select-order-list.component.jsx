/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
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
    availableData: ImmutablePropTypes.list.isRequired,
    selectedData: ImmutablePropTypes.list.isRequired,
    onDataSelectionChange: PropTypes.func.isRequired,
    onAllSelectionChange: PropTypes.func.isRequired,
    availableListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    selectedListLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    allLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    searchPlaceholder: PropTypes.string,
    allSelected: PropTypes.bool,
  };

  static defaultProps = {
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
      visibleAvailableData: this.props.availableData,
    };
  }

  onAllSelectionChange = () => {
    this.props.onAllSelectionChange(!this.props.allSelected);
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
    this.props.onDataSelectionChange(this.props.availableData, selectedData);
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
    this.props.onDataSelectionChange(availableData, selectedData);
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
    this.props.onDataSelectionChange(availableData, selectedData);
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
