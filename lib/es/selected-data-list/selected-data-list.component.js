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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJJY29uIiwiU2Nyb2xsQmFyIiwiU29ydGFibGVDb250YWluZXIiLCJTb3J0YWJsZUVsZW1lbnQiLCJTb3J0YWJsZUl0ZW0iLCJ2YWx1ZSIsImhhbmRsZUl0ZW1SZW1vdmUiLCJoYW5kbGVNb3VzZURvd24iLCJpc0xvY2tlZCIsImxhYmVsIiwiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJtYXAiLCJpbmRleCIsIlNlbGVjdGVkRGF0YUxpc3QiLCJwcm9wcyIsIm9uUmVtb3ZlSXRlbSIsIml0ZW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG91bGRDYW5jZWxTdGFydCIsInRhcmdldCIsImlkIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsImluZGV4T2YiLCJyZW5kZXIiLCJvblNvcnRDaGFuZ2UiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHFDQUF0QjtBQUNBLFNBQ0VDLGlCQURGLEVBRUVDLGVBRkYsUUFHTyxvQkFIUDs7QUFLQSxJQUFNQyxlQUFlRCxnQkFBZ0I7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxnQkFBVixRQUFVQSxnQkFBVjtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUNuQztBQUFBO0FBQUE7QUFDRSxXQUFLRixNQUFNQSxLQURiO0FBRUUsOERBQXFEQSxNQUFNRyxRQUFOLEdBQWlCLFNBQWpCLEdBQTZCLEVBQWxGLENBRkY7QUFHRSxtQkFBYUQ7QUFIZjtBQUtFO0FBQUE7QUFBQSxRQUFNLFdBQVUsOENBQWhCO0FBQ0dGLFlBQU1JO0FBRFQsS0FMRjtBQVFHLEtBQUNKLE1BQU1HLFFBQVAsSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxnQkFGUDtBQUdFLGlCQUFVLG9DQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BVEo7QUFpQkdILFVBQU1HLFFBQU4sSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxRQUZQO0FBR0UsaUJBQVUsa0NBSFo7QUFJRSxhQUFPLEVBSlQ7QUFLRSxjQUFRO0FBTFYsTUFsQko7QUEwQkcsS0FBQ0gsTUFBTUcsUUFBUCxJQUNDLG9CQUFDLElBQUQ7QUFDRSxVQUFHLGdCQURMO0FBRUUsWUFBSyxXQUZQO0FBR0UsWUFBSyxRQUhQO0FBSUUsaUJBQVUsa0NBSlo7QUFLRSxhQUFPLEVBTFQ7QUFNRSxjQUFRLEVBTlY7QUFPRSxlQUFTRjtBQVBYO0FBM0JKLEdBRG1DO0FBQUEsQ0FBaEIsQ0FBckI7O0FBeUNBLElBQU1JLGVBQWVSLGtCQUFrQjtBQUFBLE1BQUdTLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVMLGdCQUFWLFNBQVVBLGdCQUFWO0FBQUEsTUFBNEJDLGVBQTVCLFNBQTRCQSxlQUE1QjtBQUFBLFNBQ3JDO0FBQUE7QUFBQSxNQUFLLFdBQVUseUNBQWY7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNHSSxZQUFNQyxHQUFOLENBQVUsVUFBQ1AsS0FBRCxFQUFRUSxLQUFSO0FBQUEsZUFDVCxvQkFBQyxZQUFEO0FBQ0UsZUFBS1IsTUFBTUEsS0FEYjtBQUVFLGlCQUFPUSxLQUZUO0FBR0UsaUJBQU9SLEtBSFQ7QUFJRSxvQkFBVUEsTUFBTUcsUUFKbEI7QUFLRSw0QkFBa0JGLGlCQUFpQkQsS0FBakIsQ0FMcEI7QUFNRSwyQkFBaUJFO0FBTm5CLFVBRFM7QUFBQSxPQUFWO0FBREg7QUFERixHQURxQztBQUFBLENBQWxCLENBQXJCOztJQWlCcUJPLGdCOzs7Ozs7Ozs7Ozs7Z0tBT25CUixnQixHQUFtQjtBQUFBLGFBQVEsWUFBTTtBQUMvQixjQUFLUyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLElBQXhCO0FBQ0QsT0FGa0I7QUFBQSxLLFFBSW5CVixlLEdBQWtCLFVBQUNXLENBQUQsRUFBTztBQUN2QkEsUUFBRUMsY0FBRjtBQUNELEssUUFFREMsaUIsR0FBb0IsVUFBQ0YsQ0FBRCxFQUFPO0FBQ3pCLFVBQUlBLEVBQUVHLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixnQkFBaEIsSUFBcUNKLEVBQUVHLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsSUFBOEJOLEVBQUVHLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsQ0FBMkJDLE9BQTNCLENBQW1DLGdCQUFuQyxNQUF5RCxDQUFDLENBQWpJLEVBQXFJO0FBQ25JLGVBQU8sSUFBUDtBQUNEO0FBQ0QsYUFBTyxLQUFQO0FBQ0QsSzs7OzZCQUNEQyxNLHFCQUFTO0FBQ1AsV0FDRSxvQkFBQyxZQUFEO0FBQ0Usd0JBQWtCLEtBQUtwQixnQkFEekI7QUFFRSx1QkFBaUIsS0FBS0MsZUFGeEI7QUFHRSxhQUFPLEtBQUtRLEtBQUwsQ0FBV0osS0FIcEI7QUFJRSxpQkFBVyxLQUFLSSxLQUFMLENBQVdZLFlBSnhCO0FBS0UseUJBQW1CLEtBQUtQO0FBTDFCLE1BREY7QUFTRCxHOzs7RUEvQjJDdkIsTUFBTStCLGE7O1NBQS9CZCxnQiIsImZpbGUiOiJzZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQge1xuICBTb3J0YWJsZUNvbnRhaW5lcixcbiAgU29ydGFibGVFbGVtZW50LFxufSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHsgdmFsdWUsIGhhbmRsZUl0ZW1SZW1vdmUsIGhhbmRsZU1vdXNlRG93biB9KSA9PiAoXG4gIDxkaXZcbiAgICBrZXk9e3ZhbHVlLnZhbHVlfVxuICAgIGNsYXNzTmFtZT17YG9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtaXRlbSR7dmFsdWUuaXNMb2NrZWQgPyAnIGxvY2tlZCcgOiAnJ31gfVxuICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0tdGV4dFwiPlxuICAgICAge3ZhbHVlLmxhYmVsfVxuICAgIDwvc3Bhbj5cbiAgICB7IXZhbHVlLmlzTG9ja2VkICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtZHJhZ2dpbmctaWNvblwiXG4gICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgIC8+XG4gICAgfVxuICAgIHt2YWx1ZS5pc0xvY2tlZCAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJsb2NrZWRcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sb2NrZWQtaWNvblwiXG4gICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgIC8+XG4gICAgfVxuICAgIHshdmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIGlkPVwib2MtaWNvbi1yZW1vdmVcIlxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cInJlbW92ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXJlbW92ZS1pY29uXCJcbiAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtUmVtb3ZlfVxuICAgICAgLz5cbiAgICB9XG4gIDwvZGl2PlxuKSk7XG5cbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKCh7IGl0ZW1zLCBoYW5kbGVJdGVtUmVtb3ZlLCBoYW5kbGVNb3VzZURvd24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtbGlzdFwiPlxuICAgIDxTY3JvbGxCYXI+XG4gICAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17dmFsdWUuaXNMb2NrZWR9XG4gICAgICAgICAgaGFuZGxlSXRlbVJlbW92ZT17aGFuZGxlSXRlbVJlbW92ZSh2YWx1ZSl9XG4gICAgICAgICAgaGFuZGxlTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L1Njcm9sbEJhcj5cbiAgPC9kaXY+XG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0ZWREYXRhTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNvcnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgaGFuZGxlSXRlbVJlbW92ZSA9IGl0ZW0gPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25SZW1vdmVJdGVtKGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzaG91bGRDYW5jZWxTdGFydCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnb2MtaWNvbi1yZW1vdmUnIHx8IChlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbCAmJiBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbC5pbmRleE9mKCdvYy1pY29uLXJlbW92ZScpICE9PSAtMSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e3RoaXMuaGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgICAgaGFuZGxlTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG4gICAgICAgIG9uU29ydEVuZD17dGhpcy5wcm9wcy5vblNvcnRDaGFuZ2V9XG4gICAgICAgIHNob3VsZENhbmNlbFN0YXJ0PXt0aGlzLnNob3VsZENhbmNlbFN0YXJ0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=