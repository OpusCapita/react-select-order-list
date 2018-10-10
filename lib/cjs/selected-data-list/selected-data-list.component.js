'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2; /* eslint-disable jsx-a11y/no-static-element-interactions */


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
      handleItemRemove = _ref.handleItemRemove,
      handleMouseDown = _ref.handleMouseDown,
      showRemoveIcon = _ref.showRemoveIcon;
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
    !value.isLocked && showRemoveIcon && _react2.default.createElement(_reactIcons.Icon, {
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
      handleMouseDown = _ref2.handleMouseDown,
      showRemoveIcon = _ref2.showRemoveIcon;
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
    return _react2.default.createElement(SortableList, {
      handleItemRemove: this.handleItemRemove,
      handleMouseDown: this.handleMouseDown,
      items: this.props.items,
      onSortEnd: this.props.onSortChange,
      shouldCancelStart: this.shouldCancelStart,
      showRemoveIcon: this.props.showRemoveIcon
    });
  };

  return SelectedDataList;
}(_react2.default.PureComponent), _class.defaultProps = {
  showRemoveIcon: true
}, _temp2);
exports.default = SelectedDataList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiU29ydGFibGVJdGVtIiwidmFsdWUiLCJoYW5kbGVJdGVtUmVtb3ZlIiwiaGFuZGxlTW91c2VEb3duIiwic2hvd1JlbW92ZUljb24iLCJpc0xvY2tlZCIsImxhYmVsIiwiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJtYXAiLCJpbmRleCIsIlNlbGVjdGVkRGF0YUxpc3QiLCJwcm9wcyIsIm9uUmVtb3ZlSXRlbSIsIml0ZW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG91bGRDYW5jZWxTdGFydCIsInRhcmdldCIsImlkIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsImluZGV4T2YiLCJyZW5kZXIiLCJvblNvcnRDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztvQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUtBLElBQU1BLGVBQWUsdUNBQWdCO0FBQUEsTUFDbkNDLEtBRG1DLFFBQ25DQSxLQURtQztBQUFBLE1BQzVCQyxnQkFENEIsUUFDNUJBLGdCQUQ0QjtBQUFBLE1BQ1ZDLGVBRFUsUUFDVkEsZUFEVTtBQUFBLE1BQ09DLGNBRFAsUUFDT0EsY0FEUDtBQUFBLFNBR25DO0FBQUE7QUFBQTtBQUNFLFdBQUtILE1BQU1BLEtBRGI7QUFFRSw4REFBcURBLE1BQU1JLFFBQU4sR0FBaUIsU0FBakIsR0FBNkIsRUFBbEYsQ0FGRjtBQUdFLG1CQUFhRjtBQUhmO0FBS0U7QUFBQTtBQUFBLFFBQU0sV0FBVSw4Q0FBaEI7QUFDR0YsWUFBTUs7QUFEVCxLQUxGO0FBUUcsS0FBQ0wsTUFBTUksUUFBUCxJQUNDO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxnQkFGUDtBQUdFLGlCQUFVLG9DQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BVEo7QUFpQkdKLFVBQU1JLFFBQU4sSUFDQztBQUNFLFlBQUssV0FEUDtBQUVFLFlBQUssUUFGUDtBQUdFLGlCQUFVLGtDQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BbEJKO0FBMEJHLEtBQUNKLE1BQU1JLFFBQVAsSUFBbUJELGNBQW5CLElBQ0M7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFLLFFBRlA7QUFHRSxpQkFBVSxrQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVEsRUFMVjtBQU1FLGVBQVNGO0FBTlg7QUEzQkosR0FIbUM7QUFBQSxDQUFoQixDQUFyQjs7QUEwQ0EsSUFBTUssZUFBZSx5Q0FBa0I7QUFBQSxNQUNyQ0MsS0FEcUMsU0FDckNBLEtBRHFDO0FBQUEsTUFDOUJOLGdCQUQ4QixTQUM5QkEsZ0JBRDhCO0FBQUEsTUFDWkMsZUFEWSxTQUNaQSxlQURZO0FBQUEsTUFDS0MsY0FETCxTQUNLQSxjQURMO0FBQUEsU0FHckM7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHSSxZQUFNQyxHQUFOLENBQVUsVUFBQ1IsS0FBRCxFQUFRUyxLQUFSO0FBQUEsZUFDVCw4QkFBQyxZQUFEO0FBQ0UsZUFBS1QsTUFBTUEsS0FEYjtBQUVFLGlCQUFPUyxLQUZUO0FBR0UsaUJBQU9ULEtBSFQ7QUFJRSxvQkFBVUEsTUFBTUksUUFKbEI7QUFLRSw0QkFBa0JILGlCQUFpQkQsS0FBakIsQ0FMcEI7QUFNRSwyQkFBaUJFLGVBTm5CO0FBT0UsMEJBQWdCQztBQVBsQixVQURTO0FBQUEsT0FBVjtBQURIO0FBREYsR0FIcUM7QUFBQSxDQUFsQixDQUFyQjs7SUFvQnFCTyxnQjs7Ozs7Ozs7Ozs7O2dLQVluQlQsZ0IsR0FBbUI7QUFBQSxhQUFRLFlBQU07QUFDL0IsY0FBS1UsS0FBTCxDQUFXQyxZQUFYLENBQXdCQyxJQUF4QjtBQUNELE9BRmtCO0FBQUEsSyxRQUluQlgsZSxHQUFrQixVQUFDWSxDQUFELEVBQU87QUFDdkJBLFFBQUVDLGNBQUY7QUFDRCxLLFFBRURDLGlCLEdBQW9CLFVBQUNGLENBQUQsRUFBTztBQUN6QixVQUFJQSxFQUFFRyxNQUFGLENBQVNDLEVBQVQsS0FBZ0IsZ0JBQWhCLElBQXFDSixFQUFFRyxNQUFGLENBQVNFLFNBQVQsQ0FBbUJDLE9BQW5CLElBQThCTixFQUFFRyxNQUFGLENBQVNFLFNBQVQsQ0FBbUJDLE9BQW5CLENBQTJCQyxPQUEzQixDQUFtQyxnQkFBbkMsTUFBeUQsQ0FBQyxDQUFqSSxFQUFxSTtBQUNuSSxlQUFPLElBQVA7QUFDRDtBQUNELGFBQU8sS0FBUDtBQUNELEs7Ozs2QkFDREMsTSxxQkFBUztBQUNQLFdBQ0UsOEJBQUMsWUFBRDtBQUNFLHdCQUFrQixLQUFLckIsZ0JBRHpCO0FBRUUsdUJBQWlCLEtBQUtDLGVBRnhCO0FBR0UsYUFBTyxLQUFLUyxLQUFMLENBQVdKLEtBSHBCO0FBSUUsaUJBQVcsS0FBS0ksS0FBTCxDQUFXWSxZQUp4QjtBQUtFLHlCQUFtQixLQUFLUCxpQkFMMUI7QUFNRSxzQkFBZ0IsS0FBS0wsS0FBTCxDQUFXUjtBQU43QixNQURGO0FBVUQsRzs7O0VBckMyQyxnQkFBTXFCLGEsVUFRM0NDLFksR0FBZTtBQUNwQnRCLGtCQUFnQjtBQURJLEM7a0JBUkhPLGdCIiwiZmlsZSI6InNlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgU2Nyb2xsQmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7XG4gIFNvcnRhYmxlQ29udGFpbmVyLFxuICBTb3J0YWJsZUVsZW1lbnQsXG59IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5cbmNvbnN0IFNvcnRhYmxlSXRlbSA9IFNvcnRhYmxlRWxlbWVudCgoe1xuICB2YWx1ZSwgaGFuZGxlSXRlbVJlbW92ZSwgaGFuZGxlTW91c2VEb3duLCBzaG93UmVtb3ZlSWNvbixcbn0pID0+IChcbiAgPGRpdlxuICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgY2xhc3NOYW1lPXtgb2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1pdGVtJHt2YWx1ZS5pc0xvY2tlZCA/ICcgbG9ja2VkJyA6ICcnfWB9XG4gICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtaXRlbS10ZXh0XCI+XG4gICAgICB7dmFsdWUubGFiZWx9XG4gICAgPC9zcGFuPlxuICAgIHshdmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1kcmFnZ2luZy1pY29uXCJcbiAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgLz5cbiAgICB9XG4gICAge3ZhbHVlLmlzTG9ja2VkICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cImxvY2tlZFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxvY2tlZC1pY29uXCJcbiAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgLz5cbiAgICB9XG4gICAgeyF2YWx1ZS5pc0xvY2tlZCAmJiBzaG93UmVtb3ZlSWNvbiAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJyZW1vdmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1yZW1vdmUtaWNvblwiXG4gICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgIC8+XG4gICAgfVxuICA8L2Rpdj5cbikpO1xuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoe1xuICBpdGVtcywgaGFuZGxlSXRlbVJlbW92ZSwgaGFuZGxlTW91c2VEb3duLCBzaG93UmVtb3ZlSWNvbixcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWxpc3RcIj5cbiAgICA8U2Nyb2xsQmFyPlxuICAgICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTb3J0YWJsZUl0ZW1cbiAgICAgICAgICBrZXk9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlLmlzTG9ja2VkfVxuICAgICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e2hhbmRsZUl0ZW1SZW1vdmUodmFsdWUpfVxuICAgICAgICAgIGhhbmRsZU1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIHNob3dSZW1vdmVJY29uPXtzaG93UmVtb3ZlSWNvbn1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvU2Nyb2xsQmFyPlxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RlZERhdGFMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU29ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzaG93UmVtb3ZlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcbiAgfVxuXG4gIGhhbmRsZUl0ZW1SZW1vdmUgPSBpdGVtID0+ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlSXRlbShpdGVtKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsU3RhcnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ29jLWljb24tcmVtb3ZlJyB8fCAoZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWwgJiYgZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWwuaW5kZXhPZignb2MtaWNvbi1yZW1vdmUnKSAhPT0gLTEpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlTGlzdFxuICAgICAgICBoYW5kbGVJdGVtUmVtb3ZlPXt0aGlzLmhhbmRsZUl0ZW1SZW1vdmV9XG4gICAgICAgIGhhbmRsZU1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuICAgICAgICBvblNvcnRFbmQ9e3RoaXMucHJvcHMub25Tb3J0Q2hhbmdlfVxuICAgICAgICBzaG91bGRDYW5jZWxTdGFydD17dGhpcy5zaG91bGRDYW5jZWxTdGFydH1cbiAgICAgICAgc2hvd1JlbW92ZUljb249e3RoaXMucHJvcHMuc2hvd1JlbW92ZUljb259XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==