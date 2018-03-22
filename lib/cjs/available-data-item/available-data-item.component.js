'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

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
      _react2.default.createElement(_reactCheckbox2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEYXRhSXRlbSIsInJlbmRlciIsInByb3BzIiwiaXNMb2NrZWQiLCJpc1NlbGVjdGVkIiwibGFiZWwiLCJoYW5kbGVJdGVtQ2xpY2siLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7OztxQkFjbkJDLE0scUJBQVM7QUFBQSxpQkFNSCxLQUFLQyxLQU5GO0FBQUEsUUFFTEMsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsVUFISyxVQUdMQSxVQUhLO0FBQUEsUUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsUUFLTEMsZUFMSyxVQUtMQSxlQUxLOztBQU9QLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSwwQ0FBZjtBQUNFO0FBQ0UsaUJBQVNGLFVBRFg7QUFFRSxrQkFBVUQsUUFGWjtBQUdFLGtCQUFVRztBQUhaLFFBREY7QUFNRTtBQUFBO0FBQUEsVUFBTSxXQUFVLCtDQUFoQjtBQUNHRDtBQURIO0FBTkYsS0FERjtBQVlELEc7OztFQWpDbUMsZ0JBQU1FLGEsVUFRbkNDLFksR0FBZTtBQUNwQkwsWUFBVSxLQURVO0FBRXBCQyxjQUFZLElBRlE7QUFHcEJDLFNBQU87QUFIYSxDO2tCQVJITCxRIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc0xvY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTG9ja2VkOiBmYWxzZSxcbiAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgIGxhYmVsOiAnJyxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0xvY2tlZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBsYWJlbCxcbiAgICAgIGhhbmRsZUl0ZW1DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtXCI+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9ja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWF2YWlsYWJsZS1kYXRhLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19