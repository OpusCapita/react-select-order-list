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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3RlZC1kYXRhLWxpc3Qvc2VsZWN0ZWQtZGF0YS1saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJJY29uIiwiU2Nyb2xsQmFyIiwiU29ydGFibGVDb250YWluZXIiLCJTb3J0YWJsZUVsZW1lbnQiLCJTb3J0YWJsZUl0ZW0iLCJ2YWx1ZSIsImhhbmRsZUl0ZW1SZW1vdmUiLCJoYW5kbGVNb3VzZURvd24iLCJpc0xvY2tlZCIsImxhYmVsIiwiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJtYXAiLCJpbmRleCIsIlNlbGVjdGVkRGF0YUxpc3QiLCJwcm9wcyIsIm9uUmVtb3ZlSXRlbSIsIml0ZW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG91bGRDYW5jZWxTdGFydCIsInRhcmdldCIsImlkIiwiY2xhc3NOYW1lIiwiYmFzZVZhbCIsImluZGV4T2YiLCJyZW5kZXIiLCJvblNvcnRDaGFuZ2UiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQix5QkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHFDQUF0QjtBQUNBLFNBQ0VDLGlCQURGLEVBRUVDLGVBRkYsUUFHTyxvQkFIUDs7QUFLQSxJQUFNQyxlQUFlRCxnQkFBZ0I7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxnQkFBVixRQUFVQSxnQkFBVjtBQUFBLE1BQTRCQyxlQUE1QixRQUE0QkEsZUFBNUI7QUFBQSxTQUNuQztBQUFBO0FBQUE7QUFDRSxXQUFLRixNQUFNQSxLQURiO0FBRUUsOERBQXFEQSxNQUFNRyxRQUFOLEdBQWlCLFNBQWpCLEdBQTZCLEVBQWxGLENBRkY7QUFHRSxtQkFBYUQ7QUFIZjtBQUtFO0FBQUE7QUFBQSxRQUFNLFdBQVUsOENBQWhCO0FBQ0dGLFlBQU1JO0FBRFQsS0FMRjtBQVFHLEtBQUNKLE1BQU1HLFFBQVAsSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxnQkFGUDtBQUdFLGlCQUFVLG9DQUhaO0FBSUUsYUFBTyxFQUpUO0FBS0UsY0FBUTtBQUxWLE1BVEo7QUFpQkdILFVBQU1HLFFBQU4sSUFDQyxvQkFBQyxJQUFEO0FBQ0UsWUFBSyxXQURQO0FBRUUsWUFBSyxRQUZQO0FBR0UsaUJBQVUsa0NBSFo7QUFJRSxhQUFPLEVBSlQ7QUFLRSxjQUFRO0FBTFYsTUFsQko7QUEwQkcsS0FBQ0gsTUFBTUcsUUFBUCxJQUNDLG9CQUFDLElBQUQ7QUFDRSxZQUFLLFdBRFA7QUFFRSxZQUFLLFFBRlA7QUFHRSxpQkFBVSxrQ0FIWjtBQUlFLGFBQU8sRUFKVDtBQUtFLGNBQVEsRUFMVjtBQU1FLGVBQVNGO0FBTlg7QUEzQkosR0FEbUM7QUFBQSxDQUFoQixDQUFyQjs7QUF3Q0EsSUFBTUksZUFBZVIsa0JBQWtCO0FBQUEsTUFBR1MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUwsZ0JBQVYsU0FBVUEsZ0JBQVY7QUFBQSxNQUE0QkMsZUFBNUIsU0FBNEJBLGVBQTVCO0FBQUEsU0FDckM7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFO0FBQUMsZUFBRDtBQUFBO0FBQ0dJLFlBQU1DLEdBQU4sQ0FBVSxVQUFDUCxLQUFELEVBQVFRLEtBQVI7QUFBQSxlQUNULG9CQUFDLFlBQUQ7QUFDRSxlQUFLUixNQUFNQSxLQURiO0FBRUUsaUJBQU9RLEtBRlQ7QUFHRSxpQkFBT1IsS0FIVDtBQUlFLG9CQUFVQSxNQUFNRyxRQUpsQjtBQUtFLDRCQUFrQkYsaUJBQWlCRCxLQUFqQixDQUxwQjtBQU1FLDJCQUFpQkU7QUFObkIsVUFEUztBQUFBLE9BQVY7QUFESDtBQURGLEdBRHFDO0FBQUEsQ0FBbEIsQ0FBckI7O0lBaUJxQk8sZ0I7Ozs7Ozs7Ozs7OztnS0FPbkJSLGdCLEdBQW1CO0FBQUEsYUFBUSxZQUFNO0FBQy9CLGNBQUtTLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkMsSUFBeEI7QUFDRCxPQUZrQjtBQUFBLEssUUFJbkJWLGUsR0FBa0IsVUFBQ1csQ0FBRCxFQUFPO0FBQ3ZCQSxRQUFFQyxjQUFGO0FBQ0QsSyxRQUVEQyxpQixHQUFvQixVQUFDRixDQUFELEVBQU87QUFDekIsVUFBSUEsRUFBRUcsTUFBRixDQUFTQyxFQUFULEtBQWdCLGdCQUFoQixJQUFxQ0osRUFBRUcsTUFBRixDQUFTRSxTQUFULENBQW1CQyxPQUFuQixJQUE4Qk4sRUFBRUcsTUFBRixDQUFTRSxTQUFULENBQW1CQyxPQUFuQixDQUEyQkMsT0FBM0IsQ0FBbUMsZ0JBQW5DLE1BQXlELENBQUMsQ0FBakksRUFBcUk7QUFDbkksZUFBTyxJQUFQO0FBQ0Q7QUFDRCxhQUFPLEtBQVA7QUFDRCxLOzs7NkJBQ0RDLE0scUJBQVM7QUFDUCxXQUNFLG9CQUFDLFlBQUQ7QUFDRSx3QkFBa0IsS0FBS3BCLGdCQUR6QjtBQUVFLHVCQUFpQixLQUFLQyxlQUZ4QjtBQUdFLGFBQU8sS0FBS1EsS0FBTCxDQUFXSixLQUhwQjtBQUlFLGlCQUFXLEtBQUtJLEtBQUwsQ0FBV1ksWUFKeEI7QUFLRSx5QkFBbUIsS0FBS1A7QUFMMUIsTUFERjtBQVNELEc7OztFQS9CMkN2QixNQUFNK0IsYTs7U0FBL0JkLGdCIiwiZmlsZSI6InNlbGVjdGVkLWRhdGEtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgU2Nyb2xsQmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7XG4gIFNvcnRhYmxlQ29udGFpbmVyLFxuICBTb3J0YWJsZUVsZW1lbnQsXG59IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5cbmNvbnN0IFNvcnRhYmxlSXRlbSA9IFNvcnRhYmxlRWxlbWVudCgoeyB2YWx1ZSwgaGFuZGxlSXRlbVJlbW92ZSwgaGFuZGxlTW91c2VEb3duIH0pID0+IChcbiAgPGRpdlxuICAgIGtleT17dmFsdWUudmFsdWV9XG4gICAgY2xhc3NOYW1lPXtgb2Mtc2VsZWN0LW9yZGVyLWxpc3Qtc2VsZWN0ZWQtZGF0YS1pdGVtJHt2YWx1ZS5pc0xvY2tlZCA/ICcgbG9ja2VkJyA6ICcnfWB9XG4gICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LXNlbGVjdGVkLWRhdGEtaXRlbS10ZXh0XCI+XG4gICAgICB7dmFsdWUubGFiZWx9XG4gICAgPC9zcGFuPlxuICAgIHshdmFsdWUuaXNMb2NrZWQgJiZcbiAgICAgIDxJY29uXG4gICAgICAgIHR5cGU9XCJpbmRpY2F0b3JcIlxuICAgICAgICBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1kcmFnZ2luZy1pY29uXCJcbiAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgLz5cbiAgICB9XG4gICAge3ZhbHVlLmlzTG9ja2VkICYmXG4gICAgICA8SWNvblxuICAgICAgICB0eXBlPVwiaW5kaWNhdG9yXCJcbiAgICAgICAgbmFtZT1cImxvY2tlZFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWxvY2tlZC1pY29uXCJcbiAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgLz5cbiAgICB9XG4gICAgeyF2YWx1ZS5pc0xvY2tlZCAmJlxuICAgICAgPEljb25cbiAgICAgICAgdHlwZT1cImluZGljYXRvclwiXG4gICAgICAgIG5hbWU9XCJyZW1vdmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1yZW1vdmUtaWNvblwiXG4gICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbVJlbW92ZX1cbiAgICAgIC8+XG4gICAgfVxuICA8L2Rpdj5cbikpO1xuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoeyBpdGVtcywgaGFuZGxlSXRlbVJlbW92ZSwgaGFuZGxlTW91c2VEb3duIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1zZWxlY3RlZC1kYXRhLWxpc3RcIj5cbiAgICA8U2Nyb2xsQmFyPlxuICAgICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTb3J0YWJsZUl0ZW1cbiAgICAgICAgICBrZXk9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlLmlzTG9ja2VkfVxuICAgICAgICAgIGhhbmRsZUl0ZW1SZW1vdmU9e2hhbmRsZUl0ZW1SZW1vdmUodmFsdWUpfVxuICAgICAgICAgIGhhbmRsZU1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9TY3JvbGxCYXI+XG4gIDwvZGl2PlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGVkRGF0YUxpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Tb3J0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGhhbmRsZUl0ZW1SZW1vdmUgPSBpdGVtID0+ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlSXRlbShpdGVtKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsU3RhcnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ29jLWljb24tcmVtb3ZlJyB8fCAoZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWwgJiYgZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWwuaW5kZXhPZignb2MtaWNvbi1yZW1vdmUnKSAhPT0gLTEpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlTGlzdFxuICAgICAgICBoYW5kbGVJdGVtUmVtb3ZlPXt0aGlzLmhhbmRsZUl0ZW1SZW1vdmV9XG4gICAgICAgIGhhbmRsZU1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuICAgICAgICBvblNvcnRFbmQ9e3RoaXMucHJvcHMub25Tb3J0Q2hhbmdlfVxuICAgICAgICBzaG91bGRDYW5jZWxTdGFydD17dGhpcy5zaG91bGRDYW5jZWxTdGFydH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19