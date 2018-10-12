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
      _this.setState({ keyword: keyword });
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

    _this.renderSearchBar = function () {
      var singleColumn = _this.props.singleColumn;

      var columnCount = singleColumn ? 12 : 6;
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: columnCount },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { className: 'oc-select-order-list-keyword-group' },
          singleColumn || _react2.default.createElement(_reactSearchbar2.default, {
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

      return _react2.default.createElement(
        'div',
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
              _this.props.translations.availableListLabel
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
              checked: _this.props.allSelected,
              onChange: _this.handleAllSelectedChange,
              label: _this.props.translations.allLabel
            })
          )
        )
      );
    };

    _this.renderSelectedDataHeader = function () {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: _this.props.singleColumn ? 12 : 6 },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { className: 'oc-select-order-list-label' },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            _this.props.translations.selectedListLabel
          )
        )
      );
    };

    _this.renderAavailableDataContent = function () {
      if (_this.props.singleColumn) return null;

      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 6 },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_availableDataList2.default, {
            items: _this.state.availableDataList,
            onSelectItem: _this.handleSelectItem,
            onUnselectItem: _this.handleUnselectItem,
            searchKeyword: _this.state.keyword
          })
        )
      );
    };

    _this.renderSelectedContent = function () {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: _this.props.singleColumn ? 12 : 6 },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_selectedDataList2.default, {
            items: _this.state.selectedDataList,
            onSortChange: _this.handleSortChange,
            onRemoveItem: _this.handleUnselectItem,
            showRemoveIcon: !_this.props.singleColumn
          })
        )
      );
    };

    var availableDataList = _data2.default.getAvailableDataList(props.availableData, props.selectedData);
    _this.state = {
      availableDataList: availableDataList,
      selectedDataList: _data2.default.getSelectedDataList(props.selectedData),
      keyword: ''
    };
    return _this;
  }

  SelectOrderList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.availableData.equals(this.props.availableData) || !nextProps.selectedData.equals(this.props.selectedData)) {
      var selectedDataList = _data2.default.getSelectedDataList(nextProps.selectedData);
      var availableDataList = _data2.default.getAvailableDataList(nextProps.availableData, nextProps.selectedData);
      this.setState({
        availableDataList: availableDataList,
        selectedDataList: selectedDataList
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
        this.renderSearchBar()
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        this.renderAavailableDataHeader(),
        this.renderSelectedDataHeader()
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        this.renderAavailableDataContent(),
        this.renderSelectedContent()
      )
    );
  };

  return SelectOrderList;
}(_react2.default.PureComponent), _class.defaultProps = {
  availableData: (0, _immutable.List)(),
  allSelected: false,
  id: '',
  searchPlaceholder: 'Search...',
  selectedData: (0, _immutable.List)(),
  singleColumn: false,
  translations: {
    allLabel: '',
    availableListLabel: '',
    searchTooltip: null,
    selectedListLabel: ''
  }
}, _temp);
exports.default = SelectOrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJzZXRTdGF0ZSIsImhhbmRsZVNvcnRDaGFuZ2UiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlRGF0YVNvcnQiLCJoYW5kbGVTZWxlY3RJdGVtIiwiaXRlbSIsInNpemUiLCJhdmFpbGFibGVEYXRhIiwicHVzaCIsImhhbmRsZVVuc2VsZWN0SXRlbSIsImkiLCJ2YWx1ZSIsInJlbmRlclNlYXJjaEJhciIsInNpbmdsZUNvbHVtbiIsImNvbHVtbkNvdW50Iiwic2VhcmNoUGxhY2Vob2xkZXIiLCJ0cmFuc2xhdGlvbnMiLCJzZWFyY2hUb29sdGlwIiwicmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIiLCJhdmFpbGFibGVMaXN0TGFiZWwiLCJhbGxMYWJlbCIsInJlbmRlclNlbGVjdGVkRGF0YUhlYWRlciIsInNlbGVjdGVkTGlzdExhYmVsIiwicmVuZGVyQWF2YWlsYWJsZURhdGFDb250ZW50IiwicmVuZGVyU2VsZWN0ZWRDb250ZW50IiwiZ2V0QXZhaWxhYmxlRGF0YUxpc3QiLCJnZXRTZWxlY3RlZERhdGFMaXN0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImVxdWFscyIsInJlbmRlciIsImlkIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztB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SUQ7QUFDRixHOzs0QkE0SER1QyxNLHFCQUFTO0FBQ1AsUUFBTUMsS0FBSyxLQUFLOUMsS0FBTCxDQUFXOEMsRUFBWCw2QkFBd0MsS0FBSzlDLEtBQUwsQ0FBVzhDLEVBQW5ELEdBQTBELHNCQUFyRTtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQU0sSUFBSUEsRUFBVixFQUFjLFdBQWQ7QUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLbkIsZUFBTDtBQURILE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRyxhQUFLTSwwQkFBTCxFQURIO0FBRUcsYUFBS0csd0JBQUw7QUFGSCxPQUpGO0FBUUU7QUFBQTtBQUFBO0FBQ0csYUFBS0UsMkJBQUwsRUFESDtBQUVHLGFBQUtDLHFCQUFMO0FBRkg7QUFSRixLQURGO0FBZUQsRzs7O0VBbE0wQyxnQkFBTVEsYSxVQWlCMUNDLFksR0FBZTtBQUNwQjFCLGlCQUFlLHNCQURLO0FBRXBCcEIsZUFBYSxLQUZPO0FBR3BCNEMsTUFBSSxFQUhnQjtBQUlwQmhCLHFCQUFtQixXQUpDO0FBS3BCM0IsZ0JBQWMsc0JBTE07QUFNcEJ5QixnQkFBYyxLQU5NO0FBT3BCRyxnQkFBYztBQUNaSSxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkYsbUJBQWUsSUFISDtBQUlaSyx1QkFBbUI7QUFKUDtBQVBNLEM7a0JBakJIdEMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29sLFxuICBDb250cm9sTGFiZWwsXG4gIEZvcm1Hcm91cCxcbiAgR3JpZCxcbiAgUm93LFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3Qtc2VhcmNoYmFyJztcblxuaW1wb3J0IEF2YWlsYWJsZURhdGFMaXN0IGZyb20gJy4vYXZhaWxhYmxlLWRhdGEtbGlzdC9hdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgU2VsZWN0ZWREYXRhTGlzdCBmcm9tICcuL3NlbGVjdGVkLWRhdGEtbGlzdC9zZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCBVdGlscyBmcm9tICcuL2RhdGEudXRpbHMnO1xuaW1wb3J0ICcuL3NlbGVjdC1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXZhaWxhYmxlRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpbmdsZUNvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWREYXRhOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbGxMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIGF2YWlsYWJsZUxpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGF2YWlsYWJsZURhdGE6IExpc3QoKSxcbiAgICBhbGxTZWxlY3RlZDogZmFsc2UsXG4gICAgaWQ6ICcnLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcbiAgICBzZWxlY3RlZERhdGE6IExpc3QoKSxcbiAgICBzaW5nbGVDb2x1bW46IGZhbHNlLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgYWxsTGFiZWw6ICcnLFxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiAnJyxcbiAgICAgIHNlYXJjaFRvb2x0aXA6IG51bGwsXG4gICAgICBzZWxlY3RlZExpc3RMYWJlbDogJycsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZ2V0QXZhaWxhYmxlRGF0YUxpc3QocHJvcHMuYXZhaWxhYmxlRGF0YSwgcHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXG4gICAgICBzZWxlY3RlZERhdGFMaXN0OiBVdGlscy5nZXRTZWxlY3RlZERhdGFMaXN0KHByb3BzLnNlbGVjdGVkRGF0YSksXG4gICAgICBrZXl3b3JkOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIW5leHRQcm9wcy5hdmFpbGFibGVEYXRhLmVxdWFscyh0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEpIHx8XG4gICAgIW5leHRQcm9wcy5zZWxlY3RlZERhdGEuZXF1YWxzKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhTGlzdCA9IFV0aWxzLmdldFNlbGVjdGVkRGF0YUxpc3QobmV4dFByb3BzLnNlbGVjdGVkRGF0YSk7XG4gICAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9XG4gICAgICAgIFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KG5leHRQcm9wcy5hdmFpbGFibGVEYXRhLCBuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdmFpbGFibGVEYXRhTGlzdCxcbiAgICAgICAgc2VsZWN0ZWREYXRhTGlzdCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gIXRoaXMucHJvcHMuYWxsU2VsZWN0ZWQ7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gYWxsU2VsZWN0ZWQgPyB0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0IDpcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdC5maWx0ZXIoZGF0YSA9PiBkYXRhLmlzTG9ja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgYWxsU2VsZWN0ZWQsIHNlbGVjdGVkRGF0YSB9KTtcbiAgfVxuXG4gIGhhbmRsZUtleXdvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGtleXdvcmQgPSBlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkIH0pO1xuICB9XG5cbiAgaGFuZGxlU29ydENoYW5nZSA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgaWYgKG5ld0luZGV4ID09PSBudWxsIHx8IG5ld0luZGV4ID09PSBvbGRJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBVdGlscy5jaGFuZ2VEYXRhU29ydCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHNlbGVjdGVkRGF0YSwgYWxsU2VsZWN0ZWQ6IHRoaXMucHJvcHMuYWxsU2VsZWN0ZWQgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvLyBhZGQgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICBhbGxTZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnNpemUgKyAxID09PSB0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEuc2l6ZSxcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnB1c2goaXRlbSksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVVbnNlbGVjdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgYWxsU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QuZmlsdGVyKGkgPT4gaS52YWx1ZSAhPT0gaXRlbS52YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaW5nbGVDb2x1bW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29sdW1uQ291bnQgPSBzaW5nbGVDb2x1bW4gPyAxMiA6IDY7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wgeHM9e2NvbHVtbkNvdW50fT5cbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWdyb3VwXCI+XG4gICAgICAgICAgeyBzaW5nbGVDb2x1bW4gfHxcbiAgICAgICAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgICAgICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb209ezF9XG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZUtleXdvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyPXt0aGlzLnByb3BzLnNlYXJjaFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB0b29sdGlwPXt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zZWFyY2hUb29sdGlwfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckFhdmFpbGFibGVEYXRhSGVhZGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnNpbmdsZUNvbHVtbikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbCB4cz17NH0+XG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sYWJlbFwiPlxuICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmF2YWlsYWJsZUxpc3RMYWJlbH1cbiAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17Mn0+XG4gICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3QtYWxsLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5hbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hbGxMYWJlbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdGVkRGF0YUhlYWRlciA9ICgpID0+IChcbiAgICA8Q29sIHhzPXt0aGlzLnByb3BzLnNpbmdsZUNvbHVtbiA/IDEyIDogNn0+XG4gICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XG4gICAgICAgIDxDb250cm9sTGFiZWw+XG4gICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlbGVjdGVkTGlzdExhYmVsfVxuICAgICAgICA8L0NvbnRyb2xMYWJlbD5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIDwvQ29sPlxuICApXG5cbiAgcmVuZGVyQWF2YWlsYWJsZURhdGFDb250ZW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnNpbmdsZUNvbHVtbikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEF2YWlsYWJsZURhdGFMaXN0XG4gICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hdmFpbGFibGVEYXRhTGlzdH1cbiAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxuICAgICAgICAgICAgb25VbnNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxuICAgICAgICAgICAgc2VhcmNoS2V5d29yZD17dGhpcy5zdGF0ZS5rZXl3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdGVkQ29udGVudCA9ICgpID0+IChcbiAgICA8Q29sIHhzPXt0aGlzLnByb3BzLnNpbmdsZUNvbHVtbiA/IDEyIDogNn0+XG4gICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8U2VsZWN0ZWREYXRhTGlzdFxuICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3R9XG4gICAgICAgICAgb25Tb3J0Q2hhbmdlPXt0aGlzLmhhbmRsZVNvcnRDaGFuZ2V9XG4gICAgICAgICAgb25SZW1vdmVJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cbiAgICAgICAgICBzaG93UmVtb3ZlSWNvbj17IXRoaXMucHJvcHMuc2luZ2xlQ29sdW1ufVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgPC9Db2w+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkID8gYG9jLXNlbGVjdC1vcmRlci1saXN0LSR7dGhpcy5wcm9wcy5pZH1gIDogJ29jLXNlbGVjdC1vcmRlci1saXN0JztcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQgaWQ9e2lkfSBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2hCYXIoKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge3RoaXMucmVuZGVyQWF2YWlsYWJsZURhdGFIZWFkZXIoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTZWxlY3RlZERhdGFIZWFkZXIoKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge3RoaXMucmVuZGVyQWF2YWlsYWJsZURhdGFDb250ZW50KCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU2VsZWN0ZWRDb250ZW50KCl9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==