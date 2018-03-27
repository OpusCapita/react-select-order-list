'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCheckbox = require('@opuscapita/react-checkbox');

var _reactCheckbox2 = _interopRequireDefault(_reactCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataItem = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(DataItem, _React$PureComponent);

  function DataItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, DataItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleKeyPress = function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        _this.props.handleItemClick(true);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        _this.props.handleItemClick(false);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        _this.props.handleItemClick(true);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DataItem.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        isLocked = _props.isLocked,
        isSelected = _props.isSelected,
        label = _props.label,
        handleItemClick = _props.handleItemClick;

    return _react2.default.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-item' },
      _react2.default.createElement(_reactCheckbox2.default, {
        inputRef: function inputRef(ref) {
          _this2.input = ref;
        },
        checked: isSelected,
        disabled: isLocked,
        onChange: handleItemClick,
        onKeyDown: this.handleKeyPress
      }),
      _react2.default.createElement(
        'span',
        { className: 'oc-select-order-list-available-data-item-text' },
        label
      )
    );
  };

  return DataItem;
}(_react2.default.PureComponent), _class.defaultProps = {
  isLocked: false,
  isSelected: true,
  label: ''
}, _temp2);
exports.default = DataItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEYXRhSXRlbSIsImhhbmRsZUtleVByZXNzIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJoYW5kbGVJdGVtQ2xpY2siLCJyZW5kZXIiLCJpc0xvY2tlZCIsImlzU2VsZWN0ZWQiLCJsYWJlbCIsInJlZiIsImlucHV0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Z0tBY25CQyxjLEdBQWlCLFVBQUNDLENBQUQsRUFBTztBQUN0QixVQUFJQSxFQUFFQyxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUN6QkQsVUFBRUUsY0FBRjtBQUNBLGNBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixJQUEzQjtBQUNELE9BSEQsTUFHTyxJQUFJSixFQUFFQyxHQUFGLEtBQVUsU0FBZCxFQUF5QjtBQUM5QkQsVUFBRUUsY0FBRjtBQUNBLGNBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixLQUEzQjtBQUNELE9BSE0sTUFHQSxJQUFJSixFQUFFQyxHQUFGLEtBQVUsS0FBZCxFQUFxQjtBQUMxQkQsVUFBRUUsY0FBRjtBQUNBLGNBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixJQUEzQjtBQUNEO0FBQ0YsSzs7O3FCQUdEQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBTUgsS0FBS0YsS0FORjtBQUFBLFFBRUxHLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBR0xDLFVBSEssVUFHTEEsVUFISztBQUFBLFFBSUxDLEtBSkssVUFJTEEsS0FKSztBQUFBLFFBS0xKLGVBTEssVUFLTEEsZUFMSzs7QUFPUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMENBQWY7QUFDRTtBQUNFLGtCQUFVLGtCQUFDSyxHQUFELEVBQVM7QUFBRSxpQkFBS0MsS0FBTCxHQUFhRCxHQUFiO0FBQW1CLFNBRDFDO0FBRUUsaUJBQVNGLFVBRlg7QUFHRSxrQkFBVUQsUUFIWjtBQUlFLGtCQUFVRixlQUpaO0FBS0UsbUJBQVcsS0FBS0w7QUFMbEIsUUFERjtBQVFFO0FBQUE7QUFBQSxVQUFNLFdBQVUsK0NBQWhCO0FBQ0dTO0FBREg7QUFSRixLQURGO0FBY0QsRzs7O0VBakRtQyxnQkFBTUcsYSxVQVFuQ0MsWSxHQUFlO0FBQ3BCTixZQUFVLEtBRFU7QUFFcEJDLGNBQVksSUFGUTtBQUdwQkMsU0FBTztBQUhhLEM7a0JBUkhWLFEiLCJmaWxlIjoiYXZhaWxhYmxlLWRhdGEtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlSXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzTG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNMb2NrZWQ6IGZhbHNlLFxuICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcnLFxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlSXRlbUNsaWNrKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVJdGVtQ2xpY2soZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUl0ZW1DbGljayh0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0xvY2tlZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBsYWJlbCxcbiAgICAgIGhhbmRsZUl0ZW1DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtXCI+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlucHV0UmVmPXsocmVmKSA9PiB7IHRoaXMuaW5wdXQgPSByZWY7IH19XG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2NrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWF2YWlsYWJsZS1kYXRhLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19