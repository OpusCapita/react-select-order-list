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
      handleMouseDown = _ref.handleMouseDown;
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
    !value.isLocked && React.createElement(Icon, {
      id: 'oc-icon-remove',
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
      handleMouseDown = _ref2.handleMouseDown;
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
          handleMouseDown: handleMouseDown
        });
      })
    )
  );
});

var SelectedDataList = function (_React$PureComponent) {
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
      shouldCancelStart: this.shouldCancelStart
    });
  };

  return SelectedDataList;
}(React.PureComponent);

export { SelectedDataList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJJY29uIiwiU2Nyb2xsQmFyIiwiU29ydGFibGVDb250YWluZXIiLCJTb3J0YWJsZUVsZW1lbnQiLCJTb3J0YWJsZUl0ZW0iLCJ2YWx1ZSIsImhhbmRsZUl0ZW1SZW1vdmUiLCJoYW5kbGVNb3VzZURvd24iLCJpc0xvY2tlZCIsImxhYmVsIiwiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJtYXAiLCJpbmRleCIsIlNlbGVjdGVkRGF0YUxpc3QiLCJwcm9wcyIsIm9uUmVtb3ZlSXRlbSIsIml0ZW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG91bGRDYW5jZWxTdGFydCIsInRhcmdldCIsImlkIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsImluZGV4T2YiLCJyZW5kZXIiLCJvblNvcnRDaGFuZ2UiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHFDQUF0QjtBQUNBLFNBQ0VDLGlCQURGLEVBRUVDLGVBRkYsUUFHTyxvQkFIUDs7QUFLQSxJQUFNQyxlQUFlRCxnQkFBZ0I7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxnQkFBVixRQUFVQSxnQkFBVjtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUNuQztBQUFBO0FBQUE7QUFDRSxXQUFLRixNQUFNQSxLQURiO0FBRUUsOERBQXFEQSxNQUFNRyxRQUFOLEdBQWlCLFNBQWpCLEdBQTZCLEVBQWxGLENBRkY7QUFHRSxtQkFBYUQ7QUFIZjtBQUtFO0FBQUE7QUFBQSxRQUFNLFdBQVUsOENBQWhCO0FBQ0dGLFlBQU1JO0FBRFQsS0FMRjtBQVFHLEtBQUNKLE1BQU1HLFFBQVAsSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxnQkFGUDtBQUdFLGlCQUFVLG9DQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BVEo7QUFpQkdILFVBQU1HLFFBQU4sSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxRQUZQO0FBR0UsaUJBQVUsa0NBSFo7QUFJRSxhQUFPLEVBSlQ7QUFLRSxjQUFRO0FBTFYsTUFsQko7QUEwQkcsS0FBQ0gsTUFBTUcsUUFBUCxJQUNDLG9CQUFDLElBQUQ7QUFDRSxVQUFHLGdCQURMO0FBRUUsWUFBSyxXQUZQO0FBR0UsWUFBSyxRQUhQO0FBSUUsaUJBQVUsa0NBSlo7QUFLRSxhQUFPLEVBTFQ7QUFNRSxjQUFRLEVBTlY7QUFPRSxlQUFTRjtBQVBYO0FBM0JKLEdBRG1DO0FBQUEsQ0FBaEIsQ0FBckI7O0FBeUNBLElBQU1JLGVBQWVSLGtCQUFrQjtBQUFBLE1BQUdTLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVMLGdCQUFWLFNBQVVBLGdCQUFWO0FBQUEsTUFBNEJDLGVBQTVCLFNBQTRCQSxlQUE1QjtBQUFBLFNBQ3JDO0FBQUE7QUFBQSxNQUFLLFdBQVUseUNBQWY7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNHSSxZQUFNQyxHQUFOLENBQVUsVUFBQ1AsS0FBRCxFQUFRUSxLQUFSO0FBQUEsZUFDVCxvQkFBQyxZQUFEO0FBQ0UsZUFBS1IsTUFBTUEsS0FEYjtBQUVFLGlCQUFPUSxLQUZUO0FBR0UsaUJBQU9SLEtBSFQ7QUFJRSxvQkFBVUEsTUFBTUcsUUFKbEI7QUFLRSw0QkFBa0JGLGlCQUFpQkQsS0FBakIsQ0FMcEI7QUFNRSwyQkFBaUJFO0FBTm5CLFVBRFM7QUFBQSxPQUFWO0FBREg7QUFERixHQURxQztBQUFBLENBQWxCLENBQXJCOztJQWlCcUJPLGdCOzs7Ozs7Ozs7Ozs7Z0tBT25CUixnQixHQUFtQjtBQUFBLGFBQVEsWUFBTTtBQUMvQixjQUFLUyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLElBQXhCO0FBQ0QsT0FGa0I7QUFBQSxLLFFBSW5CVixlLEdBQWtCLFVBQUNXLENBQUQsRUFBTztBQUN2QkEsUUFBRUMsY0FBRjtBQUNELEssUUFFREMsaUIsR0FBb0IsVUFBQ0YsQ0FBRCxFQUFPO0FBQ3pCLFVBQUlBLEVBQUVHLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixnQkFBaEIsSUFBcUNKLEVBQUVHLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsSUFBOEJOLEVBQUVHLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsQ0FBMkJDLE9BQTNCLENBQW1DLGdCQUFuQyxNQUF5RCxDQUFDLENBQWpJLEVBQXFJO0FBQ25JLGVBQU8sSUFBUDtBQUNEO0FBQ0QsYUFBTyxLQUFQO0FBQ0QsSzs7OzZCQUNEQyxNLHFCQUFTO0FBQ1AsV0FDRSxvQkFBQyxZQUFEO0FBQ0Usd0JBQWtCLEtBQUtwQixnQkFEekI7QUFFRSx1QkFBaUIsS0FBS0MsZUFGeEI7QUFHRSxhQUFPLEtBQUtRLEtBQUwsQ0FBV0osS0FIcEI7QUFJRSxpQkFBVyxLQUFLSSxLQUFMLENBQVdZLFlBSnhCO0FBS0UseUJBQW1CLEtBQUtQO0FBTDFCLE1BREY7QUFTRCxHOzs7RUEvQjJDdkIsTUFBTStCLGE7O1NBQS9CZCxnQiIsImZpbGUiOiJzZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XHJcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xyXG5pbXBvcnQge1xyXG4gIFNvcnRhYmxlQ29udGFpbmVyLFxyXG4gIFNvcnRhYmxlRWxlbWVudCxcclxufSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xyXG5cclxuY29uc3QgU29ydGFibGVJdGVtID0gU29ydGFibGVFbGVtZW50KCh7IHZhbHVlLCBoYW5kbGVJdGVtUmVtb3ZlLCBoYW5kbGVNb3VzZURvd24gfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGtleT17dmFsdWUudmFsdWV9XHJcbiAgICBjbGFzc05hbWU9e2BvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0ke3ZhbHVlLmlzTG9ja2VkID8gJyBsb2NrZWQnIDogJyd9YH1cclxuICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XHJcbiAgPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1pdGVtLXRleHRcIj5cclxuICAgICAge3ZhbHVlLmxhYmVsfVxyXG4gICAgPC9zcGFuPlxyXG4gICAgeyF2YWx1ZS5pc0xvY2tlZCAmJlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxyXG4gICAgICAgIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtZHJhZ2dpbmctaWNvblwiXHJcbiAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgIC8+XHJcbiAgICB9XHJcbiAgICB7dmFsdWUuaXNMb2NrZWQgJiZcclxuICAgICAgPEljb25cclxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcclxuICAgICAgICBuYW1lPVwibG9ja2VkXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sb2NrZWQtaWNvblwiXHJcbiAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgIC8+XHJcbiAgICB9XHJcbiAgICB7IXZhbHVlLmlzTG9ja2VkICYmXHJcbiAgICAgIDxJY29uXHJcbiAgICAgICAgaWQ9XCJvYy1pY29uLXJlbW92ZVwiXHJcbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXHJcbiAgICAgICAgbmFtZT1cInJlbW92ZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtcmVtb3ZlLWljb25cIlxyXG4gICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1SZW1vdmV9XHJcbiAgICAgIC8+XHJcbiAgICB9XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuY29uc3QgU29ydGFibGVMaXN0ID0gU29ydGFibGVDb250YWluZXIoKHsgaXRlbXMsIGhhbmRsZUl0ZW1SZW1vdmUsIGhhbmRsZU1vdXNlRG93biB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWxpc3RcIj5cclxuICAgIDxTY3JvbGxCYXI+XHJcbiAgICAgIHtpdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxTb3J0YWJsZUl0ZW1cclxuICAgICAgICAgIGtleT17dmFsdWUudmFsdWV9XHJcbiAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBkaXNhYmxlZD17dmFsdWUuaXNMb2NrZWR9XHJcbiAgICAgICAgICBoYW5kbGVJdGVtUmVtb3ZlPXtoYW5kbGVJdGVtUmVtb3ZlKHZhbHVlKX1cclxuICAgICAgICAgIGhhbmRsZU1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TY3JvbGxCYXI+XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0ZWREYXRhTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcclxuICAgIG9uUmVtb3ZlSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9O1xyXG5cclxuICBoYW5kbGVJdGVtUmVtb3ZlID0gaXRlbSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlSXRlbShpdGVtKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBzaG91bGRDYW5jZWxTdGFydCA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdvYy1pY29uLXJlbW92ZScgfHwgKGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsICYmIGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsLmluZGV4T2YoJ29jLWljb24tcmVtb3ZlJykgIT09IC0xKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNvcnRhYmxlTGlzdFxyXG4gICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e3RoaXMuaGFuZGxlSXRlbVJlbW92ZX1cclxuICAgICAgICBoYW5kbGVNb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3dufVxyXG4gICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxyXG4gICAgICAgIG9uU29ydEVuZD17dGhpcy5wcm9wcy5vblNvcnRDaGFuZ2V9XHJcbiAgICAgICAgc2hvdWxkQ2FuY2VsU3RhcnQ9e3RoaXMuc2hvdWxkQ2FuY2VsU3RhcnR9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=