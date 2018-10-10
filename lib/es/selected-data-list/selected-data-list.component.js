var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Icon } from '@opuscapita/react-icons';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

var SortableItem = SortableElement(function (_ref) {
  var value = _ref.value,
      handleItemRemove = _ref.handleItemRemove,
      handleMouseDown = _ref.handleMouseDown,
      showRemoveIcon = _ref.showRemoveIcon;
  return React.createElement(
    'div',
    {
      key: value.value,
      className: 'oc-select-order-list-selected-data-item' + (value.isLocked ? ' locked' : ''),
      onMouseDown: handleMouseDown
    },
    React.createElement(
      'span',
      { className: 'oc-select-order-list-selected-data-item-text' },
      value.label
    ),
    !value.isLocked && React.createElement(Icon, {
      type: 'indicator',
      name: 'draggingArrows',
      className: 'oc-select-order-list-dragging-icon',
      width: 20,
      height: 20
    }),
    value.isLocked && React.createElement(Icon, {
      type: 'indicator',
      name: 'locked',
      className: 'oc-select-order-list-locked-icon',
      width: 30,
      height: 30
    }),
    !value.isLocked && showRemoveIcon && React.createElement(Icon, {
      type: 'indicator',
      name: 'remove',
      className: 'oc-select-order-list-remove-icon',
      width: 20,
      height: 20,
      onClick: handleItemRemove
    })
  );
});

var SortableList = SortableContainer(function (_ref2) {
  var items = _ref2.items,
      handleItemRemove = _ref2.handleItemRemove,
      handleMouseDown = _ref2.handleMouseDown,
      showRemoveIcon = _ref2.showRemoveIcon;
  return React.createElement(
    'div',
    { className: 'oc-select-order-list-selected-data-list' },
    React.createElement(
      ScrollBar,
      null,
      items.map(function (value, index) {
        return React.createElement(SortableItem, {
          key: value.value,
          index: index,
          value: value,
          disabled: value.isLocked,
          handleItemRemove: handleItemRemove(value),
          handleMouseDown: handleMouseDown,
          showRemoveIcon: showRemoveIcon
        });
      })
    )
  );
});

var SelectedDataList = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(SelectedDataList, _React$PureComponent);

  function SelectedDataList() {
    var _temp, _this, _ret;

    _classCallCheck(this, SelectedDataList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleItemRemove = function (item) {
      return function () {
        _this.props.onRemoveItem(item);
      };
    }, _this.handleMouseDown = function (e) {
      e.preventDefault();
    }, _this.shouldCancelStart = function (e) {
      if (e.target.id === 'oc-icon-remove' || e.target.className.baseVal && e.target.className.baseVal.indexOf('oc-icon-remove') !== -1) {
        return true;
      }
      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectedDataList.prototype.render = function render() {
    return React.createElement(SortableList, {
      handleItemRemove: this.handleItemRemove,
      handleMouseDown: this.handleMouseDown,
      items: this.props.items,
      onSortEnd: this.props.onSortChange,
      shouldCancelStart: this.shouldCancelStart,
      showRemoveIcon: this.props.showRemoveIcon
    });
  };

  return SelectedDataList;
}(React.PureComponent), _class.defaultProps = {
  showRemoveIcon: true
}, _temp2);
export { SelectedDataList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJJY29uIiwiU2Nyb2xsQmFyIiwiU29ydGFibGVDb250YWluZXIiLCJTb3J0YWJsZUVsZW1lbnQiLCJTb3J0YWJsZUl0ZW0iLCJ2YWx1ZSIsImhhbmRsZUl0ZW1SZW1vdmUiLCJoYW5kbGVNb3VzZURvd24iLCJzaG93UmVtb3ZlSWNvbiIsImlzTG9ja2VkIiwibGFiZWwiLCJTb3J0YWJsZUxpc3QiLCJpdGVtcyIsIm1hcCIsImluZGV4IiwiU2VsZWN0ZWREYXRhTGlzdCIsInByb3BzIiwib25SZW1vdmVJdGVtIiwiaXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3VsZENhbmNlbFN0YXJ0IiwidGFyZ2V0IiwiaWQiLCJjbGFzc05hbWUiLCJiYXNlVmFsIiwiaW5kZXhPZiIsInJlbmRlciIsIm9uU29ydENoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLDJCQUEvQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixxQ0FBdEI7QUFDQSxTQUNFQyxpQkFERixFQUVFQyxlQUZGLFFBR08sb0JBSFA7O0FBS0EsSUFBTUMsZUFBZUQsZ0JBQWdCO0FBQUEsTUFDbkNFLEtBRG1DLFFBQ25DQSxLQURtQztBQUFBLE1BQzVCQyxnQkFENEIsUUFDNUJBLGdCQUQ0QjtBQUFBLE1BQ1ZDLGVBRFUsUUFDVkEsZUFEVTtBQUFBLE1BQ09DLGNBRFAsUUFDT0EsY0FEUDtBQUFBLFNBR25DO0FBQUE7QUFBQTtBQUNF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bGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0IHtcbiAgU29ydGFibGVDb250YWluZXIsXG4gIFNvcnRhYmxlRWxlbWVudCxcbn0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcblxuY29uc3QgU29ydGFibGVJdGVtID0gU29ydGFibGVFbGVtZW50KCh7XG4gIHZhbHVlLCBoYW5kbGVJdGVtUmVtb3ZlLCBoYW5kbGVNb3VzZURvd24sIHNob3dSZW1vdmVJY29uLFxufSkgPT4gKFxuICA8ZGl2XG4gICAga2V5PXt2YWx1ZS52YWx1ZX1cbiAgICBjbGFzc05hbWU9e2BvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0ke3ZhbHVlLmlzTG9ja2VkID8gJyBsb2NrZWQnIDogJyd9YH1cbiAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1pdGVtLXRleHRcIj5cbiAgICAgIHt2YWx1ZS5sYWJlbH1cbiAgICA8L3NwYW4+XG4gICAgeyF2YWx1ZS5pc0xvY2tlZCAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWRyYWdnaW5nLWljb25cIlxuICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgIGhlaWdodD17MjB9XG4gICAgICAvPlxuICAgIH1cbiAgICB7dmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPVwibG9ja2VkXCJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbG9ja2VkLWljb25cIlxuICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgIGhlaWdodD17MzB9XG4gICAgICAvPlxuICAgIH1cbiAgICB7IXZhbHVlLmlzTG9ja2VkICYmIHNob3dSZW1vdmVJY29uICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cInJlbW92ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXJlbW92ZS1pY29uXCJcbiAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtUmVtb3ZlfVxuICAgICAgLz5cbiAgICB9XG4gIDwvZGl2PlxuKSk7XG5cbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKCh7XG4gIGl0ZW1zLCBoYW5kbGVJdGVtUmVtb3ZlLCBoYW5kbGVNb3VzZURvd24sIHNob3dSZW1vdmVJY29uLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtbGlzdFwiPlxuICAgIDxTY3JvbGxCYXI+XG4gICAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17dmFsdWUuaXNMb2NrZWR9XG4gICAgICAgICAgaGFuZGxlSXRlbVJlbW92ZT17aGFuZGxlSXRlbVJlbW92ZSh2YWx1ZSl9XG4gICAgICAgICAgaGFuZGxlTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgc2hvd1JlbW92ZUljb249e3Nob3dSZW1vdmVJY29ufVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9TY3JvbGxCYXI+XG4gIDwvZGl2PlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGVkRGF0YUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Tb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNob3dSZW1vdmVJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxuICB9XG5cbiAgaGFuZGxlSXRlbVJlbW92ZSA9IGl0ZW0gPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25SZW1vdmVJdGVtKGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzaG91bGRDYW5jZWxTdGFydCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnb2MtaWNvbi1yZW1vdmUnIHx8IChlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbCAmJiBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbC5pbmRleE9mKCdvYy1pY29uLXJlbW92ZScpICE9PSAtMSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e3RoaXMuaGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgICAgaGFuZGxlTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG4gICAgICAgIG9uU29ydEVuZD17dGhpcy5wcm9wcy5vblNvcnRDaGFuZ2V9XG4gICAgICAgIHNob3VsZENhbmNlbFN0YXJ0PXt0aGlzLnNob3VsZENhbmNlbFN0YXJ0fVxuICAgICAgICBzaG93UmVtb3ZlSWNvbj17dGhpcy5wcm9wcy5zaG93UmVtb3ZlSWNvbn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19