var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Checkbox, Col, ControlLabel, FormGroup, Grid, Row } from 'react-bootstrap';
import { SearchBar } from '@opuscapita/react-searchbar';

import AvailableDataList from './available-data-list/available-data-list.component';
import SelectedDataList from './selected-data-list/selected-data-list.component';
import Utils from './data.utils';
import './select-order-list.component.scss';

var SelectOrderList = (_temp = _class = function (_React$PureComponent) {
  _inherits(SelectOrderList, _React$PureComponent);

  function SelectOrderList(props) {
    _classCallCheck(this, SelectOrderList);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleAllSelectedChange = function () {
      var allSelected = !_this.props.allSelected;
      var selectedData = allSelected ? _this.state.availableDataList : _this.state.selectedDataList.filter(function (data) {
        return data.isLocked === true;
      });
      _this.props.onChange({ allSelected: allSelected, selectedData: selectedData });
    };

    _this.handleKeywordChange = function (e) {
      var keyword = e;
      var visibleAvailableDataList = Utils.filterData(_this.state.availableDataList, keyword);
      _this.setState({ keyword: keyword, visibleAvailableDataList: visibleAvailableDataList });
    };

    _this.handleSortChange = function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;

      if (newIndex === null || newIndex === oldIndex) {
        return;
      }
      var selectedData = Utils.changeDataSort(_this.state.selectedDataList, oldIndex, newIndex);
      _this.props.onChange({ selectedData: selectedData, allSelected: _this.props.allSelected });
    };

    _this.handleSelectItem = function (item) {
      // add selected item to the end of the list
      _this.props.onChange({
        allSelected: _this.state.selectedDataList.size + 1 === _this.props.availableData.size,
        selectedData: _this.state.selectedDataList.push(item)
      });
    };

    _this.handleUnselectItem = function (item) {
      _this.props.onChange({
        allSelected: false,
        selectedData: _this.state.selectedDataList.filter(function (i) {
          return i.value !== item.value;
        })
      });
    };

    var availableDataList = Utils.getAvailableDataList(props.availableData, props.selectedData);
    _this.state = {
      availableDataList: availableDataList,
      selectedDataList: Utils.getSelectedDataList(props.selectedData),
      keyword: '',
      visibleAvailableDataList: availableDataList
    };
    return _this;
  }

  SelectOrderList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) || !nextProps.selectedData.equals(this.props.selectedData)) {
      var selectedDataList = Utils.getSelectedDataList(nextProps.selectedData);
      var availableDataList = Utils.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList: availableDataList,
        selectedDataList: selectedDataList,
        visibleAvailableDataList: Utils.filterData(availableDataList, this.state.keyword)
      });
    }
  };

  SelectOrderList.prototype.render = function render() {
    var id = this.props.id ? 'oc-select-order-list-' + this.props.id : 'oc-select-order-list';
    return React.createElement(
      Grid,
      { id: id, fluid: true },
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { xs: 6 },
          React.createElement(
            FormGroup,
            { className: 'oc-select-order-list-keyword-group' },
            React.createElement(SearchBar, {
              dynamicSearchStartsFrom: 1,
              inputClassName: 'oc-select-order-list-keyword-input',
              onSearch: this.handleKeywordChange,
              searchPlaceHolder: this.props.searchPlaceholder,
              tooltip: this.props.searchTooltip,
              value: this.state.keyword
            })
          )
        )
      ),
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { xs: 4 },
          React.createElement(
            FormGroup,
            { className: 'oc-select-order-list-label' },
            React.createElement(
              ControlLabel,
              null,
              this.props.availableListLabel
            )
          )
        ),
        React.createElement(
          Col,
          { xs: 2 },
          React.createElement(
            FormGroup,
            null,
            React.createElement(
              Checkbox,
              {
                className: 'oc-select-order-list-select-all-checkbox',
                checked: this.props.allSelected,
                onChange: this.handleAllSelectedChange
              },
              this.props.allLabel
            )
          )
        ),
        React.createElement(
          Col,
          { xs: 6 },
          React.createElement(
            FormGroup,
            { className: 'oc-select-order-list-label' },
            React.createElement(
              ControlLabel,
              null,
              this.props.selectedListLabel
            )
          )
        )
      ),
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { xs: 6 },
          React.createElement(
            FormGroup,
            null,
            React.createElement(AvailableDataList, {
              items: this.state.visibleAvailableDataList,
              onSelectItem: this.handleSelectItem,
              onUnselectItem: this.handleUnselectItem
            })
          )
        ),
        React.createElement(
          Col,
          { xs: 6 },
          React.createElement(
            FormGroup,
            null,
            React.createElement(SelectedDataList, {
              items: this.state.selectedDataList,
              onSortChange: this.handleSortChange,
              onRemoveItem: this.handleUnselectItem
            })
          )
        )
      )
    );
  };

  return SelectOrderList;
}(React.PureComponent), _class.defaultProps = {
  allLabel: '',
  allSelected: false,
  availableListLabel: '',
  id: '',
  searchPlaceholder: 'Search...',
  searchTooltip: null,
  selectedData: List(),
  selectedListLabel: ''
}, _temp);
export { SelectOrderList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNoZWNrYm94IiwiQ29sIiwiQ29udHJvbExhYmVsIiwiRm9ybUdyb3VwIiwiR3JpZCIsIlJvdyIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInZpc2libGVBdmFpbGFibGVEYXRhTGlzdCIsImZpbHRlckRhdGEiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJyZW5kZXIiLCJpZCIsInNlYXJjaFBsYWNlaG9sZGVyIiwic2VhcmNoVG9vbHRpcCIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFdBQXJCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FDRUMsUUFERixFQUVFQyxHQUZGLEVBR0VDLFlBSEYsRUFJRUMsU0FKRixFQUtFQyxJQUxGLEVBTUVDLEdBTkYsUUFPTyxpQkFQUDtBQVFBLFNBQVNDLFNBQVQsUUFBMEIsNkJBQTFCOztBQUVBLE9BQU9DLGlCQUFQLE1BQThCLHFEQUE5QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG1EQUE3QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsY0FBbEI7QUFDQSxPQUFPLG9DQUFQOztJQUVxQkMsZTs7O0FBeUJuQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQXlCbkJDLHVCQXpCbUIsR0F5Qk8sWUFBTTtBQUM5QixVQUFNQyxjQUFjLENBQUMsTUFBS0YsS0FBTCxDQUFXRSxXQUFoQztBQUNBLFVBQU1DLGVBQWVELGNBQWMsTUFBS0UsS0FBTCxDQUFXQyxpQkFBekIsR0FDbkIsTUFBS0QsS0FBTCxDQUFXRSxnQkFBWCxDQUE0QkMsTUFBNUIsQ0FBbUM7QUFBQSxlQUFRQyxLQUFLQyxRQUFMLEtBQWtCLElBQTFCO0FBQUEsT0FBbkMsQ0FERjtBQUVBLFlBQUtULEtBQUwsQ0FBV1UsUUFBWCxDQUFvQixFQUFFUix3QkFBRixFQUFlQywwQkFBZixFQUFwQjtBQUNELEtBOUJrQjs7QUFBQSxVQWdDbkJRLG1CQWhDbUIsR0FnQ0csVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFVBQU1DLFVBQVVELENBQWhCO0FBQ0EsVUFBTUUsMkJBQTJCaEIsTUFBTWlCLFVBQU4sQ0FBaUIsTUFBS1gsS0FBTCxDQUFXQyxpQkFBNUIsRUFBK0NRLE9BQS9DLENBQWpDO0FBQ0EsWUFBS0csUUFBTCxDQUFjLEVBQUVILGdCQUFGLEVBQVdDLGtEQUFYLEVBQWQ7QUFDRCxLQXBDa0I7O0FBQUEsVUFzQ25CRyxnQkF0Q21CLEdBc0NBLGdCQUE0QjtBQUFBLFVBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxVQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzdDLFVBQUlBLGFBQWEsSUFBYixJQUFxQkEsYUFBYUQsUUFBdEMsRUFBZ0Q7QUFDOUM7QUFDRDtBQUNELFVBQU1mLGVBQWVMLE1BQU1zQixjQUFOLENBQXFCLE1BQUtoQixLQUFMLENBQVdFLGdCQUFoQyxFQUFrRFksUUFBbEQsRUFBNERDLFFBQTVELENBQXJCO0FBQ0EsWUFBS25CLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQixFQUFFUCwwQkFBRixFQUFnQkQsYUFBYSxNQUFLRixLQUFMLENBQVdFLFdBQXhDLEVBQXBCO0FBQ0QsS0E1Q2tCOztBQUFBLFVBOENuQm1CLGdCQTlDbUIsR0E4Q0EsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCO0FBQ0EsWUFBS3RCLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjtBQUNsQlIscUJBQWEsTUFBS0UsS0FBTCxDQUFXRSxnQkFBWCxDQUE0QmlCLElBQTVCLEdBQW1DLENBQW5DLEtBQXlDLE1BQUt2QixLQUFMLENBQVd3QixhQUFYLENBQXlCRCxJQUQ3RDtBQUVsQnBCLHNCQUFjLE1BQUtDLEtBQUwsQ0FBV0UsZ0JBQVgsQ0FBNEJtQixJQUE1QixDQUFpQ0gsSUFBakM7QUFGSSxPQUFwQjtBQUlELEtBcERrQjs7QUFBQSxVQXNEbkJJLGtCQXREbUIsR0FzREUsVUFBQ0osSUFBRCxFQUFVO0FBQzdCLFlBQUt0QixLQUFMLENBQVdVLFFBQVgsQ0FBb0I7QUFDbEJSLHFCQUFhLEtBREs7QUFFbEJDLHNCQUFjLE1BQUtDLEtBQUwsQ0FBV0UsZ0JBQVgsQ0FBNEJDLE1BQTVCLENBQW1DO0FBQUEsaUJBQUtvQixFQUFFQyxLQUFGLEtBQVlOLEtBQUtNLEtBQXRCO0FBQUEsU0FBbkM7QUFGSSxPQUFwQjtBQUlELEtBM0RrQjs7QUFFakIsUUFBTXZCLG9CQUFvQlAsTUFBTStCLG9CQUFOLENBQTJCN0IsTUFBTXdCLGFBQWpDLEVBQWdEeEIsTUFBTUcsWUFBdEQsQ0FBMUI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsMENBRFc7QUFFWEMsd0JBQWtCUixNQUFNZ0MsbUJBQU4sQ0FBMEI5QixNQUFNRyxZQUFoQyxDQUZQO0FBR1hVLGVBQVMsRUFIRTtBQUlYQyxnQ0FBMEJUO0FBSmYsS0FBYjtBQUhpQjtBQVNsQjs7NEJBRUQwQix5QixzQ0FBMEJDLFMsRUFBVztBQUNuQyxRQUFJLENBQUNBLFVBQVVSLGFBQVYsQ0FBd0JTLE1BQXhCLENBQStCLEtBQUtqQyxLQUFMLENBQVd3QixhQUExQyxDQUFELElBQ0osQ0FBQ1EsVUFBVTdCLFlBQVYsQ0FBdUI4QixNQUF2QixDQUE4QixLQUFLakMsS0FBTCxDQUFXRyxZQUF6QyxDQURELEVBQ3lEO0FBQ3ZELFVBQU1HLG1CQUFtQlIsTUFBTWdDLG1CQUFOLENBQTBCRSxVQUFVN0IsWUFBcEMsQ0FBekI7QUFDQSxVQUFNRSxvQkFDSlAsTUFBTStCLG9CQUFOLENBQTJCRyxVQUFVUixhQUFyQyxFQUFvRFEsVUFBVTdCLFlBQTlELENBREY7QUFFQSxXQUFLYSxRQUFMLENBQWM7QUFDWlgsNENBRFk7QUFFWkMsMENBRlk7QUFHWlEsa0NBQTBCaEIsTUFBTWlCLFVBQU4sQ0FBaUJWLGlCQUFqQixFQUFvQyxLQUFLRCxLQUFMLENBQVdTLE9BQS9DO0FBSGQsT0FBZDtBQUtEO0FBQ0YsRzs7NEJBc0NEcUIsTSxxQkFBUztBQUNQLFFBQU1DLEtBQUssS0FBS25DLEtBQUwsQ0FBV21DLEVBQVgsNkJBQXdDLEtBQUtuQyxLQUFMLENBQVdtQyxFQUFuRCxHQUEwRCxzQkFBckU7QUFDQSxXQUNFO0FBQUMsVUFBRDtBQUFBLFFBQU0sSUFBSUEsRUFBVixFQUFjLFdBQWQ7QUFDRTtBQUFDLFdBQUQ7QUFBQTtBQUNFO0FBQUMsYUFBRDtBQUFBLFlBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQyxxQkFBRDtBQUFBLGNBQVcsV0FBVSxvQ0FBckI7QUFDRSxnQ0FBQyxTQUFEO0FBQ0UsdUNBQXlCLENBRDNCO0FBRUUsOEJBQWUsb0NBRmpCO0FBR0Usd0JBQVUsS0FBS3hCLG1CQUhqQjtBQUlFLGlDQUFtQixLQUFLWCxLQUFMLENBQVdvQyxpQkFKaEM7QUFLRSx1QkFBUyxLQUFLcEMsS0FBTCxDQUFXcUMsYUFMdEI7QUFNRSxxQkFBTyxLQUFLakMsS0FBTCxDQUFXUztBQU5wQjtBQURGO0FBREY7QUFERixPQURGO0FBZUU7QUFBQyxXQUFEO0FBQUE7QUFDRTtBQUFDLGFBQUQ7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUMscUJBQUQ7QUFBQSxjQUFXLFdBQVUsNEJBQXJCO0FBQ0U7QUFBQywwQkFBRDtBQUFBO0FBQ0csbUJBQUtiLEtBQUwsQ0FBV3NDO0FBRGQ7QUFERjtBQURGLFNBREY7QUFRRTtBQUFDLGFBQUQ7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFLDJCQUFVLDBDQURaO0FBRUUseUJBQVMsS0FBS3RDLEtBQUwsQ0FBV0UsV0FGdEI7QUFHRSwwQkFBVSxLQUFLRDtBQUhqQjtBQUtHLG1CQUFLRCxLQUFMLENBQVd1QztBQUxkO0FBREY7QUFERixTQVJGO0FBbUJFO0FBQUMsYUFBRDtBQUFBLFlBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQyxxQkFBRDtBQUFBLGNBQVcsV0FBVSw0QkFBckI7QUFDRTtBQUFDLDBCQUFEO0FBQUE7QUFDRyxtQkFBS3ZDLEtBQUwsQ0FBV3dDO0FBRGQ7QUFERjtBQURGO0FBbkJGLE9BZkY7QUEwQ0U7QUFBQyxXQUFEO0FBQUE7QUFDRTtBQUFDLGFBQUQ7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGdDQUFDLGlCQUFEO0FBQ0UscUJBQU8sS0FBS3BDLEtBQUwsQ0FBV1Usd0JBRHBCO0FBRUUsNEJBQWMsS0FBS08sZ0JBRnJCO0FBR0UsOEJBQWdCLEtBQUtLO0FBSHZCO0FBREY7QUFERixTQURGO0FBVUU7QUFBQyxhQUFEO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxnQ0FBQyxnQkFBRDtBQUNFLHFCQUFPLEtBQUt0QixLQUFMLENBQVdFLGdCQURwQjtBQUVFLDRCQUFjLEtBQUtXLGdCQUZyQjtBQUdFLDRCQUFjLEtBQUtTO0FBSHJCO0FBREY7QUFERjtBQVZGO0FBMUNGLEtBREY7QUFpRUQsRzs7O0VBekowQ3pDLE1BQU13RCxhLFVBYzFDQyxZLEdBQWU7QUFDcEJILFlBQVUsRUFEVTtBQUVwQnJDLGVBQWEsS0FGTztBQUdwQm9DLHNCQUFvQixFQUhBO0FBSXBCSCxNQUFJLEVBSmdCO0FBS3BCQyxxQkFBbUIsV0FMQztBQU1wQkMsaUJBQWUsSUFOSztBQU9wQmxDLGdCQUFjaEIsTUFQTTtBQVFwQnFELHFCQUFtQjtBQVJDLEM7U0FkSHpDLGUiLCJmaWxlIjoic2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIENoZWNrYm94LFxyXG4gIENvbCxcclxuICBDb250cm9sTGFiZWwsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEdyaWQsXHJcbiAgUm93LFxyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXNlYXJjaGJhcic7XHJcblxyXG5pbXBvcnQgQXZhaWxhYmxlRGF0YUxpc3QgZnJvbSAnLi9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IFNlbGVjdGVkRGF0YUxpc3QgZnJvbSAnLi9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuL2RhdGEudXRpbHMnO1xyXG5pbXBvcnQgJy4vc2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGF2YWlsYWJsZURhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgYWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYXZhaWxhYmxlTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlYXJjaFRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxyXG4gICAgc2VsZWN0ZWRMaXN0TGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGFsbExhYmVsOiAnJyxcclxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcclxuICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogJycsXHJcbiAgICBpZDogJycsXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXHJcbiAgICBzZWFyY2hUb29sdGlwOiBudWxsLFxyXG4gICAgc2VsZWN0ZWREYXRhOiBMaXN0KCksXHJcbiAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXHJcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcclxuICAgICAga2V5d29yZDogJycsXHJcbiAgICAgIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdDogYXZhaWxhYmxlRGF0YUxpc3QsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcclxuICAgICFuZXh0UHJvcHMuc2VsZWN0ZWREYXRhLmVxdWFscyh0aGlzLnByb3BzLnNlbGVjdGVkRGF0YSkpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhTGlzdCA9IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QobmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XHJcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cclxuICAgICAgICBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChuZXh0UHJvcHMuYXZhaWxhYmxlRGF0YSwgbmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxyXG4gICAgICAgIHNlbGVjdGVkRGF0YUxpc3QsXHJcbiAgICAgICAgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0OiBVdGlscy5maWx0ZXJEYXRhKGF2YWlsYWJsZURhdGFMaXN0LCB0aGlzLnN0YXRlLmtleXdvcmQpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IGFsbFNlbGVjdGVkID8gdGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdCA6XHJcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoZGF0YSA9PiBkYXRhLmlzTG9ja2VkID09PSB0cnVlKTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBrZXl3b3JkID0gZTtcclxuICAgIGNvbnN0IHZpc2libGVBdmFpbGFibGVEYXRhTGlzdCA9IFV0aWxzLmZpbHRlckRhdGEodGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdCwga2V5d29yZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5d29yZCwgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0IH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU29ydENoYW5nZSA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XHJcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBzZWxlY3RlZERhdGEsIGFsbFNlbGVjdGVkOiB0aGlzLnByb3BzLmFsbFNlbGVjdGVkIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAvLyBhZGQgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgYWxsU2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5zaXplICsgMSA9PT0gdGhpcy5wcm9wcy5hdmFpbGFibGVEYXRhLnNpemUsXHJcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnB1c2goaXRlbSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkID8gYG9jLXNlbGVjdC1vcmRlci1saXN0LSR7dGhpcy5wcm9wcy5pZH1gIDogJ29jLXNlbGVjdC1vcmRlci1saXN0JztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHcmlkIGlkPXtpZH0gZmx1aWQ+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVLZXl3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0aGlzLnByb3BzLnNlYXJjaFRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmF2YWlsYWJsZUxpc3RMYWJlbH1cclxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmFsbFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWxsTGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNlbGVjdGVkTGlzdExhYmVsfVxyXG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8QXZhaWxhYmxlRGF0YUxpc3RcclxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnZpc2libGVBdmFpbGFibGVEYXRhTGlzdH1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25VbnNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8U2VsZWN0ZWREYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdH1cclxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmVJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=