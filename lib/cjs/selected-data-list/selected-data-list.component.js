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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {
  var value = _ref.value,
      handleItemRemove = _ref.handleItemRemove;
  return _react2.default.createElement(
    'div',
    {
      key: value.value,
      className: 'oc-select-order-list-selected-data-item' + (value.isLocked ? ' locked' : '')
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
      width: 16,
      height: 16,
      onClick: handleItemRemove
    })
  );
});

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
  var items = _ref2.items,
      handleItemRemove = _ref2.handleItemRemove;
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
    return _react2.default.createElement(SortableList, {
      handleItemRemove: this.handleItemRemove,
      items: this.props.items,
      onSortEnd: this.props.onSortChange,
      shouldCancelStart: this.shouldCancelStart
    });
  };

  return SelectedDataList;
}(_react2.default.PureComponent);

exports.default = SelectedDataList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiU29ydGFibGVJdGVtIiwidmFsdWUiLCJoYW5kbGVJdGVtUmVtb3ZlIiwiaXNMb2NrZWQiLCJsYWJlbCIsIlNvcnRhYmxlTGlzdCIsIml0ZW1zIiwibWFwIiwiaW5kZXgiLCJTZWxlY3RlZERhdGFMaXN0IiwicHJvcHMiLCJvblJlbW92ZUl0ZW0iLCJpdGVtIiwic2hvdWxkQ2FuY2VsU3RhcnQiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsImluZGV4T2YiLCJyZW5kZXIiLCJvblNvcnRDaGFuZ2UiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxlQUFlLHVDQUFnQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLGdCQUFWLFFBQVVBLGdCQUFWO0FBQUEsU0FDbkM7QUFBQTtBQUFBO0FBQ0UsV0FBS0QsTUFBTUEsS0FEYjtBQUVFLDhEQUFxREEsTUFBTUUsUUFBTixHQUFpQixTQUFqQixHQUE2QixFQUFsRjtBQUZGO0FBSUU7QUFBQTtBQUFBLFFBQU0sV0FBVSw4Q0FBaEI7QUFDR0YsWUFBTUc7QUFEVCxLQUpGO0FBT0csS0FBQ0gsTUFBTUUsUUFBUCxJQUNDO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxnQkFGUDtBQUdFLGlCQUFVLG9DQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BUko7QUFnQkdGLFVBQU1FLFFBQU4sSUFDQztBQUNFLFlBQUssV0FEUDtBQUVFLFlBQUssUUFGUDtBQUdFLGlCQUFVLGtDQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BakJKO0FBeUJHLEtBQUNGLE1BQU1FLFFBQVAsSUFDQztBQUNFLFlBQUssV0FEUDtBQUVFLFlBQUssUUFGUDtBQUdFLGlCQUFVLGtDQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUSxFQUxWO0FBTUUsZUFBU0Q7QUFOWDtBQTFCSixHQURtQztBQUFBLENBQWhCLENBQXJCOztBQXVDQSxJQUFNRyxlQUFlLHlDQUFrQjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVKLGdCQUFWLFNBQVVBLGdCQUFWO0FBQUEsU0FDckM7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHSSxZQUFNQyxHQUFOLENBQVUsVUFBQ04sS0FBRCxFQUFRTyxLQUFSO0FBQUEsZUFDVCw4QkFBQyxZQUFEO0FBQ0UsZUFBS1AsTUFBTUEsS0FEYjtBQUVFLGlCQUFPTyxLQUZUO0FBR0UsaUJBQU9QLEtBSFQ7QUFJRSxvQkFBVUEsTUFBTUUsUUFKbEI7QUFLRSw0QkFBa0JELGlCQUFpQkQsS0FBakI7QUFMcEIsVUFEUztBQUFBLE9BQVY7QUFESDtBQURGLEdBRHFDO0FBQUEsQ0FBbEIsQ0FBckI7O0lBZ0JxQlEsZ0I7Ozs7Ozs7Ozs7OztnS0FPbkJQLGdCLEdBQW1CO0FBQUEsYUFBUSxZQUFNO0FBQy9CLGNBQUtRLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkMsSUFBeEI7QUFDRCxPQUZrQjtBQUFBLEssUUFJbkJDLGlCLEdBQW9CLFVBQUNDLENBQUQsRUFBTztBQUN6QixVQUFJQSxFQUFFQyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJDLE9BQW5CLElBQThCSCxFQUFFQyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJDLE9BQW5CLENBQTJCQyxPQUEzQixDQUFtQyxnQkFBbkMsTUFBeUQsQ0FBQyxDQUE1RixFQUErRjtBQUM3RixlQUFPLElBQVA7QUFDRDtBQUNELGFBQU8sS0FBUDtBQUNELEs7Ozs2QkFFREMsTSxxQkFBUztBQUNQLFdBQ0UsOEJBQUMsWUFBRDtBQUNFLHdCQUFrQixLQUFLakIsZ0JBRHpCO0FBRUUsYUFBTyxLQUFLUSxLQUFMLENBQVdKLEtBRnBCO0FBR0UsaUJBQVcsS0FBS0ksS0FBTCxDQUFXVSxZQUh4QjtBQUlFLHlCQUFtQixLQUFLUDtBQUoxQixNQURGO0FBUUQsRzs7O0VBM0IyQyxnQkFBTVEsYTs7a0JBQS9CWixnQiIsImZpbGUiOiJzZWxlY3RlZC1kYXRhLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0IHtcbiAgU29ydGFibGVDb250YWluZXIsXG4gIFNvcnRhYmxlRWxlbWVudCxcbn0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcblxuY29uc3QgU29ydGFibGVJdGVtID0gU29ydGFibGVFbGVtZW50KCh7IHZhbHVlLCBoYW5kbGVJdGVtUmVtb3ZlIH0pID0+IChcbiAgPGRpdlxuICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgY2xhc3NOYW1lPXtgb2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1pdGVtJHt2YWx1ZS5pc0xvY2tlZCA/ICcgbG9ja2VkJyA6ICcnfWB9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWl0ZW0tdGV4dFwiPlxuICAgICAge3ZhbHVlLmxhYmVsfVxuICAgIDwvc3Bhbj5cbiAgICB7IXZhbHVlLmlzTG9ja2VkICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtZHJhZ2dpbmctaWNvblwiXG4gICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgIC8+XG4gICAgfVxuICAgIHt2YWx1ZS5pc0xvY2tlZCAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJsb2NrZWRcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1sb2NrZWQtaWNvblwiXG4gICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgIC8+XG4gICAgfVxuICAgIHshdmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPVwicmVtb3ZlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtcmVtb3ZlLWljb25cIlxuICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1SZW1vdmV9XG4gICAgICAvPlxuICAgIH1cbiAgPC9kaXY+XG4pKTtcblxuY29uc3QgU29ydGFibGVMaXN0ID0gU29ydGFibGVDb250YWluZXIoKHsgaXRlbXMsIGhhbmRsZUl0ZW1SZW1vdmUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtbGlzdFwiPlxuICAgIDxTY3JvbGxCYXI+XG4gICAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17dmFsdWUuaXNMb2NrZWR9XG4gICAgICAgICAgaGFuZGxlSXRlbVJlbW92ZT17aGFuZGxlSXRlbVJlbW92ZSh2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L1Njcm9sbEJhcj5cbiAgPC9kaXY+XG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0ZWREYXRhTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNvcnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgaGFuZGxlSXRlbVJlbW92ZSA9IGl0ZW0gPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25SZW1vdmVJdGVtKGl0ZW0pO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsU3RhcnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbCAmJiBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbC5pbmRleE9mKCdvYy1pY29uLXJlbW92ZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlTGlzdFxuICAgICAgICBoYW5kbGVJdGVtUmVtb3ZlPXt0aGlzLmhhbmRsZUl0ZW1SZW1vdmV9XG4gICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuICAgICAgICBvblNvcnRFbmQ9e3RoaXMucHJvcHMub25Tb3J0Q2hhbmdlfVxuICAgICAgICBzaG91bGRDYW5jZWxTdGFydD17dGhpcy5zaG91bGRDYW5jZWxTdGFydH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19