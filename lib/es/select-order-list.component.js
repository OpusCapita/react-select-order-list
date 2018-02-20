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
  selectedData: List(),
  selectedListLabel: ''
}, _temp);
export { SelectOrderList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNoZWNrYm94IiwiQ29sIiwiQ29udHJvbExhYmVsIiwiRm9ybUdyb3VwIiwiR3JpZCIsIlJvdyIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInZpc2libGVBdmFpbGFibGVEYXRhTGlzdCIsImZpbHRlckRhdGEiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJyZW5kZXIiLCJpZCIsInNlYXJjaFBsYWNlaG9sZGVyIiwiYXZhaWxhYmxlTGlzdExhYmVsIiwiYWxsTGFiZWwiLCJzZWxlY3RlZExpc3RMYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtC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QU8sS0FBS3RCLEtBQUwsQ0FBV0UsZ0JBRHBCO0FBRUUsNEJBQWMsS0FBS1csZ0JBRnJCO0FBR0UsNEJBQWMsS0FBS1M7QUFIckI7QUFERjtBQURGO0FBVkY7QUF6Q0YsS0FERjtBQWdFRCxHOzs7RUF0SjBDekMsTUFBTXVELGEsVUFhMUNDLFksR0FBZTtBQUNwQkgsWUFBVSxFQURVO0FBRXBCcEMsZUFBYSxLQUZPO0FBR3BCbUMsc0JBQW9CLEVBSEE7QUFJcEJGLE1BQUksRUFKZ0I7QUFLcEJDLHFCQUFtQixXQUxDO0FBTXBCakMsZ0JBQWNoQixNQU5NO0FBT3BCb0QscUJBQW1CO0FBUEMsQztTQWJIeEMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ2hlY2tib3gsXG4gIENvbCxcbiAgQ29udHJvbExhYmVsLFxuICBGb3JtR3JvdXAsXG4gIEdyaWQsXG4gIFJvdyxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXNlYXJjaGJhcic7XG5cbmltcG9ydCBBdmFpbGFibGVEYXRhTGlzdCBmcm9tICcuL2F2YWlsYWJsZS1kYXRhLWxpc3QvYXZhaWxhYmxlLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFNlbGVjdGVkRGF0YUxpc3QgZnJvbSAnLi9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9kYXRhLnV0aWxzJztcbmltcG9ydCAnLi9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9yZGVyTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF2YWlsYWJsZURhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsTGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgYWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxsTGFiZWw6ICcnLFxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgIGlkOiAnJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgc2VsZWN0ZWREYXRhOiBMaXN0KCksXG4gICAgc2VsZWN0ZWRMaXN0TGFiZWw6ICcnLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChwcm9wcy5hdmFpbGFibGVEYXRhLCBwcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgIHNlbGVjdGVkRGF0YUxpc3Q6IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QocHJvcHMuc2VsZWN0ZWREYXRhKSxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0OiBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIW5leHRQcm9wcy5hdmFpbGFibGVEYXRhLmVxdWFscyh0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEpIHx8XG4gICAgIW5leHRQcm9wcy5zZWxlY3RlZERhdGEuZXF1YWxzKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhTGlzdCA9IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QobmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9XG4gICAgICAgIFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KG5leHRQcm9wcy5hdmFpbGFibGVEYXRhLCBuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgICAgc2VsZWN0ZWREYXRhTGlzdCxcbiAgICAgICAgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0OiBVdGlscy5maWx0ZXJEYXRhKGF2YWlsYWJsZURhdGFMaXN0LCB0aGlzLnN0YXRlLmtleXdvcmQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAhdGhpcy5wcm9wcy5hbGxTZWxlY3RlZDtcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBhbGxTZWxlY3RlZCA/IHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QgOlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBhbGxTZWxlY3RlZCwgc2VsZWN0ZWREYXRhIH0pO1xuICB9XG5cbiAgaGFuZGxlS2V5d29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGU7XG4gICAgY29uc3QgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZmlsdGVyRGF0YSh0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0LCBrZXl3b3JkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5d29yZCwgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0IH0pO1xuICB9XG5cbiAgaGFuZGxlU29ydENoYW5nZSA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgaWYgKG5ld0luZGV4ID09PSBudWxsIHx8IG5ld0luZGV4ID09PSBvbGRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBVdGlscy5jaGFuZ2VEYXRhU29ydCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHNlbGVjdGVkRGF0YSwgYWxsU2VsZWN0ZWQ6IHRoaXMucHJvcHMuYWxsU2VsZWN0ZWQgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvLyBhZGQgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnNpemUgKyAxID09PSB0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEuc2l6ZSxcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnB1c2goaXRlbSksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVVbnNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGkgPT4gaS52YWx1ZSAhPT0gaXRlbS52YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkID8gYG9jLXNlbGVjdC1vcmRlci1saXN0LSR7dGhpcy5wcm9wcy5pZH1gIDogJ29jLXNlbGVjdC1vcmRlci1saXN0JztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgaWQ9e2lkfSBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1ncm91cFwiPlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb209ezF9XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVLZXl3b3JkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXZhaWxhYmxlTGlzdExhYmVsfVxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5hbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGxTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsbExhYmVsfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUudmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAgIG9uVW5zZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPFNlbGVjdGVkRGF0YUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlSXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19