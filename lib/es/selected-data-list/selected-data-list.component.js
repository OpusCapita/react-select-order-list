function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Icon } from '@opuscapita/react-icons';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

var SortableItem = SortableElement(function (_ref) {
  var value = _ref.value,
      handleItemRemove = _ref.handleItemRemove;
  return React.createElement(
    'div',
    {
      key: value.value,
      className: 'oc-select-order-list-selected-data-item' + (value.isLocked ? ' locked' : '')
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
      type: 'indicator',
      name: 'remove',
      className: 'oc-select-order-list-remove-icon',
      width: 16,
      height: 16,
      onClick: handleItemRemove
    })
  );
});

var SortableList = SortableContainer(function (_ref2) {
  var items = _ref2.items,
      handleItemRemove = _ref2.handleItemRemove;
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
          handleItemRemove: handleItemRemove(value)
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
    }, _this.shouldCancelStart = function (e) {
      if (e.target.className.baseVal && e.target.className.baseVal.indexOf('oc-icon-remove') !== -1) {
        return true;
      }
      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectedDataList.prototype.render = function render() {
    return React.createElement(SortableList, {
      handleItemRemove: this.handleItemRemove,
      items: this.props.items,
      onSortEnd: this.props.onSortChange,
      shouldCancelStart: this.shouldCancelStart
    });
  };

  return SelectedDataList;
}(React.PureComponent);

export { SelectedDataList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJJY29uIiwiU2Nyb2xsQmFyIiwiU29ydGFibGVDb250YWluZXIiLCJTb3J0YWJsZUVsZW1lbnQiLCJTb3J0YWJsZUl0ZW0iLCJ2YWx1ZSIsImhhbmRsZUl0ZW1SZW1vdmUiLCJpc0xvY2tlZCIsImxhYmVsIiwiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJtYXAiLCJpbmRleCIsIlNlbGVjdGVkRGF0YUxpc3QiLCJwcm9wcyIsIm9uUmVtb3ZlSXRlbSIsIml0ZW0iLCJzaG91bGRDYW5jZWxTdGFydCIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJiYXNlVmFsIiwiaW5kZXhPZiIsInJlbmRlciIsIm9uU29ydENoYW5nZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHFDQUF0QjtBQUNBLFNBQ0VDLGlCQURGLEVBRUVDLGVBRkYsUUFHTyxvQkFIUDs7QUFLQSxJQUFNQyxlQUFlRCxnQkFBZ0I7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxnQkFBVixRQUFVQSxnQkFBVjtBQUFBLFNBQ25DO0FBQUE7QUFBQTtBQUNFLFdBQUtELE1BQU1BLEtBRGI7QUFFRSw4REFBcURBLE1BQU1FLFFBQU4sR0FBaUIsU0FBakIsR0FBNkIsRUFBbEY7QUFGRjtBQUlFO0FBQUE7QUFBQSxRQUFNLFdBQVUsOENBQWhCO0FBQ0dGLFlBQU1HO0FBRFQsS0FKRjtBQU9HLEtBQUNILE1BQU1FLFFBQVAsSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxnQkFGUDtBQUdFLGlCQUFVLG9DQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BUko7QUFnQkdGLFVBQU1FLFFBQU4sSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxRQUZQO0FBR0UsaUJBQVUsa0NBSFo7QUFJRSxhQUFPLEVBSlQ7QUFLRSxjQUFRO0FBTFYsTUFqQko7QUF5QkcsS0FBQ0YsTUFBTUUsUUFBUCxJQUNDLG9CQUFDLElBQUQ7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFLLFFBRlA7QUFHRSxpQkFBVSxrQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVEsRUFMVjtBQU1FLGVBQVNEO0FBTlg7QUExQkosR0FEbUM7QUFBQSxDQUFoQixDQUFyQjs7QUF1Q0EsSUFBTUcsZUFBZVAsa0JBQWtCO0FBQUEsTUFBR1EsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUosZ0JBQVYsU0FBVUEsZ0JBQVY7QUFBQSxTQUNyQztBQUFBO0FBQUEsTUFBSyxXQUFVLHlDQUFmO0FBQ0U7QUFBQyxlQUFEO0FBQUE7QUFDR0ksWUFBTUMsR0FBTixDQUFVLFVBQUNOLEtBQUQsRUFBUU8sS0FBUjtBQUFBLGVBQ1Qsb0JBQUMsWUFBRDtBQUNFLGVBQUtQLE1BQU1BLEtBRGI7QUFFRSxpQkFBT08sS0FGVDtBQUdFLGlCQUFPUCxLQUhUO0FBSUUsb0JBQVVBLE1BQU1FLFFBSmxCO0FBS0UsNEJBQWtCRCxpQkFBaUJELEtBQWpCO0FBTHBCLFVBRFM7QUFBQSxPQUFWO0FBREg7QUFERixHQURxQztBQUFBLENBQWxCLENBQXJCOztJQWdCcUJRLGdCOzs7Ozs7Ozs7Ozs7Z0tBT25CUCxnQixHQUFtQjtBQUFBLGFBQVEsWUFBTTtBQUMvQixjQUFLUSxLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLElBQXhCO0FBQ0QsT0FGa0I7QUFBQSxLLFFBSW5CQyxpQixHQUFvQixVQUFDQyxDQUFELEVBQU87QUFDekIsVUFBSUEsRUFBRUMsTUFBRixDQUFTQyxTQUFULENBQW1CQyxPQUFuQixJQUE4QkgsRUFBRUMsTUFBRixDQUFTQyxTQUFULENBQW1CQyxPQUFuQixDQUEyQkMsT0FBM0IsQ0FBbUMsZ0JBQW5DLE1BQXlELENBQUMsQ0FBNUYsRUFBK0Y7QUFDN0YsZUFBTyxJQUFQO0FBQ0Q7QUFDRCxhQUFPLEtBQVA7QUFDRCxLOzs7NkJBRURDLE0scUJBQVM7QUFDUCxXQUNFLG9CQUFDLFlBQUQ7QUFDRSx3QkFBa0IsS0FBS2pCLGdCQUR6QjtBQUVFLGFBQU8sS0FBS1EsS0FBTCxDQUFXSixLQUZwQjtBQUdFLGlCQUFXLEtBQUtJLEtBQUwsQ0FBV1UsWUFIeEI7QUFJRSx5QkFBbUIsS0FBS1A7QUFKMUIsTUFERjtBQVFELEc7OztFQTNCMkNwQixNQUFNNEIsYTs7U0FBL0JaLGdCIiwiZmlsZSI6InNlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQge1xuICBTb3J0YWJsZUNvbnRhaW5lcixcbiAgU29ydGFibGVFbGVtZW50LFxufSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHsgdmFsdWUsIGhhbmRsZUl0ZW1SZW1vdmUgfSkgPT4gKFxuICA8ZGl2XG4gICAga2V5PXt2YWx1ZS52YWx1ZX1cbiAgICBjbGFzc05hbWU9e2BvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0ke3ZhbHVlLmlzTG9ja2VkID8gJyBsb2NrZWQnIDogJyd9YH1cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtaXRlbS10ZXh0XCI+XG4gICAgICB7dmFsdWUubGFiZWx9XG4gICAgPC9zcGFuPlxuICAgIHshdmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1kcmFnZ2luZy1pY29uXCJcbiAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgLz5cbiAgICB9XG4gICAge3ZhbHVlLmlzTG9ja2VkICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cImxvY2tlZFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxvY2tlZC1pY29uXCJcbiAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgLz5cbiAgICB9XG4gICAgeyF2YWx1ZS5pc0xvY2tlZCAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJyZW1vdmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1yZW1vdmUtaWNvblwiXG4gICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgIC8+XG4gICAgfVxuICA8L2Rpdj5cbikpO1xuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoeyBpdGVtcywgaGFuZGxlSXRlbVJlbW92ZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1saXN0XCI+XG4gICAgPFNjcm9sbEJhcj5cbiAgICAgIHtpdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICA8U29ydGFibGVJdGVtXG4gICAgICAgICAga2V5PXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZS5pc0xvY2tlZH1cbiAgICAgICAgICBoYW5kbGVJdGVtUmVtb3ZlPXtoYW5kbGVJdGVtUmVtb3ZlKHZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvU2Nyb2xsQmFyPlxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RlZERhdGFMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVJdGVtUmVtb3ZlID0gaXRlbSA9PiAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblJlbW92ZUl0ZW0oaXRlbSk7XG4gIH1cblxuICBzaG91bGRDYW5jZWxTdGFydCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsICYmIGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsLmluZGV4T2YoJ29jLWljb24tcmVtb3ZlJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e3RoaXMuaGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG4gICAgICAgIG9uU29ydEVuZD17dGhpcy5wcm9wcy5vblNvcnRDaGFuZ2V9XG4gICAgICAgIHNob3VsZENhbmNlbFN0YXJ0PXt0aGlzLnNob3VsZENhbmNlbFN0YXJ0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=