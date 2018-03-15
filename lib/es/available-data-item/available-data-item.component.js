var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNoZWNrYm94IiwiRGF0YUl0ZW0iLCJyZW5kZXIiLCJwcm9wcyIsImlzTG9ja2VkIiwiaXNTZWxlY3RlZCIsImxhYmVsIiwiaGFuZGxlSXRlbUNsaWNrIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCOztJQUVxQkMsUTs7Ozs7Ozs7O3FCQWNuQkMsTSxxQkFBUztBQUFBLGlCQU1ILEtBQUtDLEtBTkY7QUFBQSxRQUVMQyxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUdMQyxVQUhLLFVBR0xBLFVBSEs7QUFBQSxRQUlMQyxLQUpLLFVBSUxBLEtBSks7QUFBQSxRQUtMQyxlQUxLLFVBS0xBLGVBTEs7O0FBT1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBDQUFmO0FBQ0UsMEJBQUMsUUFBRDtBQUNFLGlCQUFTRixVQURYO0FBRUUsa0JBQVVELFFBRlo7QUFHRSxrQkFBVUc7QUFIWixRQURGO0FBTUU7QUFBQTtBQUFBLFVBQU0sV0FBVSwrQ0FBaEI7QUFDR0Q7QUFESDtBQU5GLEtBREY7QUFZRCxHOzs7RUFqQ21DUixNQUFNVSxhLFVBUW5DQyxZLEdBQWU7QUFDcEJMLFlBQVUsS0FEVTtBQUVwQkMsY0FBWSxJQUZRO0FBR3BCQyxTQUFPO0FBSGEsQztTQVJITCxRIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgaGFuZGxlSXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaXNMb2NrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBpc0xvY2tlZDogZmFsc2UsXHJcbiAgICBpc1NlbGVjdGVkOiB0cnVlLFxyXG4gICAgbGFiZWw6ICcnLFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpc0xvY2tlZCxcclxuICAgICAgaXNTZWxlY3RlZCxcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIGhhbmRsZUl0ZW1DbGljayxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtXCI+XHJcbiAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9ja2VkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWF2YWlsYWJsZS1kYXRhLWl0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=