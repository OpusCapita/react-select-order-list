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
            React.createElement(Checkbox, {
              className: 'oc-select-order-list-select-all-checkbox',
              checked: this.props.allSelected,
              onChange: this.handleAllSelectedChange,
              label: this.props.translations.allLabel
            })
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
              items: this.state.availableDataList,
              onSelectItem: this.handleSelectItem,
              onUnselectItem: this.handleUnselectItem,
              searchKeyword: this.state.keyword
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNvbCIsIkNvbnRyb2xMYWJlbCIsIkZvcm1Hcm91cCIsIkdyaWQiLCJSb3ciLCJDaGVja2JveCIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInNldFN0YXRlIiwiaGFuZGxlU29ydENoYW5nZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJjaGFuZ2VEYXRhU29ydCIsImhhbmRsZVNlbGVjdEl0ZW0iLCJpdGVtIiwic2l6ZSIsImF2YWlsYWJsZURhdGEiLCJwdXNoIiwiaGFuZGxlVW5zZWxlY3RJdGVtIiwiaSIsInZhbHVlIiwiZ2V0QXZhaWxhYmxlRGF0YUxpc3QiLCJnZXRTZWxlY3RlZERhdGFMaXN0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImVxdWFscyIsInJlbmRlciIsImlkIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJ0cmFuc2xhdGlvbnMiLCJzZWFyY2hUb29sdGlwIiwiYXZhaWxhYmxlTGlzdExhYmVsIiwiYWxsTGFiZWwiLCJzZWxlY3RlZExpc3RMYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FB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QkFBYyxLQUFLUztBQUhyQjtBQURGO0FBREY7QUFYRjtBQXpDRixLQURGO0FBaUVELEc7OztFQTFKMEN2QyxNQUFNdUQsYSxVQWdCMUNDLFksR0FBZTtBQUNwQnZDLGVBQWEsS0FETztBQUVwQitCLE1BQUksRUFGZ0I7QUFHcEJDLHFCQUFtQixXQUhDO0FBSXBCL0IsZ0JBQWNoQixNQUpNO0FBS3BCZ0QsZ0JBQWM7QUFDWkcsY0FBVSxFQURFO0FBRVpELHdCQUFvQixFQUZSO0FBR1pELG1CQUFlLElBSEg7QUFJWkcsdUJBQW1CO0FBSlA7QUFMTSxDO1NBaEJIeEMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29sLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Hcm91cCxcbiAgR3JpZCxcbiAgUm93LFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3Qtc2VhcmNoYmFyJztcblxuaW1wb3J0IEF2YWlsYWJsZURhdGFMaXN0IGZyb20gJy4vYXZhaWxhYmxlLWRhdGEtbGlzdC9hdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgU2VsZWN0ZWREYXRhTGlzdCBmcm9tICcuL3NlbGVjdGVkLWRhdGEtbGlzdC9zZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBVdGlscyBmcm9tICcuL2RhdGEudXRpbHMnO1xuaW1wb3J0ICcuL3NlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWREYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbGxMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBpZDogJycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgYWxsTGFiZWw6ICcnLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiAnJyxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IG51bGwsXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QocHJvcHMuYXZhaWxhYmxlRGF0YSwgcHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgICBzZWxlY3RlZERhdGFMaXN0OiBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KHByb3BzLnNlbGVjdGVkRGF0YSksXG4gICAgICBrZXl3b3JkOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIW5leHRQcm9wcy5hdmFpbGFibGVEYXRhLmVxdWFscyh0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEpIHx8XG4gICAgIW5leHRQcm9wcy5zZWxlY3RlZERhdGEuZXF1YWxzKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhTGlzdCA9IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QobmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9XG4gICAgICAgIFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KG5leHRQcm9wcy5hdmFpbGFibGVEYXRhLCBuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgICAgc2VsZWN0ZWREYXRhTGlzdCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gIXRoaXMucHJvcHMuYWxsU2VsZWN0ZWQ7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gYWxsU2VsZWN0ZWQgPyB0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0IDpcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoZGF0YSA9PiBkYXRhLmlzTG9ja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgYWxsU2VsZWN0ZWQsIHNlbGVjdGVkRGF0YSB9KTtcbiAgfVxuXG4gIGhhbmRsZUtleXdvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGtleXdvcmQgPSBlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkIH0pO1xuICB9XG5cbiAgaGFuZGxlU29ydENoYW5nZSA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgaWYgKG5ld0luZGV4ID09PSBudWxsIHx8IG5ld0luZGV4ID09PSBvbGRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBVdGlscy5jaGFuZ2VEYXRhU29ydCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHNlbGVjdGVkRGF0YSwgYWxsU2VsZWN0ZWQ6IHRoaXMucHJvcHMuYWxsU2VsZWN0ZWQgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvLyBhZGQgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnNpemUgKyAxID09PSB0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEuc2l6ZSxcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnB1c2goaXRlbSksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVVbnNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGkgPT4gaS52YWx1ZSAhPT0gaXRlbS52YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkID8gYG9jLXNlbGVjdC1vcmRlci1saXN0LSR7dGhpcy5wcm9wcy5pZH1gIDogJ29jLXNlbGVjdC1vcmRlci1saXN0JztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgaWQ9e2lkfSBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1ncm91cFwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb209ezF9XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVLZXl3b3JkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIHRvb2x0aXA9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlYXJjaFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUua2V5d29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs0fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuYXZhaWxhYmxlTGlzdExhYmVsfVxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5hbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGxTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuYWxsTGFiZWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3R9XG4gICAgICAgICAgICAgICAgb25TZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgICAgb25VbnNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAgIHNlYXJjaEtleXdvcmQ9e3RoaXMuc3RhdGUua2V5d29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPFNlbGVjdGVkRGF0YUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlSXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19