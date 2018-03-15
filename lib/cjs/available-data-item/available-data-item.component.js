'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataItem = (_temp = _class = function (_React$PureComponent) {
  _inherits(DataItem, _React$PureComponent);

  function DataItem() {
    _classCallCheck(this, DataItem);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
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
      _react2.default.createElement(_reactBootstrap.Checkbox, {
        checked: isSelected,
        disabled: isLocked,
        onChange: handleItemClick
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
}, _temp);
exports.default = DataItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEYXRhSXRlbSIsInJlbmRlciIsInByb3BzIiwiaXNMb2NrZWQiLCJpc1NlbGVjdGVkIiwibGFiZWwiLCJoYW5kbGVJdGVtQ2xpY2siLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7cUJBY25CQyxNLHFCQUFTO0FBQUEsaUJBTUgsS0FBS0MsS0FORjtBQUFBLFFBRUxDLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBR0xDLFVBSEssVUFHTEEsVUFISztBQUFBLFFBSUxDLEtBSkssVUFJTEEsS0FKSztBQUFBLFFBS0xDLGVBTEssVUFLTEEsZUFMSzs7QUFPUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMENBQWY7QUFDRTtBQUNFLGlCQUFTRixVQURYO0FBRUUsa0JBQVVELFFBRlo7QUFHRSxrQkFBVUc7QUFIWixRQURGO0FBTUU7QUFBQTtBQUFBLFVBQU0sV0FBVSwrQ0FBaEI7QUFDR0Q7QUFESDtBQU5GLEtBREY7QUFZRCxHOzs7RUFqQ21DLGdCQUFNRSxhLFVBUW5DQyxZLEdBQWU7QUFDcEJMLFlBQVUsS0FEVTtBQUVwQkMsY0FBWSxJQUZRO0FBR3BCQyxTQUFPO0FBSGEsQztrQkFSSEwsUSIsImZpbGUiOiJhdmFpbGFibGUtZGF0YS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGhhbmRsZUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGlzTG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaXNMb2NrZWQ6IGZhbHNlLFxyXG4gICAgaXNTZWxlY3RlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiAnJyxcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaXNMb2NrZWQsXHJcbiAgICAgIGlzU2VsZWN0ZWQsXHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBoYW5kbGVJdGVtQ2xpY2ssXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtYXZhaWxhYmxlLWRhdGEtaXRlbVwiPlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvY2tlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtLXRleHRcIj5cclxuICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19