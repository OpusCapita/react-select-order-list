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

var _reactSearchbar = require('@opuscapita/react-searchbar');

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
            _react2.default.createElement(_reactSearchbar.SearchBar, {
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
            _react2.default.createElement(
              _reactBootstrap.Checkbox,
              {
                className: 'oc-select-order-list-select-all-checkbox',
                checked: this.props.allSelected,
                onChange: this.handleAllSelectedChange
              },
              this.props.translations.allLabel
            )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlNlbGVjdE9yZGVyTGlzdCIsInByb3BzIiwiaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UiLCJhbGxTZWxlY3RlZCIsInNlbGVjdGVkRGF0YSIsInN0YXRlIiwiYXZhaWxhYmxlRGF0YUxpc3QiLCJzZWxlY3RlZERhdGFMaXN0IiwiZmlsdGVyIiwiZGF0YSIsImlzTG9ja2VkIiwib25DaGFuZ2UiLCJoYW5kbGVLZXl3b3JkQ2hhbmdlIiwiZSIsImtleXdvcmQiLCJ2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QiLCJmaWx0ZXJEYXRhIiwic2V0U3RhdGUiLCJoYW5kbGVTb3J0Q2hhbmdlIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsImNoYW5nZURhdGFTb3J0IiwiaGFuZGxlU2VsZWN0SXRlbSIsIml0ZW0iLCJzaXplIiwiYXZhaWxhYmxlRGF0YSIsInB1c2giLCJoYW5kbGVVbnNlbGVjdEl0ZW0iLCJpIiwidmFsdWUiLCJnZXRBdmFpbGFibGVEYXRhTGlzdCIsImdldFNlbGVjdGVkRGF0YUxpc3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZXF1YWxzIiwicmVuZGVyIiwiaWQiLCJzZWFyY2hQbGFjZWhvbGRlciIsInRyYW5zbGF0aW9ucyIsInNlYXJjaFRvb2x0aXAiLCJhdmFpbGFibGVMaXN0TGFiZWwiLCJhbGxMYWJlbCIsInNlbGVjdGVkTGlzdExhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7bUJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQVFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxlOzs7QUE2Qm5CLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztB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RSxXQUZ0QjtBQUdFLDBCQUFVLEtBQUtEO0FBSGpCO0FBS0csbUJBQUtELEtBQUwsQ0FBV3FDLFlBQVgsQ0FBd0JHO0FBTDNCO0FBREY7QUFERixTQVJGO0FBbUJFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQSxjQUFXLFdBQVUsNEJBQXJCO0FBQ0U7QUFBQTtBQUFBO0FBQ0csbUJBQUt4QyxLQUFMLENBQVdxQyxZQUFYLENBQXdCSTtBQUQzQjtBQURGO0FBREY7QUFuQkYsT0FmRjtBQTBDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHFCQUFPLEtBQUtyQyxLQUFMLENBQVdVLHdCQURwQjtBQUVFLDRCQUFjLEtBQUtPLGdCQUZyQjtBQUdFLDhCQUFnQixLQUFLSztBQUh2QjtBQURGO0FBREYsU0FERjtBQVVFO0FBQUE7QUFBQSxZQUFLLElBQUksQ0FBVDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UscUJBQU8sS0FBS3RCLEtBQUwsQ0FBV0UsZ0JBRHBCO0FBRUUsNEJBQWMsS0FBS1csZ0JBRnJCO0FBR0UsNEJBQWMsS0FBS1M7QUFIckI7QUFERjtBQURGO0FBVkY7QUExQ0YsS0FERjtBQWlFRCxHOzs7RUE3SjBDLGdCQUFNZ0IsYSxVQWdCMUNDLFksR0FBZTtBQUNwQnpDLGVBQWEsS0FETztBQUVwQmlDLE1BQUksRUFGZ0I7QUFHcEJDLHFCQUFtQixXQUhDO0FBSXBCakMsZ0JBQWMsc0JBSk07QUFLcEJrQyxnQkFBYztBQUNaRyxjQUFVLEVBREU7QUFFWkQsd0JBQW9CLEVBRlI7QUFHWkQsbUJBQWUsSUFISDtBQUlaRyx1QkFBbUI7QUFKUDtBQUxNLEM7a0JBaEJIMUMsZSIsImZpbGUiOiJzZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hlY2tib3gsXHJcbiAgQ29sLFxyXG4gIENvbnRyb2xMYWJlbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgR3JpZCxcclxuICBSb3csXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3Qtc2VhcmNoYmFyJztcclxuXHJcbmltcG9ydCBBdmFpbGFibGVEYXRhTGlzdCBmcm9tICcuL2F2YWlsYWJsZS1kYXRhLWxpc3QvYXZhaWxhYmxlLWRhdGEtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgU2VsZWN0ZWREYXRhTGlzdCBmcm9tICcuL3NlbGVjdGVkLWRhdGEtbGlzdC9zZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4vZGF0YS51dGlscyc7XHJcbmltcG9ydCAnLi9zZWxlY3Qtb3JkZXItbGlzdC5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgYXZhaWxhYmxlRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgYWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlbGVjdGVkRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXHJcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGFsbExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgICBhdmFpbGFibGVMaXN0TGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICAgIHNlYXJjaFRvb2x0aXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICAgIHNlbGVjdGVkTGlzdExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGFsbFNlbGVjdGVkOiBmYWxzZSxcclxuICAgIGlkOiAnJyxcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcclxuICAgIHNlbGVjdGVkRGF0YTogTGlzdCgpLFxyXG4gICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgIGFsbExhYmVsOiAnJyxcclxuICAgICAgYXZhaWxhYmxlTGlzdExhYmVsOiAnJyxcclxuICAgICAgc2VhcmNoVG9vbHRpcDogbnVsbCxcclxuICAgICAgc2VsZWN0ZWRMaXN0TGFiZWw6ICcnLFxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zdCBhdmFpbGFibGVEYXRhTGlzdCA9IFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KHByb3BzLmF2YWlsYWJsZURhdGEsIHByb3BzLnNlbGVjdGVkRGF0YSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhdmFpbGFibGVEYXRhTGlzdCxcclxuICAgICAgc2VsZWN0ZWREYXRhTGlzdDogVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChwcm9wcy5zZWxlY3RlZERhdGEpLFxyXG4gICAgICBrZXl3b3JkOiAnJyxcclxuICAgICAgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0OiBhdmFpbGFibGVEYXRhTGlzdCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKCFuZXh0UHJvcHMuYXZhaWxhYmxlRGF0YS5lcXVhbHModGhpcy5wcm9wcy5hdmFpbGFibGVEYXRhKSB8fFxyXG4gICAgIW5leHRQcm9wcy5zZWxlY3RlZERhdGEuZXF1YWxzKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhKSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFMaXN0ID0gVXRpbHMuZ2V0U2VsZWN0ZWREYXRhTGlzdChuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcclxuICAgICAgY29uc3QgYXZhaWxhYmxlRGF0YUxpc3QgPVxyXG4gICAgICAgIFV0aWxzLmdldEF2YWlsYWJsZURhdGFMaXN0KG5leHRQcm9wcy5hdmFpbGFibGVEYXRhLCBuZXh0UHJvcHMuc2VsZWN0ZWREYXRhKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXZhaWxhYmxlRGF0YUxpc3QsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRhTGlzdCxcclxuICAgICAgICB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3Q6IFV0aWxzLmZpbHRlckRhdGEoYXZhaWxhYmxlRGF0YUxpc3QsIHRoaXMuc3RhdGUua2V5d29yZCksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWxsU2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxTZWxlY3RlZCA9ICF0aGlzLnByb3BzLmFsbFNlbGVjdGVkO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gYWxsU2VsZWN0ZWQgPyB0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0IDpcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihkYXRhID0+IGRhdGEuaXNMb2NrZWQgPT09IHRydWUpO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IGFsbFNlbGVjdGVkLCBzZWxlY3RlZERhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXl3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGtleXdvcmQgPSBlO1xyXG4gICAgY29uc3QgdmlzaWJsZUF2YWlsYWJsZURhdGFMaXN0ID0gVXRpbHMuZmlsdGVyRGF0YSh0aGlzLnN0YXRlLmF2YWlsYWJsZURhdGFMaXN0LCBrZXl3b3JkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkLCB2aXNpYmxlQXZhaWxhYmxlRGF0YUxpc3QgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTb3J0Q2hhbmdlID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcclxuICAgIGlmIChuZXdJbmRleCA9PT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gb2xkSW5kZXgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gVXRpbHMuY2hhbmdlRGF0YVNvcnQodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHNlbGVjdGVkRGF0YSwgYWxsU2VsZWN0ZWQ6IHRoaXMucHJvcHMuYWxsU2VsZWN0ZWQgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICBhbGxTZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LnNpemUgKyAxID09PSB0aGlzLnByb3BzLmF2YWlsYWJsZURhdGEuc2l6ZSxcclxuICAgICAgc2VsZWN0ZWREYXRhOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0YUxpc3QucHVzaChpdGVtKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVW5zZWxlY3RJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICBhbGxTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgIHNlbGVjdGVkRGF0YTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGFMaXN0LmZpbHRlcihpID0+IGkudmFsdWUgIT09IGl0ZW0udmFsdWUpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgPyBgb2Mtc2VsZWN0LW9yZGVyLWxpc3QtJHt0aGlzLnByb3BzLmlkfWAgOiAnb2Mtc2VsZWN0LW9yZGVyLWxpc3QnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdyaWQgaWQ9e2lkfSBmbHVpZD5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qta2V5d29yZC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNTZWFyY2hTdGFydHNGcm9tPXsxfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1rZXl3b3JkLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZUtleXdvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQbGFjZUhvbGRlcj17dGhpcy5wcm9wcy5zZWFyY2hQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHRvb2x0aXA9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlYXJjaFRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5rZXl3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hdmFpbGFibGVMaXN0TGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyfT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdC1hbGwtY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5hbGxTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFsbFNlbGVjdGVkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5hbGxMYWJlbH1cclxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnNlbGVjdGVkTGlzdExhYmVsfVxyXG4gICAgICAgICAgICAgIDwvQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8QXZhaWxhYmxlRGF0YUxpc3RcclxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLnZpc2libGVBdmFpbGFibGVEYXRhTGlzdH1cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0SXRlbT17dGhpcy5oYW5kbGVTZWxlY3RJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25VbnNlbGVjdEl0ZW09e3RoaXMuaGFuZGxlVW5zZWxlY3RJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXs2fT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8U2VsZWN0ZWREYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRhTGlzdH1cclxuICAgICAgICAgICAgICAgIG9uU29ydENoYW5nZT17dGhpcy5oYW5kbGVTb3J0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25SZW1vdmVJdGVtPXt0aGlzLmhhbmRsZVVuc2VsZWN0SXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=