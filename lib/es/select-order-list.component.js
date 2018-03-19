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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTGlzdCIsIkltbXV0YWJsZVByb3BUeXBlcyIsIkNoZWNrYm94IiwiQ29sIiwiQ29udHJvbExhYmVsIiwiRm9ybUdyb3VwIiwiR3JpZCIsIlJvdyIsIlNlYXJjaEJhciIsIkF2YWlsYWJsZURhdGFMaXN0IiwiU2VsZWN0ZWREYXRhTGlzdCIsIlV0aWxzIiwiU2VsZWN0T3JkZXJMaXN0IiwicHJvcHMiLCJoYW5kbGVBbGxTZWxlY3RlZENoYW5nZSIsImFsbFNlbGVjdGVkIiwic2VsZWN0ZWREYXRhIiwic3RhdGUiLCJhdmFpbGFibGVEYXRhTGlzdCIsInNlbGVjdGVkRGF0YUxpc3QiLCJmaWx0ZXIiLCJkYXRhIiwiaXNMb2NrZWQiLCJvbkNoYW5nZSIsImhhbmRsZUtleXdvcmRDaGFuZ2UiLCJlIiwia2V5d29yZCIsInZpc2libGVBdmFpbGFibGVEYXRhTGlzdCIsImZpbHRlckRhdGEiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJyZW5kZXIiLCJpZCIsInNlYXJjaFBsYWNlaG9sZGVyIiwidHJhbnNsYXRpb25zIiwic2VhcmNoVG9vbHRpcCIsImF2YWlsYWJsZUxpc3RMYWJlbCIsImFsbExhYmVsIiwic2VsZWN0ZWRMaXN0TGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7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R0UsOEJBQWdCLEtBQUtLO0FBSHZCO0FBREY7QUFERixTQURGO0FBVUU7QUFBQyxhQUFEO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxnQ0FBQyxnQkFBRDtBQUNFLHFCQUFPLEtBQUt0QixLQUFMLENBQVdFLGdCQURwQjtBQUVFLDRCQUFjLEtBQUtXLGdCQUZyQjtBQUdFLDRCQUFjLEtBQUtTO0FBSHJCO0FBREY7QUFERjtBQVZGO0FBMUNGLEtBREY7QUFpRUQsRzs7O0VBN0owQ3pDLE1BQU15RCxhLFVBZ0IxQ0MsWSxHQUFlO0FBQ3BCekMsZUFBYSxLQURPO0FBRXBCaUMsTUFBSSxFQUZnQjtBQUdwQkMscUJBQW1CLFdBSEM7QUFJcEJqQyxnQkFBY2hCLE1BSk07QUFLcEJrRCxnQkFBYztBQUNaRyxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkQsbUJBQWUsSUFISDtBQUlaRyx1QkFBbUI7QUFKUDtBQUxNLEM7U0FoQkgxQyxlIiwiZmlsZSI6InNlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQge1xuICBDaGVja2JveCxcbiAgQ29sLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Hcm91cCxcbiAgR3JpZCxcbiAgUm93LFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3Qtc2VhcmNoYmFyJztcblxuaW1wb3J0IEF2YWlsYWJsZURhdGFMaXN0IGZyb20gJy4vYXZhaWxhYmxlLWRhdGEtbGlzdC9hdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgU2VsZWN0ZWREYXRhTGlzdCBmcm9tICcuL3NlbGVjdGVkLWRhdGEtbGlzdC9zZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBVdGlscyBmcm9tICcuL2RhdGEudXRpbHMnO1xuaW1wb3J0ICcuL3NlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWREYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbGxMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBpZDogJycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgYWxsTGFiZWw6ICcnLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiAnJyxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IG51bGwsXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QocHJvcHMuYXZhaWxhYmxlRGF0YSwgcHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgICBzZWxlY3RlZERhdGFMaXN0OiBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KHByb3BzLnNlbGVjdGVkRGF0YSksXG4gICAgICBrZXl3b3JkOiAnJyxcbiAgICAgIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdDogYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCFuZXh0UHJvcHMuYXZhaWxhYmxlRGF0YS5lcXVhbHModGhpcy5wcm9wcy5hdmFpbGFibGVEYXRhKSB8fFxuICAgICFuZXh0UHJvcHMuc2VsZWN0ZWREYXRhLmVxdWFscyh0aGlzLnByb3BzLnNlbGVjdGVkRGF0YSkpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUxpc3QgPSBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPVxuICAgICAgICBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChuZXh0UHJvcHMuYXZhaWxhYmxlRGF0YSwgbmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgICAgIHNlbGVjdGVkRGF0YUxpc3QsXG4gICAgICAgIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdDogVXRpbHMuZmlsdGVyRGF0YShhdmFpbGFibGVEYXRhTGlzdCwgdGhpcy5zdGF0ZS5rZXl3b3JkKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gIXRoaXMucHJvcHMuYWxsU2VsZWN0ZWQ7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gYWxsU2VsZWN0ZWQgPyB0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0IDpcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoZGF0YSA9PiBkYXRhLmlzTG9ja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgYWxsU2VsZWN0ZWQsIHNlbGVjdGVkRGF0YSB9KTtcbiAgfVxuXG4gIGhhbmRsZUtleXdvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGtleXdvcmQgPSBlO1xuICAgIGNvbnN0IHZpc2libGVBdmFpbGFibGVEYXRhTGlzdCA9IFV0aWxzLmZpbHRlckRhdGEodGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdCwga2V5d29yZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQsIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnRDaGFuZ2UgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xuICAgIGlmIChuZXdJbmRleCA9PT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gb2xkSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gVXRpbHMuY2hhbmdlRGF0YVNvcnQodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBzZWxlY3RlZERhdGEsIGFsbFNlbGVjdGVkOiB0aGlzLnByb3BzLmFsbFNlbGVjdGVkIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgLy8gYWRkIHNlbGVjdGVkIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgYWxsU2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5zaXplICsgMSA9PT0gdGhpcy5wcm9wcy5hdmFpbGFibGVEYXRhLnNpemUsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5wdXNoKGl0ZW0pLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlVW5zZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihpID0+IGkudmFsdWUgIT09IGl0ZW0udmFsdWUpLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCA/IGBvYy1zZWxlY3Qtb3JkZXItbGlzdC0ke3RoaXMucHJvcHMuaWR9YCA6ICdvYy1zZWxlY3Qtb3JkZXItbGlzdCc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkIGlkPXtpZH0gZmx1aWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tPXsxfVxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlS2V5d29yZENoYW5nZX1cbiAgICAgICAgICAgICAgICBzZWFyY2hQbGFjZUhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zZWFyY2hUb29sdGlwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmF2YWlsYWJsZUxpc3RMYWJlbH1cbiAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsyfT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdC1hbGwtY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuYWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuYWxsTGFiZWx9XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc2VsZWN0ZWRMaXN0TGFiZWx9XG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUudmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAgIG9uVW5zZWxlY3RJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPFNlbGVjdGVkRGF0YUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0fVxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlSXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuIl19