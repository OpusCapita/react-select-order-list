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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getCheckboxRef = function (element) {
      _this.checkbox = element;
    }, _this.getSpanRef = function (element) {
      _this.span = element;
    }, _this.handleKeyPress = function (e) {
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
    var _props = this.props,
        isLocked = _props.isLocked,
        isSelected = _props.isSelected,
        label = _props.label,
        handleItemClick = _props.handleItemClick;

    return _react2.default.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-item' },
      _react2.default.createElement(_reactCheckbox2.default, {
        inputRef: this.getCheckboxRef,
        checked: isSelected,
        disabled: isLocked,
        onChange: handleItemClick,
        onKeyDown: this.handleKeyPress
      }),
      _react2.default.createElement(
        'span',
        {
          className: 'oc-select-order-list-available-data-item-text',
          ref: this.getSpanRef
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEYXRhSXRlbSIsImdldENoZWNrYm94UmVmIiwiZWxlbWVudCIsImNoZWNrYm94IiwiZ2V0U3BhblJlZiIsInNwYW4iLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiaGFuZGxlSXRlbUNsaWNrIiwicmVuZGVyIiwiaXNMb2NrZWQiLCJpc1NlbGVjdGVkIiwibGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7OztnS0FjbkJDLGMsR0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQUUsWUFBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFBMEIsSyxRQUUxREUsVSxHQUFhLFVBQUNGLE9BQUQsRUFBYTtBQUFFLFlBQUtHLElBQUwsR0FBWUgsT0FBWjtBQUFzQixLLFFBRWxESSxjLEdBQWlCLFVBQUNDLENBQUQsRUFBTztBQUN0QixVQUFJQSxFQUFFQyxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUN6QkQsVUFBRUUsY0FBRjtBQUNBLGNBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixJQUEzQjtBQUNELE9BSEQsTUFHTyxJQUFJSixFQUFFQyxHQUFGLEtBQVUsU0FBZCxFQUF5QjtBQUM5QkQsVUFBRUUsY0FBRjtBQUNBLGNBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixLQUEzQjtBQUNELE9BSE0sTUFHQSxJQUFJSixFQUFFQyxHQUFGLEtBQVUsS0FBZCxFQUFxQjtBQUMxQkQsVUFBRUUsY0FBRjtBQUNBLGNBQUtDLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixJQUEzQjtBQUNEO0FBQ0YsSzs7O3FCQUVEQyxNLHFCQUFTO0FBQUEsaUJBTUgsS0FBS0YsS0FORjtBQUFBLFFBRUxHLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBR0xDLFVBSEssVUFHTEEsVUFISztBQUFBLFFBSUxDLEtBSkssVUFJTEEsS0FKSztBQUFBLFFBS0xKLGVBTEssVUFLTEEsZUFMSzs7QUFPUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMENBQWY7QUFDRTtBQUNFLGtCQUFVLEtBQUtWLGNBRGpCO0FBRUUsaUJBQVNhLFVBRlg7QUFHRSxrQkFBVUQsUUFIWjtBQUlFLGtCQUFVRixlQUpaO0FBS0UsbUJBQVcsS0FBS0w7QUFMbEIsUUFERjtBQVFFO0FBQUE7QUFBQTtBQUNFLHFCQUFVLCtDQURaO0FBRUUsZUFBSyxLQUFLRjtBQUZaO0FBSUdXO0FBSkg7QUFSRixLQURGO0FBaUJELEc7OztFQXZEbUMsZ0JBQU1DLGEsVUFRbkNDLFksR0FBZTtBQUNwQkosWUFBVSxLQURVO0FBRXBCQyxjQUFZLElBRlE7QUFHcEJDLFNBQU87QUFIYSxDO2tCQVJIZixRIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc0xvY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTG9ja2VkOiBmYWxzZSxcbiAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgIGxhYmVsOiAnJyxcbiAgfVxuXG4gIGdldENoZWNrYm94UmVmID0gKGVsZW1lbnQpID0+IHsgdGhpcy5jaGVja2JveCA9IGVsZW1lbnQ7IH1cblxuICBnZXRTcGFuUmVmID0gKGVsZW1lbnQpID0+IHsgdGhpcy5zcGFuID0gZWxlbWVudDsgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUl0ZW1DbGljayh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlSXRlbUNsaWNrKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVJdGVtQ2xpY2sodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzTG9ja2VkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGxhYmVsLFxuICAgICAgaGFuZGxlSXRlbUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWF2YWlsYWJsZS1kYXRhLWl0ZW1cIj5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaW5wdXRSZWY9e3RoaXMuZ2V0Q2hlY2tib3hSZWZ9XG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2NrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtYXZhaWxhYmxlLWRhdGEtaXRlbS10ZXh0XCJcbiAgICAgICAgICByZWY9e3RoaXMuZ2V0U3BhblJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19