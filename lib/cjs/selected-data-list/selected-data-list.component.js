'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactIcons = require('@opuscapita/react-icons');

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _reactSortableHoc = require('react-sortable-hoc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions */


var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {
  var value = _ref.value,
      handleItemRemove = _ref.handleItemRemove,
      handleMouseDown = _ref.handleMouseDown;
  return _react2.default.createElement(
    'div',
    {
      key: value.value,
      className: 'oc-select-order-list-selected-data-item' + (value.isLocked ? ' locked' : ''),
      onMouseDown: handleMouseDown
    },
    _react2.default.createElement(
      'span',
      { className: 'oc-select-order-list-selected-data-item-text' },
      value.label
    ),
    !value.isLocked && _react2.default.createElement(_reactIcons.Icon, {
      type: 'indicator',
      name: 'draggingArrows',
      className: 'oc-select-order-list-dragging-icon',
      width: 20,
      height: 20
    }),
    value.isLocked && _react2.default.createElement(_reactIcons.Icon, {
      type: 'indicator',
      name: 'locked',
      className: 'oc-select-order-list-locked-icon',
      width: 30,
      height: 30
    }),
    !value.isLocked && _react2.default.createElement(_reactIcons.Icon, {
      type: 'indicator',
      name: 'remove',
      className: 'oc-select-order-list-remove-icon',
      width: 20,
      height: 20,
      onClick: handleItemRemove
    })
  );
});

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
  var items = _ref2.items,
      handleItemRemove = _ref2.handleItemRemove,
      handleMouseDown = _ref2.handleMouseDown;
  return _react2.default.createElement(
    'div',
    { className: 'oc-select-order-list-selected-data-list' },
    _react2.default.createElement(
      _reactPerfectScrollbar2.default,
      null,
      items.map(function (value, index) {
        return _react2.default.createElement(SortableItem, {
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
    return _react2.default.createElement(SortableList, {
      handleItemRemove: this.handleItemRemove,
      handleMouseDown: this.handleMouseDown,
      items: this.props.items,
      onSortEnd: this.props.onSortChange,
      shouldCancelStart: this.shouldCancelStart
    });
  };

  return SelectedDataList;
}(_react2.default.PureComponent);

exports.default = SelectedDataList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiU29ydGFibGVJdGVtIiwidmFsdWUiLCJoYW5kbGVJdGVtUmVtb3ZlIiwiaGFuZGxlTW91c2VEb3duIiwiaXNMb2NrZWQiLCJsYWJlbCIsIlNvcnRhYmxlTGlzdCIsIml0ZW1zIiwibWFwIiwiaW5kZXgiLCJTZWxlY3RlZERhdGFMaXN0IiwicHJvcHMiLCJvblJlbW92ZUl0ZW0iLCJpdGVtIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2hvdWxkQ2FuY2VsU3RhcnQiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsImJhc2VWYWwiLCJpbmRleE9mIiwicmVuZGVyIiwib25Tb3J0Q2hhbmdlIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OzsrZUFOQTs7O0FBV0EsSUFBTUEsZUFBZSx1Q0FBZ0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxnQkFBVixRQUFVQSxnQkFBVjtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUNuQztBQUFBO0FBQUE7QUFDRSxXQUFLRixNQUFNQSxLQURiO0FBRUUsOERBQXFEQSxNQUFNRyxRQUFOLEdBQWlCLFNBQWpCLEdBQTZCLEVBQWxGLENBRkY7QUFHRSxtQkFBYUQ7QUFIZjtBQUtFO0FBQUE7QUFBQSxRQUFNLFdBQVUsOENBQWhCO0FBQ0dGLFlBQU1JO0FBRFQsS0FMRjtBQVFHLEtBQUNKLE1BQU1HLFFBQVAsSUFDQztBQUNFLFlBQUssV0FEUDtBQUVFLFlBQUssZ0JBRlA7QUFHRSxpQkFBVSxvQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVE7QUFMVixNQVRKO0FBaUJHSCxVQUFNRyxRQUFOLElBQ0M7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFLLFFBRlA7QUFHRSxpQkFBVSxrQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVE7QUFMVixNQWxCSjtBQTBCRyxLQUFDSCxNQUFNRyxRQUFQLElBQ0M7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFLLFFBRlA7QUFHRSxpQkFBVSxrQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVEsRUFMVjtBQU1FLGVBQVNGO0FBTlg7QUEzQkosR0FEbUM7QUFBQSxDQUFoQixDQUFyQjs7QUF3Q0EsSUFBTUksZUFBZSx5Q0FBa0I7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVTCxnQkFBVixTQUFVQSxnQkFBVjtBQUFBLE1BQTRCQyxlQUE1QixTQUE0QkEsZUFBNUI7QUFBQSxTQUNyQztBQUFBO0FBQUEsTUFBSyxXQUFVLHlDQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0dJLFlBQU1DLEdBQU4sQ0FBVSxVQUFDUCxLQUFELEVBQVFRLEtBQVI7QUFBQSxlQUNULDhCQUFDLFlBQUQ7QUFDRSxlQUFLUixNQUFNQSxLQURiO0FBRUUsaUJBQU9RLEtBRlQ7QUFHRSxpQkFBT1IsS0FIVDtBQUlFLG9CQUFVQSxNQUFNRyxRQUpsQjtBQUtFLDRCQUFrQkYsaUJBQWlCRCxLQUFqQixDQUxwQjtBQU1FLDJCQUFpQkU7QUFObkIsVUFEUztBQUFBLE9BQVY7QUFESDtBQURGLEdBRHFDO0FBQUEsQ0FBbEIsQ0FBckI7O0lBaUJxQk8sZ0I7Ozs7Ozs7Ozs7OztnS0FPbkJSLGdCLEdBQW1CO0FBQUEsYUFBUSxZQUFNO0FBQy9CLGNBQUtTLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkMsSUFBeEI7QUFDRCxPQUZrQjtBQUFBLEssUUFJbkJWLGUsR0FBa0IsVUFBQ1csQ0FBRCxFQUFPO0FBQ3ZCQSxRQUFFQyxjQUFGO0FBQ0QsSyxRQUVEQyxpQixHQUFvQixVQUFDRixDQUFELEVBQU87QUFDekIsVUFBSUEsRUFBRUcsTUFBRixDQUFTQyxFQUFULEtBQWdCLGdCQUFoQixJQUFxQ0osRUFBRUcsTUFBRixDQUFTRSxTQUFULENBQW1CQyxPQUFuQixJQUE4Qk4sRUFBRUcsTUFBRixDQUFTRSxTQUFULENBQW1CQyxPQUFuQixDQUEyQkMsT0FBM0IsQ0FBbUMsZ0JBQW5DLE1BQXlELENBQUMsQ0FBakksRUFBcUk7QUFDbkksZUFBTyxJQUFQO0FBQ0Q7QUFDRCxhQUFPLEtBQVA7QUFDRCxLOzs7NkJBQ0RDLE0scUJBQVM7QUFDUCxXQUNFLDhCQUFDLFlBQUQ7QUFDRSx3QkFBa0IsS0FBS3BCLGdCQUR6QjtBQUVFLHVCQUFpQixLQUFLQyxlQUZ4QjtBQUdFLGFBQU8sS0FBS1EsS0FBTCxDQUFXSixLQUhwQjtBQUlFLGlCQUFXLEtBQUtJLEtBQUwsQ0FBV1ksWUFKeEI7QUFLRSx5QkFBbUIsS0FBS1A7QUFMMUIsTUFERjtBQVNELEc7OztFQS9CMkMsZ0JBQU1RLGE7O2tCQUEvQmQsZ0IiLCJmaWxlIjoic2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0IHtcbiAgU29ydGFibGVDb250YWluZXIsXG4gIFNvcnRhYmxlRWxlbWVudCxcbn0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcblxuY29uc3QgU29ydGFibGVJdGVtID0gU29ydGFibGVFbGVtZW50KCh7IHZhbHVlLCBoYW5kbGVJdGVtUmVtb3ZlLCBoYW5kbGVNb3VzZURvd24gfSkgPT4gKFxuICA8ZGl2XG4gICAga2V5PXt2YWx1ZS52YWx1ZX1cbiAgICBjbGFzc05hbWU9e2BvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0ke3ZhbHVlLmlzTG9ja2VkID8gJyBsb2NrZWQnIDogJyd9YH1cbiAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1pdGVtLXRleHRcIj5cbiAgICAgIHt2YWx1ZS5sYWJlbH1cbiAgICA8L3NwYW4+XG4gICAgeyF2YWx1ZS5pc0xvY2tlZCAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWRyYWdnaW5nLWljb25cIlxuICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgIGhlaWdodD17MjB9XG4gICAgICAvPlxuICAgIH1cbiAgICB7dmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPVwibG9ja2VkXCJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtbG9ja2VkLWljb25cIlxuICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgIGhlaWdodD17MzB9XG4gICAgICAvPlxuICAgIH1cbiAgICB7IXZhbHVlLmlzTG9ja2VkICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cInJlbW92ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXJlbW92ZS1pY29uXCJcbiAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtUmVtb3ZlfVxuICAgICAgLz5cbiAgICB9XG4gIDwvZGl2PlxuKSk7XG5cbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKCh7IGl0ZW1zLCBoYW5kbGVJdGVtUmVtb3ZlLCBoYW5kbGVNb3VzZURvd24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtbGlzdFwiPlxuICAgIDxTY3JvbGxCYXI+XG4gICAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17dmFsdWUuaXNMb2NrZWR9XG4gICAgICAgICAgaGFuZGxlSXRlbVJlbW92ZT17aGFuZGxlSXRlbVJlbW92ZSh2YWx1ZSl9XG4gICAgICAgICAgaGFuZGxlTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L1Njcm9sbEJhcj5cbiAgPC9kaXY+XG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0ZWREYXRhTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNvcnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgaGFuZGxlSXRlbVJlbW92ZSA9IGl0ZW0gPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25SZW1vdmVJdGVtKGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzaG91bGRDYW5jZWxTdGFydCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnb2MtaWNvbi1yZW1vdmUnIHx8IChlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbCAmJiBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbC5pbmRleE9mKCdvYy1pY29uLXJlbW92ZScpICE9PSAtMSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e3RoaXMuaGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgICAgaGFuZGxlTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG4gICAgICAgIG9uU29ydEVuZD17dGhpcy5wcm9wcy5vblNvcnRDaGFuZ2V9XG4gICAgICAgIHNob3VsZENhbmNlbFN0YXJ0PXt0aGlzLnNob3VsZENhbmNlbFN0YXJ0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=