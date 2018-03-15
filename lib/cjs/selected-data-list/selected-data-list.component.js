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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiU29ydGFibGVJdGVtIiwidmFsdWUiLCJoYW5kbGVJdGVtUmVtb3ZlIiwiaGFuZGxlTW91c2VEb3duIiwiaXNMb2NrZWQiLCJsYWJlbCIsIlNvcnRhYmxlTGlzdCIsIml0ZW1zIiwibWFwIiwiaW5kZXgiLCJTZWxlY3RlZERhdGFMaXN0IiwicHJvcHMiLCJvblJlbW92ZUl0ZW0iLCJpdGVtIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2hvdWxkQ2FuY2VsU3RhcnQiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsImJhc2VWYWwiLCJpbmRleE9mIiwicmVuZGVyIiwib25Tb3J0Q2hhbmdlIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OzsrZUFOQTs7O0FBV0EsSUFBTUEsZUFBZSx1Q0FBZ0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxnQkFBVixRQUFVQSxnQkFBVjtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUNuQztBQUFBO0FBQUE7QUFDRSxXQUFLRixNQUFNQSxLQURiO0FBRUUsOERBQXFEQSxNQUFNRyxRQUFOLEdBQWlCLFNBQWpCLEdBQTZCLEVBQWxGLENBRkY7QUFHRSxtQkFBYUQ7QUFIZjtBQUtFO0FBQUE7QUFBQSxRQUFNLFdBQVUsOENBQWhCO0FBQ0dGLFlBQU1JO0FBRFQsS0FMRjtBQVFHLEtBQUNKLE1BQU1HLFFBQVAsSUFDQztBQUNFLFlBQUssV0FEUDtBQUVFLFlBQUssZ0JBRlA7QUFHRSxpQkFBVSxvQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVE7QUFMVixNQVRKO0FBaUJHSCxVQUFNRyxRQUFOLElBQ0M7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFLLFFBRlA7QUFHRSxpQkFBVSxrQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVE7QUFMVixNQWxCSjtBQTBCRyxLQUFDSCxNQUFNRyxRQUFQLElBQ0M7QUFDRSxVQUFHLGdCQURMO0FBRUUsWUFBSyxXQUZQO0FBR0UsWUFBSyxRQUhQO0FBSUUsaUJBQVUsa0NBSlo7QUFLRSxhQUFPLEVBTFQ7QUFNRSxjQUFRLEVBTlY7QUFPRSxlQUFTRjtBQVBYO0FBM0JKLEdBRG1DO0FBQUEsQ0FBaEIsQ0FBckI7O0FBeUNBLElBQU1JLGVBQWUseUNBQWtCO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUwsZ0JBQVYsU0FBVUEsZ0JBQVY7QUFBQSxNQUE0QkMsZUFBNUIsU0FBNEJBLGVBQTVCO0FBQUEsU0FDckM7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHSSxZQUFNQyxHQUFOLENBQVUsVUFBQ1AsS0FBRCxFQUFRUSxLQUFSO0FBQUEsZUFDVCw4QkFBQyxZQUFEO0FBQ0UsZUFBS1IsTUFBTUEsS0FEYjtBQUVFLGlCQUFPUSxLQUZUO0FBR0UsaUJBQU9SLEtBSFQ7QUFJRSxvQkFBVUEsTUFBTUcsUUFKbEI7QUFLRSw0QkFBa0JGLGlCQUFpQkQsS0FBakIsQ0FMcEI7QUFNRSwyQkFBaUJFO0FBTm5CLFVBRFM7QUFBQSxPQUFWO0FBREg7QUFERixHQURxQztBQUFBLENBQWxCLENBQXJCOztJQWlCcUJPLGdCOzs7Ozs7Ozs7Ozs7Z0tBT25CUixnQixHQUFtQjtBQUFBLGFBQVEsWUFBTTtBQUMvQixjQUFLUyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLElBQXhCO0FBQ0QsT0FGa0I7QUFBQSxLLFFBSW5CVixlLEdBQWtCLFVBQUNXLENBQUQsRUFBTztBQUN2QkEsUUFBRUMsY0FBRjtBQUNELEssUUFFREMsaUIsR0FBb0IsVUFBQ0YsQ0FBRCxFQUFPO0FBQ3pCLFVBQUlBLEVBQUVHLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQixnQkFBaEIsSUFBcUNKLEVBQUVHLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsSUFBOEJOLEVBQUVHLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsQ0FBMkJDLE9BQTNCLENBQW1DLGdCQUFuQyxNQUF5RCxDQUFDLENBQWpJLEVBQXFJO0FBQ25JLGVBQU8sSUFBUDtBQUNEO0FBQ0QsYUFBTyxLQUFQO0FBQ0QsSzs7OzZCQUNEQyxNLHFCQUFTO0FBQ1AsV0FDRSw4QkFBQyxZQUFEO0FBQ0Usd0JBQWtCLEtBQUtwQixnQkFEekI7QUFFRSx1QkFBaUIsS0FBS0MsZUFGeEI7QUFHRSxhQUFPLEtBQUtRLEtBQUwsQ0FBV0osS0FIcEI7QUFJRSxpQkFBVyxLQUFLSSxLQUFMLENBQVdZLFlBSnhCO0FBS0UseUJBQW1CLEtBQUtQO0FBTDFCLE1BREY7QUFTRCxHOzs7RUEvQjJDLGdCQUFNUSxhOztrQkFBL0JkLGdCIiwiZmlsZSI6InNlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcclxuaW1wb3J0IFNjcm9sbEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XHJcbmltcG9ydCB7XHJcbiAgU29ydGFibGVDb250YWluZXIsXHJcbiAgU29ydGFibGVFbGVtZW50LFxyXG59IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XHJcblxyXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHsgdmFsdWUsIGhhbmRsZUl0ZW1SZW1vdmUsIGhhbmRsZU1vdXNlRG93biB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAga2V5PXt2YWx1ZS52YWx1ZX1cclxuICAgIGNsYXNzTmFtZT17YG9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtaXRlbSR7dmFsdWUuaXNMb2NrZWQgPyAnIGxvY2tlZCcgOiAnJ31gfVxyXG4gICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cclxuICA+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0tdGV4dFwiPlxyXG4gICAgICB7dmFsdWUubGFiZWx9XHJcbiAgICA8L3NwYW4+XHJcbiAgICB7IXZhbHVlLmlzTG9ja2VkICYmXHJcbiAgICAgIDxJY29uXHJcbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXHJcbiAgICAgICAgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1kcmFnZ2luZy1pY29uXCJcclxuICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgLz5cclxuICAgIH1cclxuICAgIHt2YWx1ZS5pc0xvY2tlZCAmJlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxyXG4gICAgICAgIG5hbWU9XCJsb2NrZWRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxvY2tlZC1pY29uXCJcclxuICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgLz5cclxuICAgIH1cclxuICAgIHshdmFsdWUuaXNMb2NrZWQgJiZcclxuICAgICAgPEljb25cclxuICAgICAgICBpZD1cIm9jLWljb24tcmVtb3ZlXCJcclxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcclxuICAgICAgICBuYW1lPVwicmVtb3ZlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1yZW1vdmUtaWNvblwiXHJcbiAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbVJlbW92ZX1cclxuICAgICAgLz5cclxuICAgIH1cclxuICA8L2Rpdj5cclxuKSk7XHJcblxyXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoeyBpdGVtcywgaGFuZGxlSXRlbVJlbW92ZSwgaGFuZGxlTW91c2VEb3duIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtbGlzdFwiPlxyXG4gICAgPFNjcm9sbEJhcj5cclxuICAgICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFNvcnRhYmxlSXRlbVxyXG4gICAgICAgICAga2V5PXt2YWx1ZS52YWx1ZX1cclxuICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZS5pc0xvY2tlZH1cclxuICAgICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e2hhbmRsZUl0ZW1SZW1vdmUodmFsdWUpfVxyXG4gICAgICAgICAgaGFuZGxlTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L1Njcm9sbEJhcj5cclxuICA8L2Rpdj5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RlZERhdGFMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxyXG4gICAgb25SZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25Tb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUl0ZW1SZW1vdmUgPSBpdGVtID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25SZW1vdmVJdGVtKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNob3VsZENhbmNlbFN0YXJ0ID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ29jLWljb24tcmVtb3ZlJyB8fCAoZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWwgJiYgZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWwuaW5kZXhPZignb2MtaWNvbi1yZW1vdmUnKSAhPT0gLTEpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U29ydGFibGVMaXN0XHJcbiAgICAgICAgaGFuZGxlSXRlbVJlbW92ZT17dGhpcy5oYW5kbGVJdGVtUmVtb3ZlfVxyXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XHJcbiAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XHJcbiAgICAgICAgb25Tb3J0RW5kPXt0aGlzLnByb3BzLm9uU29ydENoYW5nZX1cclxuICAgICAgICBzaG91bGRDYW5jZWxTdGFydD17dGhpcy5zaG91bGRDYW5jZWxTdGFydH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==