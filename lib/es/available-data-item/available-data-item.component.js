var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@opuscapita/react-checkbox';

var DataItem = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(DataItem, _React$PureComponent);

  function DataItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, DataItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getCheckboxRef = function (element) {
      _this.checkbox = element;
    }, _this.getSpanRef = function (element) {
      _this.span = element;
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        _this.props.handleItemClick(true);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        _this.props.handleItemClick(false);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        _this.props.handleItemClick(true);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
        inputRef: this.getCheckboxRef,
        checked: isSelected,
        disabled: isLocked,
        onChange: handleItemClick,
        onKeyDown: this.handleKeyPress
      }),
      React.createElement(
        'span',
        {
          className: 'oc-select-order-list-available-data-item-text',
          ref: this.getSpanRef
        },
        label
      )
    );
  };

  return DataItem;
}(React.PureComponent), _class.defaultProps = {
  isLocked: false,
  isSelected: true,
  label: ''
}, _temp2);
export { DataItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNoZWNrYm94IiwiRGF0YUl0ZW0iLCJnZXRDaGVja2JveFJlZiIsImVsZW1lbnQiLCJjaGVja2JveCIsImdldFNwYW5SZWYiLCJzcGFuIiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImhhbmRsZUl0ZW1DbGljayIsInJlbmRlciIsImlzTG9ja2VkIiwiaXNTZWxlY3RlZCIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsNEJBQXJCOztJQUVxQkMsUTs7Ozs7Ozs7Ozs7O2dLQWNuQkMsYyxHQUFpQixVQUFDQyxPQUFELEVBQWE7QUFBRSxZQUFLQyxRQUFMLEdBQWdCRCxPQUFoQjtBQUEwQixLLFFBRTFERSxVLEdBQWEsVUFBQ0YsT0FBRCxFQUFhO0FBQUUsWUFBS0csSUFBTCxHQUFZSCxPQUFaO0FBQXNCLEssUUFFbERJLGMsR0FBaUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFVBQUlBLEVBQUVDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ3pCRCxVQUFFRSxjQUFGO0FBQ0EsY0FBS0MsS0FBTCxDQUFXQyxlQUFYLENBQTJCLElBQTNCO0FBQ0QsT0FIRCxNQUdPLElBQUlKLEVBQUVDLEdBQUYsS0FBVSxTQUFkLEVBQXlCO0FBQzlCRCxVQUFFRSxjQUFGO0FBQ0EsY0FBS0MsS0FBTCxDQUFXQyxlQUFYLENBQTJCLEtBQTNCO0FBQ0QsT0FITSxNQUdBLElBQUlKLEVBQUVDLEdBQUYsS0FBVSxLQUFkLEVBQXFCO0FBQzFCRCxVQUFFRSxjQUFGO0FBQ0EsY0FBS0MsS0FBTCxDQUFXQyxlQUFYLENBQTJCLElBQTNCO0FBQ0Q7QUFDRixLOzs7cUJBRURDLE0scUJBQVM7QUFBQSxpQkFNSCxLQUFLRixLQU5GO0FBQUEsUUFFTEcsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsVUFISyxVQUdMQSxVQUhLO0FBQUEsUUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsUUFLTEosZUFMSyxVQUtMQSxlQUxLOztBQU9QLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSwwQ0FBZjtBQUNFLDBCQUFDLFFBQUQ7QUFDRSxrQkFBVSxLQUFLVixjQURqQjtBQUVFLGlCQUFTYSxVQUZYO0FBR0Usa0JBQVVELFFBSFo7QUFJRSxrQkFBVUYsZUFKWjtBQUtFLG1CQUFXLEtBQUtMO0FBTGxCLFFBREY7QUFRRTtBQUFBO0FBQUE7QUFDRSxxQkFBVSwrQ0FEWjtBQUVFLGVBQUssS0FBS0Y7QUFGWjtBQUlHVztBQUpIO0FBUkYsS0FERjtBQWlCRCxHOzs7RUF2RG1DbEIsTUFBTW1CLGEsVUFRbkNDLFksR0FBZTtBQUNwQkosWUFBVSxLQURVO0FBRXBCQyxjQUFZLElBRlE7QUFHcEJDLFNBQU87QUFIYSxDO1NBUkhmLFEiLCJmaWxlIjoiYXZhaWxhYmxlLWRhdGEtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlSXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzTG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNMb2NrZWQ6IGZhbHNlLFxuICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcnLFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hSZWYgPSAoZWxlbWVudCkgPT4geyB0aGlzLmNoZWNrYm94ID0gZWxlbWVudDsgfVxuXG4gIGdldFNwYW5SZWYgPSAoZWxlbWVudCkgPT4geyB0aGlzLnNwYW4gPSBlbGVtZW50OyB9XG5cbiAgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlSXRlbUNsaWNrKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVJdGVtQ2xpY2soZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUl0ZW1DbGljayh0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNMb2NrZWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgbGFiZWwsXG4gICAgICBoYW5kbGVJdGVtQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtYXZhaWxhYmxlLWRhdGEtaXRlbVwiPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpbnB1dFJlZj17dGhpcy5nZXRDaGVja2JveFJlZn1cbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtLXRleHRcIlxuICAgICAgICAgIHJlZj17dGhpcy5nZXRTcGFuUmVmfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=