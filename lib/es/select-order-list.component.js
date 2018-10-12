var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Col, ControlLabel, FormGroup, Grid, Row } from 'react-bootstrap';
import Checkbox from '@opuscapita/react-checkbox';
import SearchBar from '@opuscapita/react-searchbar';

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
      _this.setState({ keyword: keyword });
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

    _this.renderSearchBar = function () {
      var singleColumn = _this.props.singleColumn;

      var columnCount = singleColumn ? 12 : 6;
      return React.createElement(
        Col,
        { xs: columnCount },
        React.createElement(
          FormGroup,
          { className: 'oc-select-order-list-keyword-group' },
          singleColumn || React.createElement(SearchBar, {
            dynamicSearchStartsFrom: 1,
            inputClassName: 'oc-select-order-list-keyword-input',
            onSearch: _this.handleKeywordChange,
            searchPlaceHolder: _this.props.searchPlaceholder,
            tooltip: _this.props.translations.searchTooltip,
            value: _this.state.keyword
          })
        )
      );
    };

    _this.renderAavailableDataHeader = function () {
      if (_this.props.singleColumn) return null;

      return React.createElement(
        'div',
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
              _this.props.translations.availableListLabel
            )
          )
        ),
        React.createElement(
          Col,
          { xs: 2 },
          React.createElement(
            FormGroup,
            null,
            React.createElement(Checkbox, {
              className: 'oc-select-order-list-select-all-checkbox',
              checked: _this.props.allSelected,
              onChange: _this.handleAllSelectedChange,
              label: _this.props.translations.allLabel
            })
          )
        )
      );
    };

    _this.renderSelectedDataHeader = function () {
      return React.createElement(
        Col,
        { xs: _this.props.singleColumn ? 12 : 6 },
        React.createElement(
          FormGroup,
          { className: 'oc-select-order-list-label' },
          React.createElement(
            ControlLabel,
            null,
            _this.props.translations.selectedListLabel
          )
        )
      );
    };

    _this.renderAavailableDataContent = function () {
      if (_this.props.singleColumn) return null;

      return React.createElement(
        Col,
        { xs: 6 },
        React.createElement(
          FormGroup,
          null,
          React.createElement(AvailableDataList, {
            items: _this.state.availableDataList,
            onSelectItem: _this.handleSelectItem,
            onUnselectItem: _this.handleUnselectItem,
            searchKeyword: _this.state.keyword
          })
        )
      );
    };

    _this.renderSelectedContent = function () {
      return React.createElement(
        Col,
        { xs: _this.props.singleColumn ? 12 : 6 },
        React.createElement(
          FormGroup,
          null,
          React.createElement(SelectedDataList, {
            items: _this.state.selectedDataList,
            onSortChange: _this.handleSortChange,
            onRemoveItem: _this.handleUnselectItem,
            showRemoveIcon: !_this.props.singleColumn
          })
        )
      );
    };

    var availableDataList = Utils.getAvailableDataList(props.availableData, props.selectedData);
    _this.state = {
      availableDataList: availableDataList,
      selectedDataList: Utils.getSelectedDataList(props.selectedData),
      keyword: ''
    };
    return _this;
  }

  SelectOrderList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) || !nextProps.selectedData.equals(this.props.selectedData)) {
      var selectedDataList = Utils.getSelectedDataList(nextProps.selectedData);
      var availableDataList = Utils.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList: availableDataList,
        selectedDataList: selectedDataList
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
        this.renderSearchBar()
      ),
      React.createElement(
        Row,
        null,
        this.renderAavailableDataHeader(),
        this.renderSelectedDataHeader()
      ),
      React.createElement(
        Row,
        null,
        this.renderAavailableDataContent(),
        this.renderSelectedContent()
      )
    );
  };

  return SelectOrderList;
}(React.PureComponent), _class.defaultProps = {
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
    selectedListLabel: ''
  }
}, _temp);
export { SelectOrderList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNvbCIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Hcm91cCIsIkdyaWQiLCJSb3ciLCJDaGVja2JveCIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInNldFN0YXRlIiwiaGFuZGxlU29ydENoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJjaGFuZ2VEYXRhU29ydCIsImhhbmRsZVNlbGVjdEl0ZW0iLCJpdGVtIiwic2l6ZSIsImF2YWlsYWJsZURhdGEiLCJwdXNoIiwiaGFuZGxlVW5zZWxlY3RJdGVtIiwiaSIsInZhbHVlIiwicmVuZGVyU2VhcmNoQmFyIiwic2luZ2xlQ29sdW1uIiwiY29sdW1uQ291bnQiLCJzZWFyY2hQbGFjZWhvbGRlciIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFRvb2x0aXAiLCJyZW5kZXJBYXZhaWxhYmxlRGF0YUhlYWRlciIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwicmVuZGVyU2VsZWN0ZWREYXRhSGVhZGVyIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJyZW5kZXJBYXZhaWxhYmxlRGF0YUNvbnRlbnQiLCJyZW5kZXJTZWxlY3RlZENvbnRlbnQiLCJnZXRBdmFpbGFibGVEYXRhTGlzdCIsImdldFNlbGVjdGVkRGF0YUxpc3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZXF1YWxzIiwicmVuZGVyIiwiaWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFdBQXJCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FDRUMsR0FERixFQUVFQyxZQUZGLEVBR0VDLFNBSEYsRUFJRUMsSUFKRixFQUtFQyxHQUxGLFFBTU8saUJBTlA7QUFPQSxPQUFPQyxRQUFQLE1BQXFCLDRCQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsNkJBQXRCOztBQUVBLE9BQU9DLGlCQUFQLE1BQThCLHFEQUE5QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG1EQUE3QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsY0FBbEI7QUFDQSxPQUFPLG9DQUFQOztJQUVxQkMsZTs7O0FBZ0NuQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQXVCbkJDLHVCQXZCbUIsR0F1Qk8sWUFBTTtBQUM5QixVQUFNQyxjQUFjLENBQUMsTUFBS0YsS0FBTCxDQUFXRSxXQUFoQztBQUNBLFVBQU1DLGVBQWVELGNBQWMsTUFBS0UsS0FBTCxDQUFXQyxpQkFBekIsR0FDbkIsTUFBS0QsS0FBTCxDQUFXRSxnQkFBWCxDQUE0QkMsTUFBNUIsQ0FBbUM7QUFBQSxlQUFRQyxLQUFLQyxRQUFMLEtBQWtCLElBQTFCO0FBQUEsT0FBbkMsQ0FERjtBQUVBLFlBQUtULEtBQUwsQ0FBV1UsUUFBWCxDQUFvQixFQUFFUix3QkFBRixFQUFlQywwQkFBZixFQUFwQjtBQUNELEtBNUJrQjs7QUFBQSxVQThCbkJRLG1CQTlCbUIsR0E4QkcsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFVBQU1D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RixLQURGO0FBZUQsRzs7O0VBbE0wQ3RELE1BQU04RCxhLFVBaUIxQ0MsWSxHQUFlO0FBQ3BCMUIsaUJBQWVuQyxNQURLO0FBRXBCZSxlQUFhLEtBRk87QUFHcEI0QyxNQUFJLEVBSGdCO0FBSXBCaEIscUJBQW1CLFdBSkM7QUFLcEIzQixnQkFBY2hCLE1BTE07QUFNcEJ5QyxnQkFBYyxLQU5NO0FBT3BCRyxnQkFBYztBQUNaSSxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkYsbUJBQWUsSUFISDtBQUlaSyx1QkFBbUI7QUFKUDtBQVBNLEM7U0FqQkh0QyxlIiwiZmlsZSI6InNlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQge1xuICBDb2wsXG4gIENvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBHcmlkLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5pbXBvcnQgQXZhaWxhYmxlRGF0YUxpc3QgZnJvbSAnLi9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RlZERhdGFMaXN0IGZyb20gJy4vc2VsZWN0ZWQtZGF0YS1saXN0L3NlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vZGF0YS51dGlscyc7XG5pbXBvcnQgJy4vc2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdmFpbGFibGVEYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2luZ2xlQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgICAgc2VhcmNoVG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogTGlzdCgpLFxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBpZDogJycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxuICAgIHNpbmdsZUNvbHVtbjogZmFsc2UsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBhbGxMYWJlbDogJycsXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgICAgc2VhcmNoVG9vbHRpcDogbnVsbCxcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiAnJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQgfSk7XG4gIH1cblxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNpbmdsZUNvbHVtbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb2x1bW5Db3VudCA9IHNpbmdsZUNvbHVtbiA/IDEyIDogNjtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbCB4cz17Y29sdW1uQ291bnR9PlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtZ3JvdXBcIj5cbiAgICAgICAgICB7IHNpbmdsZUNvbHVtbiB8fFxuICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlS2V5d29yZENoYW5nZX1cbiAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlYXJjaFRvb2x0aXB9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2luZ2xlQ29sdW1uKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29sIHhzPXs0fT5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICA8Q29udHJvbExhYmVsPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuYXZhaWxhYmxlTGlzdExhYmVsfVxuICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyfT5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdC1hbGwtY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmFsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGxTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmFsbExhYmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0ZWREYXRhSGVhZGVyID0gKCkgPT4gKFxuICAgIDxDb2wgeHM9e3RoaXMucHJvcHMuc2luZ2xlQ29sdW1uID8gMTIgOiA2fT5cbiAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgPC9Db2w+XG4gIClcblxuICByZW5kZXJBYXZhaWxhYmxlRGF0YUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2luZ2xlQ29sdW1uKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8QXZhaWxhYmxlRGF0YUxpc3RcbiAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0fVxuICAgICAgICAgICAgb25TZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVNlbGVjdEl0ZW19XG4gICAgICAgICAgICBvblVuc2VsZWN0SXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICBzZWFyY2hLZXl3b3JkPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0ZWRDb250ZW50ID0gKCkgPT4gKFxuICAgIDxDb2wgeHM9e3RoaXMucHJvcHMuc2luZ2xlQ29sdW1uID8gMTIgOiA2fT5cbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxTZWxlY3RlZERhdGFMaXN0XG4gICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdH1cbiAgICAgICAgICBvblNvcnRDaGFuZ2U9e3RoaXMuaGFuZGxlU29ydENoYW5nZX1cbiAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgIHNob3dSZW1vdmVJY29uPXshdGhpcy5wcm9wcy5zaW5nbGVDb2x1bW59XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICA8L0NvbD5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPyBgb2Mtc2VsZWN0LW9yZGVyLWxpc3QtJHt0aGlzLnByb3BzLmlkfWAgOiAnb2Mtc2VsZWN0LW9yZGVyLWxpc3QnO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBpZD17aWR9IGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlYXJjaEJhcigpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJBYXZhaWxhYmxlRGF0YUhlYWRlcigpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlbGVjdGVkRGF0YUhlYWRlcigpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJBYXZhaWxhYmxlRGF0YUNvbnRlbnQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWxlY3RlZENvbnRlbnQoKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19