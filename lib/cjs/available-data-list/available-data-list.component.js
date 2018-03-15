'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _availableDataItem = require('./../available-data-item/available-data-item.component');

var _availableDataItem2 = _interopRequireDefault(_availableDataItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailableDataList = function (_React$Component) {
  _inherits(AvailableDataList, _React$Component);

  function AvailableDataList() {
    var _temp, _this, _ret;

    _classCallCheck(this, AvailableDataList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleItemClick = function (item) {
      return function () {
        if (item.isSelected) {
          _this.props.onUnselectItem(item);
        } else {
          _this.props.onSelectItem(item);
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AvailableDataList.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-list' },
      _react2.default.createElement(
        _reactPerfectScrollbar2.default,
        null,
        this.props.items.map(function (item) {
          return _react2.default.createElement(_availableDataItem2.default, {
            key: item.value,
            isSelected: item.isSelected,
            isLocked: item.isLocked,
            label: item.label,
            handleItemClick: _this2.handleItemClick(item)
          });
        })
      )
    );
  };

  return AvailableDataList;
}(_react2.default.Component);

exports.default = AvailableDataList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdmFpbGFibGVEYXRhTGlzdCIsImhhbmRsZUl0ZW1DbGljayIsIml0ZW0iLCJpc1NlbGVjdGVkIiwicHJvcHMiLCJvblVuc2VsZWN0SXRlbSIsIm9uU2VsZWN0SXRlbSIsInJlbmRlciIsIml0ZW1zIiwibWFwIiwidmFsdWUiLCJpc0xvY2tlZCIsImxhYmVsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozt3SkFPbkJDLGUsR0FBa0I7QUFBQSxhQUFRLFlBQU07QUFDOUIsWUFBSUMsS0FBS0MsVUFBVCxFQUFxQjtBQUNuQixnQkFBS0MsS0FBTCxDQUFXQyxjQUFYLENBQTBCSCxJQUExQjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFLRSxLQUFMLENBQVdFLFlBQVgsQ0FBd0JKLElBQXhCO0FBQ0Q7QUFDRixPQU5pQjtBQUFBLEs7Ozs4QkFRbEJLLE0scUJBQVM7QUFBQTs7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMENBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLSCxLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCO0FBQUEsaUJBQ3BCO0FBQ0UsaUJBQUtQLEtBQUtRLEtBRFo7QUFFRSx3QkFBWVIsS0FBS0MsVUFGbkI7QUFHRSxzQkFBVUQsS0FBS1MsUUFIakI7QUFJRSxtQkFBT1QsS0FBS1UsS0FKZDtBQUtFLDZCQUFpQixPQUFLWCxlQUFMLENBQXFCQyxJQUFyQjtBQUxuQixZQURvQjtBQUFBLFNBQXJCO0FBREg7QUFERixLQURGO0FBZUQsRzs7O0VBL0I0QyxnQkFBTVcsUzs7a0JBQWhDYixpQiIsImZpbGUiOiJhdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG5pbXBvcnQgRGF0YUl0ZW0gZnJvbSAnLi8uLi9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhaWxhYmxlRGF0YUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0SXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblVuc2VsZWN0SXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVJdGVtQ2xpY2sgPSBpdGVtID0+ICgpID0+IHtcbiAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVW5zZWxlY3RJdGVtKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtYXZhaWxhYmxlLWRhdGEtbGlzdFwiPlxuICAgICAgICA8U2Nyb2xsQmFyPlxuICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxEYXRhSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2l0ZW0uaXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgaXNMb2NrZWQ9e2l0ZW0uaXNMb2NrZWR9XG4gICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrKGl0ZW0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TY3JvbGxCYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=