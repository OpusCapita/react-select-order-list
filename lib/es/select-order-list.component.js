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
              tooltip: this.props.translations.searchTooltip,
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
              this.props.translations.availableListLabel
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
              this.props.translations.allLabel
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
              this.props.translations.selectedListLabel
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
  allSelected: false,
  id: '',
  searchPlaceholder: 'Search...',
  selectedData: List(),
  translations: {
    allLabel: '',
    availableListLabel: '',
    searchTooltip: null,
    selectedListLabel: ''
  }
}, _temp);
export { SelectOrderList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNoZWNrYm94IiwiQ29sIiwiQ29udHJvbExhYmVsIiwiRm9ybUdyb3VwIiwiR3JpZCIsIlJvdyIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInZpc2libGVBdmFpbGFibGVEYXRhTGlzdCIsImZpbHRlckRhdGEiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJyZW5kZXIiLCJpZCIsInNlYXJjaFBsYWNlaG9sZGVyIiwidHJhbnNsYXRpb25zIiwic2VhcmNoVG9vbHRpcCIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFdBQXJCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FDRUMsUUFERixFQUVFQyxHQUZGLEVBR0VDLFlBSEYsRUFJRUMsU0FKRixFQUtFQyxJQUxGLEVBTUVDLEdBTkYsUUFPTyxpQkFQUDtBQVFBLFNBQVNDLFNBQVQsUUFBMEIsNkJBQTFCOztBQUVBLE9BQU9DLGlCQUFQLE1BQThCLHFEQUE5QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG1EQUE3QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsY0FBbEI7QUFDQSxPQUFPLG9DQUFQOztJQUVxQkMsZTs7O0FBNkJuQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQXlCbkJDLHVCQXpCbUIsR0F5Qk8sWUFBTTtBQUM5QixVQUFNQyxjQUFjLENBQUMsTUFBS0YsS0FBTCxDQUFXRSxXQUFoQztBQUNBLFVBQU1DLGVBQWVELGNBQWMsTUFBS0UsS0FBTCxDQUFXQyxpQkFBekIsR0FDbkIsTUFBS0QsS0FBTCxDQUFXRSxnQkFBWCxDQUE0QkMsTUFBNUIsQ0FBbUM7QUFBQSxlQUFRQyxLQUFLQyxRQUFMLEtBQWtCLElBQTFCO0FBQUEsT0FBbkMsQ0FERjtBQUVBLFlBQUtULEtBQUwsQ0FBV1UsUUFBWCxDQUFvQixFQUFFUix3QkFBRixFQUFlQywwQkFBZixFQUFwQjtBQUNELEtBOUJrQjs7QUFBQSxVQWdDbkJRLG1CQWhDbUIsR0FnQ0csVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFVBQU1DLFVBQVVELENBQWhCO0FBQ0EsVUFBTUUsMkJBQTJCaEIsTUFBTWlCLFVBQU4sQ0FBaUIsTUFBS1gsS0FBTCxDQUFXQyxpQkFBNUIsRUFBK0NRLE9BQS9DLENBQWpDO0FBQ0EsWUFBS0csUUFBTCxDQUFjLEVBQUVILGdCQUFGLEVBQVdDLGtEQUFYLEVBQWQ7QUFDRCxLQXBDa0I7O0FBQUEsVUFzQ25CRyxnQkF0Q21CLEdBc0NBLGdCQUE0QjtBQUFBLFVBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxVQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzdDLFVBQUlBLGFBQWEsSUFBYixJQUFxQkEsYUFBYUQsUUFBdEMsRUFBZ0Q7QUFDOUM7QUFDRDtBQUNELFVBQU1mLGVBQWVMLE1BQU1zQixjQUFOLENBQXFCLE1BQUtoQixLQUFMLENBQVdFLGdCQUFoQyxFQUFrRFksUUFBbEQsRUFBNERDLFFBQTVELENBQXJCO0FBQ0EsWUFBS25CLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQixFQUFFUCwwQkFBRixFQUFnQkQsYUFBYSxNQUFLRixLQUFMLENBQVdFLFdBQXhDLEVBQXBCO0FBQ0QsS0E1Q2tCOztBQUFBLFVBOENuQm1CLGdCQTlDbUIsR0E4Q0EsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCO0FBQ0EsWUFBS3RCLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjtBQUNsQlIscUJBQWEsTUFBS0UsS0FBTCxDQUFXRSxnQkFBWCxDQUE0QmlCLElBQTVCLEdBQW1DLENBQW5DLEtBQXlDLE1BQUt2QixLQUFMLENBQVd3QixhQUFYLENBQXlCRCxJQUQ3RDtBQUVsQnBCLHNCQUFjLE1BQUtDLEtBQUwsQ0FBV0UsZ0JBQVgsQ0FBNEJtQixJQUE1QixDQUFpQ0gsSUFBakM7QUFGSSxPQUFwQjtBQUlELEtBcERrQjs7QUFBQSxVQXNEbkJJLGtCQXREbUIsR0FzREUsVUFBQ0osSUFBRCxFQUFVO0FBQzdCLFlBQUt0QixLQUFMLENBQVdVLFFBQVgsQ0FBb0I7QUFDbEJSLHFCQUFhLEtBREs7QUFFbEJDLHNCQUFjLE1BQUtDLEtBQUwsQ0FBV0UsZ0JBQVgsQ0FBNEJDLE1BQTVCLENBQW1DO0FBQUEsaUJBQUtvQixFQUFFQyxLQUFGLEtBQVlOLEtBQUtNLEtBQXRCO0FBQUEsU0FBbkM7QUFGSSxPQUFwQjtBQUlELEtBM0RrQjs7QUFFakIsUUFBTXZCLG9CQUFvQlAsTUFBTStCLG9CQUFOLENBQTJCN0IsTUFBTXdCLGFBQWpDLEVBQWdEeEIsTUFBTUcsWUFBdEQsQ0FBMUI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsMENBRFc7QUFFWEMsd0JBQWtCUixNQUFNZ0MsbUJBQU4sQ0FBMEI5QixNQUFNRyxZQUFoQyxDQUZQO0FBR1hVLGVBQVMsRUFIRTtBQUlYQyxnQ0FBMEJUO0FBSmYsS0FBYjtBQUhpQjtBQVNsQjs7NEJBRUQwQix5QixzQ0FBMEJDLFMsRUFBVztBQUNuQyxRQUFJLENBQUNBLFVBQVVSLGFBQVYsQ0FBd0JTLE1BQXhCLENBQStCLEtBQUtqQyxLQUFMLENBQVd3QixhQUExQyxDQUFELElBQ0osQ0FBQ1EsVUFBVTdCLFlBQVYsQ0FBdUI4QixNQUF2QixDQUE4QixLQUFLakMsS0FBTCxDQUFXRyxZQUF6QyxDQURELEVBQ3lEO0FBQ3ZELFVBQU1HLG1CQUFtQlIsTUFBTWdDLG1CQUFOLENBQTBCRSxVQUFVN0IsWUFBcEMsQ0FBekI7QUFDQSxVQUFNRSxvQkFDSlAsTUFBTStCLG9CQUFOLENBQTJCRyxVQUFVUixhQUFyQyxFQUFvRFEsVUFBVTdCLFlBQTlELENBREY7QUFFQSxXQUFLYSxRQUFMLENBQWM7QUFDWlgsNENBRFk7QUFFWkMsMENBRlk7QUFHWlEsa0NBQTBCaEIsTUFBTWlCLFVBQU4sQ0FBaUJWLGlCQUFqQixFQUFvQyxLQUFLRCxLQUFMLENBQVdTLE9BQS9DO0FBSGQsT0FBZDtBQUtEO0FBQ0YsRzs7NEJBc0NEcUIsTSxxQkFBUztBQUNQLFFBQU1DLEtBQUssS0FBS25DLEtBQUwsQ0FBV21DLEVBQVgsNkJBQXdDLEtBQUtuQyxLQUFMLENBQVdtQyxFQUFuRCxHQUEwRCxzQkFBckU7QUFDQSxXQUNFO0FBQUMsVUFBRDtBQUFBLFFBQU0sSUFBSUEsRUFBVixFQUFjLFdBQWQ7QUFDRTtBQUFDLFdBQUQ7QUFBQTtBQUNFO0FBQUMsYUFBRDtBQUFBLFlBQUssSUFBSSxDQUFUO0FBQ0U7QUFBQyxxQkFBRDtBQUFBLGNBQVcsV0FBVSxvQ0FBckI7QUFDRSxnQ0FBQyxTQUFEO0FBQ0UsdUNBQXlCLENBRDNCO0FBRUUsOEJBQWUsb0NBRmpCO0FBR0Usd0JBQVUsS0FBS3hCLG1CQUhqQjtBQUlFLGlDQUFtQixLQUFLWCxLQUFMLENBQVdvQyxpQkFKaEM7QUFLRSx1QkFBUyxLQUFLcEMsS0FBTCxDQUFXcUMsWUFBWCxDQUF3QkMsYUFMbkM7QUFNRSxxQkFBTyxLQUFLbEMsS0FBTCxDQUFXUztBQU5wQjtBQURGO0FBREY7QUFERixPQURGO0FBZUU7QUFBQyxXQUFEO0FBQUE7QUFDRTtBQUFDLGFBQUQ7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUMscUJBQUQ7QUFBQSxjQUFXLFdBQVUsNEJBQXJCO0FBQ0U7QUFBQywwQkFBRDtBQUFBO0FBQ0csbUJBQUtiLEtBQUwsQ0FBV3FDLFlBQVgsQ0FBd0JFO0FBRDNCO0FBREY7QUFERixTQURGO0FBUUU7QUFBQyxhQUFEO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRTtBQUFDLHNCQUFEO0FBQUE7QUFDRSwyQkFBVSwwQ0FEWjtBQUVFLHlCQUFTLEtBQUt2QyxLQUFMLENBQVdFLFdBRnRCO0FBR0UsMEJBQVUsS0FBS0Q7QUFIakI7QUFLRyxtQkFBS0QsS0FBTCxDQUFXcUMsWUFBWCxDQUF3Qkc7QUFMM0I7QUFERjtBQURGLFNBUkY7QUFtQkU7QUFBQyxhQUFEO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFDLHFCQUFEO0FBQUEsY0FBVyxXQUFVLDRCQUFyQjtBQUNFO0FBQUMsMEJBQUQ7QUFBQTtBQUNHLG1CQUFLeEMsS0FBTCxDQUFXcUMsWUFBWCxDQUF3Qkk7QUFEM0I7QUFERjtBQURGO0FBbkJGLE9BZkY7QUEwQ0U7QUFBQyxXQUFEO0FBQUE7QUFDRTtBQUFDLGFBQUQ7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGdDQUFDLGlCQUFEO0FBQ0UscUJBQU8sS0FBS3JDLEtBQUwsQ0FBV1Usd0JBRHBCO0FBRUUsNEJBQWMsS0FBS08sZ0JBRnJCO0FBR0UsOEJBQWdCLEtBQUtLO0FBSHZCO0FBREY7QUFERixTQURGO0FBVUU7QUFBQyxhQUFEO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxnQ0FBQyxnQkFBRDtBQUNFLHFCQUFPLEtBQUt0QixLQUFMLENBQVdFLGdCQURwQjtBQUVFLDRCQUFjLEtBQUtXLGdCQUZyQjtBQUdFLDRCQUFjLEtBQUtTO0FBSHJCO0FBREY7QUFERjtBQVZGO0FBMUNGLEtBREY7QUFpRUQsRzs7O0VBN0owQ3pDLE1BQU15RCxhLFVBZ0IxQ0MsWSxHQUFlO0FBQ3BCekMsZUFBYSxLQURPO0FBRXBCaUMsTUFBSSxFQUZnQjtBQUdwQkMscUJBQW1CLFdBSEM7QUFJcEJqQyxnQkFBY2hCLE1BSk07QUFLcEJrRCxnQkFBYztBQUNaRyxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkQsbUJBQWUsSUFISDtBQUlaRyx1QkFBbUI7QUFKUDtBQUxNLEM7U0FoQkgxQyxlIiwiZmlsZSI6InNlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcclxuaW1wb3J0IHtcclxuICBDaGVja2JveCxcclxuICBDb2wsXHJcbiAgQ29udHJvbExhYmVsLFxyXG4gIEZvcm1Hcm91cCxcclxuICBHcmlkLFxyXG4gIFJvdyxcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xyXG5cclxuaW1wb3J0IEF2YWlsYWJsZURhdGFMaXN0IGZyb20gJy4vYXZhaWxhYmxlLWRhdGEtbGlzdC9hdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWxlY3RlZERhdGFMaXN0IGZyb20gJy4vc2VsZWN0ZWQtZGF0YS1saXN0L3NlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9kYXRhLnV0aWxzJztcclxuaW1wb3J0ICcuL3NlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9yZGVyTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBhdmFpbGFibGVEYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWREYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcclxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgYWxsTGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgICAgc2VhcmNoVG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgICAgc2VsZWN0ZWRMaXN0TGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgaWQ6ICcnLFxyXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxyXG4gICAgc2VsZWN0ZWREYXRhOiBMaXN0KCksXHJcbiAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgYWxsTGFiZWw6ICcnLFxyXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxyXG4gICAgICBzZWFyY2hUb29sdGlwOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QocHJvcHMuYXZhaWxhYmxlRGF0YSwgcHJvcHMuc2VsZWN0ZWREYXRhKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxyXG4gICAgICBzZWxlY3RlZERhdGFMaXN0OiBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KHByb3BzLnNlbGVjdGVkRGF0YSksXHJcbiAgICAgIGtleXdvcmQ6ICcnLFxyXG4gICAgICB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3Q6IGF2YWlsYWJsZURhdGFMaXN0LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAoIW5leHRQcm9wcy5hdmFpbGFibGVEYXRhLmVxdWFscyh0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEpIHx8XHJcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUxpc3QgPSBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xyXG4gICAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9XHJcbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBhdmFpbGFibGVEYXRhTGlzdCxcclxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxyXG4gICAgICAgIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdDogVXRpbHMuZmlsdGVyRGF0YShhdmFpbGFibGVEYXRhTGlzdCwgdGhpcy5zdGF0ZS5rZXl3b3JkKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gIXRoaXMucHJvcHMuYWxsU2VsZWN0ZWQ7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxyXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGRhdGEgPT4gZGF0YS5pc0xvY2tlZCA9PT0gdHJ1ZSk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgYWxsU2VsZWN0ZWQsIHNlbGVjdGVkRGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleXdvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qga2V5d29yZCA9IGU7XHJcbiAgICBjb25zdCB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5maWx0ZXJEYXRhKHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QsIGtleXdvcmQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQsIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNvcnRDaGFuZ2UgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xyXG4gICAgaWYgKG5ld0luZGV4ID09PSBudWxsIHx8IG5ld0luZGV4ID09PSBvbGRJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBVdGlscy5jaGFuZ2VEYXRhU29ydCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgLy8gYWRkIHNlbGVjdGVkIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxyXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5wdXNoKGl0ZW0pLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVbnNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGkgPT4gaS52YWx1ZSAhPT0gaXRlbS52YWx1ZSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCA/IGBvYy1zZWxlY3Qtb3JkZXItbGlzdC0ke3RoaXMucHJvcHMuaWR9YCA6ICdvYy1zZWxlY3Qtb3JkZXItbGlzdCc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBpZD17aWR9IGZsdWlkPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgICAgICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb209ezF9XHJcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlS2V5d29yZENoYW5nZX1cclxuICAgICAgICAgICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VhcmNoVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz17NH0+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmF2YWlsYWJsZUxpc3RMYWJlbH1cclxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmFsbFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmFsbExhYmVsfVxyXG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VsZWN0ZWRMaXN0TGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxBdmFpbGFibGVEYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUudmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVNlbGVjdEl0ZW19XHJcbiAgICAgICAgICAgICAgICBvblVuc2VsZWN0SXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RlZERhdGFMaXN0XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0fVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0Q2hhbmdlPXt0aGlzLmhhbmRsZVNvcnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==