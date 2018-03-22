var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@opuscapita/react-checkbox';

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

    return React.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-item' },
      React.createElement(Checkbox, {
        checked: isSelected,
        disabled: isLocked,
        onChange: handleItemClick
      }),
      React.createElement(
        'span',
        { className: 'oc-select-order-list-available-data-item-text' },
        label
      )
    );
  };

  return DataItem;
}(React.PureComponent), _class.defaultProps = {
  isLocked: false,
  isSelected: true,
  label: ''
}, _temp);
export { DataItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNoZWNrYm94IiwiRGF0YUl0ZW0iLCJyZW5kZXIiLCJwcm9wcyIsImlzTG9ja2VkIiwiaXNTZWxlY3RlZCIsImxhYmVsIiwiaGFuZGxlSXRlbUNsaWNrIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsNEJBQXJCOztJQUVxQkMsUTs7Ozs7Ozs7O3FCQWNuQkMsTSxxQkFBUztBQUFBLGlCQU1ILEtBQUtDLEtBTkY7QUFBQSxRQUVMQyxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUdMQyxVQUhLLFVBR0xBLFVBSEs7QUFBQSxRQUlMQyxLQUpLLFVBSUxBLEtBSks7QUFBQSxRQUtMQyxlQUxLLFVBS0xBLGVBTEs7O0FBT1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBDQUFmO0FBQ0UsMEJBQUMsUUFBRDtBQUNFLGlCQUFTRixVQURYO0FBRUUsa0JBQVVELFFBRlo7QUFHRSxrQkFBVUc7QUFIWixRQURGO0FBTUU7QUFBQTtBQUFBLFVBQU0sV0FBVSwrQ0FBaEI7QUFDR0Q7QUFESDtBQU5GLEtBREY7QUFZRCxHOzs7RUFqQ21DUixNQUFNVSxhLFVBUW5DQyxZLEdBQWU7QUFDcEJMLFlBQVUsS0FEVTtBQUVwQkMsY0FBWSxJQUZRO0FBR3BCQyxTQUFPO0FBSGEsQztTQVJITCxRIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc0xvY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTG9ja2VkOiBmYWxzZSxcbiAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgIGxhYmVsOiAnJyxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0xvY2tlZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBsYWJlbCxcbiAgICAgIGhhbmRsZUl0ZW1DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtXCI+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9ja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWF2YWlsYWJsZS1kYXRhLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19