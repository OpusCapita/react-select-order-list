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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNoZWNrYm94IiwiQ29sIiwiQ29udHJvbExhYmVsIiwiRm9ybUdyb3VwIiwiR3JpZCIsIlJvdyIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInZpc2libGVBdmFpbGFibGVEYXRhTGlzdCIsImZpbHRlckRhdGEiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJyZW5kZXIiLCJpZCIsInNlYXJjaFBsYWNlaG9sZGVyIiwic2VhcmNoVG9vbHRpcCIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Es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LENBQVQ7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxnQ0FBQyxnQkFBRDtBQUNFLHFCQUFPLEtBQUt0QixLQUFMLENBQVdFLGdCQURwQjtBQUVFLDRCQUFjLEtBQUtXLGdCQUZyQjtBQUdFLDRCQUFjLEtBQUtTO0FBSHJCO0FBREY7QUFERjtBQVZGO0FBMUNGLEtBREY7QUFpRUQsRzs7O0VBekowQ3pDLE1BQU13RCxhLFVBYzFDQyxZLEdBQWU7QUFDcEJILFlBQVUsRUFEVTtBQUVwQnJDLGVBQWEsS0FGTztBQUdwQm9DLHNCQUFvQixFQUhBO0FBSXBCSCxNQUFJLEVBSmdCO0FBS3BCQyxxQkFBbUIsV0FMQztBQU1wQkMsaUJBQWUsSUFOSztBQU9wQmxDLGdCQUFjaEIsTUFQTTtBQVFwQnFELHFCQUFtQjtBQVJDLEM7U0FkSHpDLGUiLCJmaWxlIjoic2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7XG4gIENoZWNrYm94LFxuICBDb2wsXG4gIENvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBHcmlkLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5pbXBvcnQgQXZhaWxhYmxlRGF0YUxpc3QgZnJvbSAnLi9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RlZERhdGFMaXN0IGZyb20gJy4vc2VsZWN0ZWQtZGF0YS1saXN0L3NlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vZGF0YS51dGlscyc7XG5pbXBvcnQgJy4vc2VsZWN0LW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhdmFpbGFibGVEYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGFsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhdmFpbGFibGVMaXN0TGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoVG9vbHRpcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBzZWxlY3RlZERhdGE6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxsTGFiZWw6ICcnLFxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBhdmFpbGFibGVMaXN0TGFiZWw6ICcnLFxuICAgIGlkOiAnJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXG4gICAgc2VhcmNoVG9vbHRpcDogbnVsbCxcbiAgICBzZWxlY3RlZERhdGE6IExpc3QoKSxcbiAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9IFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KHByb3BzLmF2YWlsYWJsZURhdGEsIHByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgc2VsZWN0ZWREYXRhTGlzdDogVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChwcm9wcy5zZWxlY3RlZERhdGEpLFxuICAgICAga2V5d29yZDogJycsXG4gICAgICB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3Q6IGF2YWlsYWJsZURhdGFMaXN0LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLmF2YWlsYWJsZURhdGEuZXF1YWxzKHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YSkgfHxcbiAgICAhbmV4dFByb3BzLnNlbGVjdGVkRGF0YS5lcXVhbHModGhpcy5wcm9wcy5zZWxlY3RlZERhdGEpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID1cbiAgICAgICAgVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QobmV4dFByb3BzLmF2YWlsYWJsZURhdGEsIG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF2YWlsYWJsZURhdGFMaXN0LFxuICAgICAgICBzZWxlY3RlZERhdGFMaXN0LFxuICAgICAgICB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3Q6IFV0aWxzLmZpbHRlckRhdGEoYXZhaWxhYmxlRGF0YUxpc3QsIHRoaXMuc3RhdGUua2V5d29yZCksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxTZWxlY3RlZCA9ICF0aGlzLnByb3BzLmFsbFNlbGVjdGVkO1xuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IGFsbFNlbGVjdGVkID8gdGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdCA6XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGRhdGEgPT4gZGF0YS5pc0xvY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IGFsbFNlbGVjdGVkLCBzZWxlY3RlZERhdGEgfSk7XG4gIH1cblxuICBoYW5kbGVLZXl3b3JkQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBrZXl3b3JkID0gZTtcbiAgICBjb25zdCB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QgPSBVdGlscy5maWx0ZXJEYXRhKHRoaXMuc3RhdGUuYXZhaWxhYmxlRGF0YUxpc3QsIGtleXdvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkLCB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QgfSk7XG4gIH1cblxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcbiAgICBpZiAobmV3SW5kZXggPT09IG51bGwgfHwgbmV3SW5kZXggPT09IG9sZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IFV0aWxzLmNoYW5nZURhdGFTb3J0KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc2VsZWN0ZWREYXRhLCBhbGxTZWxlY3RlZDogdGhpcy5wcm9wcy5hbGxTZWxlY3RlZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3Quc2l6ZSArIDEgPT09IHRoaXMucHJvcHMuYXZhaWxhYmxlRGF0YS5zaXplLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVuc2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoaSA9PiBpLnZhbHVlICE9PSBpdGVtLnZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPyBgb2Mtc2VsZWN0LW9yZGVyLWxpc3QtJHt0aGlzLnByb3BzLmlkfWAgOiAnb2Mtc2VsZWN0LW9yZGVyLWxpc3QnO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZCBpZD17aWR9IGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZUtleXdvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e3RoaXMucHJvcHMuc2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dGhpcy5wcm9wcy5zZWFyY2hUb29sdGlwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXZhaWxhYmxlTGlzdExhYmVsfVxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezJ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0LWFsbC1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5hbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGxTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFsbExhYmVsfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUudmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAgIG9uVW5zZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPFNlbGVjdGVkRGF0YUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlSXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19