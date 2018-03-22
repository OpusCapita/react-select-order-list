'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable jsx-a11y/no-static-element-interactions */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactBootstrap = require('react-bootstrap');

var _reactCheckbox = require('@opuscapita/react-checkbox');

var _reactCheckbox2 = _interopRequireDefault(_reactCheckbox);

var _reactSearchbar = require('@opuscapita/react-searchbar');

var _reactSearchbar2 = _interopRequireDefault(_reactSearchbar);

var _availableDataList = require('./available-data-list/available-data-list.component');

var _availableDataList2 = _interopRequireDefault(_availableDataList);

var _selectedDataList = require('./selected-data-list/selected-data-list.component');

var _selectedDataList2 = _interopRequireDefault(_selectedDataList);

var _data = require('./data.utils');

var _data2 = _interopRequireDefault(_data);

require('./select-order-list.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var visibleAvailableDataList = _data2.default.filterData(_this.state.availableDataList, keyword);
      _this.setState({ keyword: keyword, visibleAvailableDataList: visibleAvailableDataList });
    };

    _this.handleSortChange = function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;

      if (newIndex === null || newIndex === oldIndex) {
        return;
      }
      var selectedData = _data2.default.changeDataSort(_this.state.selectedDataList, oldIndex, newIndex);
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

    var availableDataList = _data2.default.getAvailableDataList(props.availableData, props.selectedData);
    _this.state = {
      availableDataList: availableDataList,
      selectedDataList: _data2.default.getSelectedDataList(props.selectedData),
      keyword: '',
      visibleAvailableDataList: availableDataList
    };
    return _this;
  }

  SelectOrderList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) || !nextProps.selectedData.equals(this.props.selectedData)) {
      var selectedDataList = _data2.default.getSelectedDataList(nextProps.selectedData);
      var availableDataList = _data2.default.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList: availableDataList,
        selectedDataList: selectedDataList,
        visibleAvailableDataList: _data2.default.filterData(availableDataList, this.state.keyword)
      });
    }
  };

  SelectOrderList.prototype.render = function render() {
    var id = this.props.id ? 'oc-select-order-list-' + this.props.id : 'oc-select-order-list';
    return _react2.default.createElement(
      _reactBootstrap.Grid,
      { id: id, fluid: true },
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-keyword-group' },
            _react2.default.createElement(_reactSearchbar2.default, {
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
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 4 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-label' },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              this.props.translations.availableListLabel
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 2 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_reactCheckbox2.default, {
              className: 'oc-select-order-list-select-all-checkbox',
              checked: this.props.allSelected,
              onChange: this.handleAllSelectedChange,
              label: this.props.translations.allLabel
            })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'oc-select-order-list-label' },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              this.props.translations.selectedListLabel
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_availableDataList2.default, {
              items: this.state.visibleAvailableDataList,
              onSelectItem: this.handleSelectItem,
              onUnselectItem: this.handleUnselectItem
            })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_selectedDataList2.default, {
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
}(_react2.default.PureComponent), _class.defaultProps = {
  allSelected: false,
  id: '',
  searchPlaceholder: 'Search...',
  selectedData: (0, _immutable.List)(),
  translations: {
    allLabel: '',
    availableListLabel: '',
    searchTooltip: null,
    selectedListLabel: ''
  }
}, _temp);
exports.default = SelectOrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJ2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QiLCJmaWx0ZXJEYXRhIiwic2V0U3RhdGUiLCJoYW5kbGVTb3J0Q2hhbmdlIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsImNoYW5nZURhdGFTb3J0IiwiaGFuZGxlU2VsZWN0SXRlbSIsIml0ZW0iLCJzaXplIiwiYXZhaWxhYmxlRGF0YSIsInB1c2giLCJoYW5kbGVVbnNlbGVjdEl0ZW0iLCJpIiwidmFsdWUiLCJnZXRBdmFpbGFibGVEYXRhTGlzdCIsImdldFNlbGVjdGVkRGF0YUxpc3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZXF1YWxzIiwicmVuZGVyIiwiaWQiLCJzZWFyY2hQbGFjZWhvbGRlciIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFRvb2x0aXAiLCJhdmFpbGFibGVMaXN0TGFiZWwiLCJhbGxMYWJlbCIsInNlbGVjdGVkTGlzdExhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQU9BOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsZTs7O0FBNkJuQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FB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RSxXQUZ0QjtBQUdFLHdCQUFVLEtBQUtELHVCQUhqQjtBQUlFLHFCQUFPLEtBQUtELEtBQUwsQ0FBV3FDLFlBQVgsQ0FBd0JHO0FBSmpDO0FBREY7QUFERixTQVJGO0FBa0JFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQSxjQUFXLFdBQVUsNEJBQXJCO0FBQ0U7QUFBQTtBQUFBO0FBQ0csbUJBQUt4QyxLQUFMLENBQVdxQyxZQUFYLENBQXdCSTtBQUQzQjtBQURGO0FBREY7QUFsQkYsT0FmRjtBQXlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHFCQUFPLEtBQUtyQyxLQUFMLENBQVdVLHdCQURwQjtBQUVFLDRCQUFjLEtBQUtPLGdCQUZyQjtBQUdFLDhCQUFnQixLQUFLSztBQUh2QjtBQURGO0FBREYsU0FERjtBQVVFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UscUJBQU8sS0FBS3RCLEtBQUwsQ0FBV0UsZ0JBRHBCO0FBRUUsNEJBQWMsS0FBS1csZ0JBRnJCO0FBR0UsNEJBQWMsS0FBS1M7QUFIckI7QUFERjtBQURGO0FBVkY7QUF6Q0YsS0FERjtBQWdFRCxHOzs7RUE1SjBDLGdCQUFNZ0IsYSxVQWdCMUNDLFksR0FBZTtBQUNwQnpDLGVBQWEsS0FETztBQUVwQmlDLE1BQUksRUFGZ0I7QUFHcEJDLHFCQUFtQixXQUhDO0FBSXBCakMsZ0JBQWMsc0JBSk07QUFLcEJrQyxnQkFBYztBQUNaRyxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkQsbUJBQWUsSUFISDtBQUlaRyx1QkFBbUI7QUFKUDtBQUxNLEM7a0JBaEJIMUMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29sLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Hcm91cCxcbiAgR3JpZCxcbiAgUm93LFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3Qtc2VhcmNoYmFyJztcblxuaW1wb3J0IEF2YWlsYWJsZURhdGFMaXN0IGZyb20gJy4vYXZhaWxhYmxlLWRhdGEtbGlzdC9hdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgU2VsZWN0ZWREYXRhTGlzdCBmcm9tICcuL3NlbGVjdGVkLWRhdGEtbGlzdC9zZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBVdGlscyBmcm9tICcuL2RhdGEudXRpbHMnO1xuaW1wb3J0ICcuL3NlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWREYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbGxMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICBpZDogJycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgYWxsTGFiZWw6ICcnLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiAnJyxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IG51bGwsXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QocHJvcHMuYXZhaWxhYmxlRGF0YSwgcHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgICBzZWxlY3RlZERhdGFMaXN0OiBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KHByb3BzLnNlbGVjdGVkRGF0YSksXG4gICAgICBrZXl3b3JkOiAnJyxcbiAgICAgIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdDogYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCFuZXh0UHJvcHMuYXZhaWxhYmxlRGF0YS5lcXVhbHModGhpcy5wcm9wcy5hdmFpbGFibGVEYXRhKSB8fFxuICAgICFuZXh0UHJvcHMuc2VsZWN0ZWREYXRhLmVxdWFscyh0aGlzLnByb3BzLnNlbGVjdGVkRGF0YSkpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUxpc3QgPSBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KG5leHRQcm9wcy5zZWxlY3RlZERhdGEpO1xuICAgICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPVxuICAgICAgICBVdGlscy5nZXRBdmFpbGFibGVEYXRhTGlzdChuZXh0UHJvcHMuYXZhaWxhYmxlRGF0YSwgbmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgICAgIHNlbGVjdGVkRGF0YUxpc3QsXG4gICAgICAgIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdDogVXRpbHMuZmlsdGVyRGF0YShhdmFpbGFibGVEYXRhTGlzdCwgdGhpcy5zdGF0ZS5rZXl3b3JkKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gIXRoaXMucHJvcHMuYWxsU2VsZWN0ZWQ7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gYWxsU2VsZWN0ZWQgPyB0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0IDpcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoZGF0YSA9PiBkYXRhLmlzTG9ja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgYWxsU2VsZWN0ZWQsIHNlbGVjdGVkRGF0YSB9KTtcbiAgfVxuXG4gIGhhbmRsZUtleXdvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGtleXdvcmQgPSBlO1xuICAgIGNvbnN0IHZpc2libGVBdmFpbGFibGVEYXRhTGlzdCA9IFV0aWxzLmZpbHRlckRhdGEodGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdCwga2V5d29yZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmQsIHZpc2libGVBdmFpbGFibGVEYXRhTGlzdCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNvcnRDaGFuZ2UgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xuICAgIGlmIChuZXdJbmRleCA9PT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gb2xkSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gVXRpbHMuY2hhbmdlRGF0YVNvcnQodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBzZWxlY3RlZERhdGEsIGFsbFNlbGVjdGVkOiB0aGlzLnByb3BzLmFsbFNlbGVjdGVkIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgLy8gYWRkIHNlbGVjdGVkIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgYWxsU2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5zaXplICsgMSA9PT0gdGhpcy5wcm9wcy5hdmFpbGFibGVEYXRhLnNpemUsXG4gICAgICBzZWxlY3RlZERhdGE6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5wdXNoKGl0ZW0pLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlVW5zZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihpID0+IGkudmFsdWUgIT09IGl0ZW0udmFsdWUpLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCA/IGBvYy1zZWxlY3Qtb3JkZXItbGlzdC0ke3RoaXMucHJvcHMuaWR9YCA6ICdvYy1zZWxlY3Qtb3JkZXItbGlzdCc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkIGlkPXtpZH0gZmx1aWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWtleXdvcmQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tPXsxfVxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlS2V5d29yZENoYW5nZX1cbiAgICAgICAgICAgICAgICBzZWFyY2hQbGFjZUhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zZWFyY2hUb29sdGlwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmF2YWlsYWJsZUxpc3RMYWJlbH1cbiAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsyfT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdC1hbGwtY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuYWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmFsbExhYmVsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlbGVjdGVkTGlzdExhYmVsfVxuICAgICAgICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxBdmFpbGFibGVEYXRhTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnZpc2libGVBdmFpbGFibGVEYXRhTGlzdH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlU2VsZWN0SXRlbX1cbiAgICAgICAgICAgICAgICBvblVuc2VsZWN0SXRlbT17dGhpcy5oYW5kbGVVbnNlbGVjdEl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxTZWxlY3RlZERhdGFMaXN0XG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdH1cbiAgICAgICAgICAgICAgICBvblNvcnRDaGFuZ2U9e3RoaXMuaGFuZGxlU29ydENoYW5nZX1cbiAgICAgICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==