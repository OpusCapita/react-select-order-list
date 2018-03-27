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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleKeyPress = function (e) {
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
    var _this2 = this;

    var _props = this.props,
        isLocked = _props.isLocked,
        isSelected = _props.isSelected,
        label = _props.label,
        handleItemClick = _props.handleItemClick;

    return React.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-item' },
      React.createElement(Checkbox, {
        inputRef: function inputRef(ref) {
          _this2.input = ref;
        },
        checked: isSelected,
        disabled: isLocked,
        onChange: handleItemClick,
        onKeyDown: this.handleKeyPress
      }),
      React.createElement(
        'span',
        { className: 'oc-select-order-list-available-data-item-text' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNoZWNrYm94IiwiRGF0YUl0ZW0iLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiaGFuZGxlSXRlbUNsaWNrIiwicmVuZGVyIiwiaXNMb2NrZWQiLCJpc1NlbGVjdGVkIiwibGFiZWwiLCJyZWYiLCJpbnB1dCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDRCQUFyQjs7SUFFcUJDLFE7Ozs7Ozs7Ozs7OztnS0FjbkJDLGMsR0FBaUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFVBQUlBLEVBQUVDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ3pCRCxVQUFFRSxjQUFGO0FBQ0EsY0FBS0MsS0FBTCxDQUFXQyxlQUFYLENBQTJCLElBQTNCO0FBQ0QsT0FIRCxNQUdPLElBQUlKLEVBQUVDLEdBQUYsS0FBVSxTQUFkLEVBQXlCO0FBQzlCRCxVQUFFRSxjQUFGO0FBQ0EsY0FBS0MsS0FBTCxDQUFXQyxlQUFYLENBQTJCLEtBQTNCO0FBQ0QsT0FITSxNQUdBLElBQUlKLEVBQUVDLEdBQUYsS0FBVSxLQUFkLEVBQXFCO0FBQzFCRCxVQUFFRSxjQUFGO0FBQ0EsY0FBS0MsS0FBTCxDQUFXQyxlQUFYLENBQTJCLElBQTNCO0FBQ0Q7QUFDRixLOzs7cUJBR0RDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFNSCxLQUFLRixLQU5GO0FBQUEsUUFFTEcsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsVUFISyxVQUdMQSxVQUhLO0FBQUEsUUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsUUFLTEosZUFMSyxVQUtMQSxlQUxLOztBQU9QLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSwwQ0FBZjtBQUNFLDBCQUFDLFFBQUQ7QUFDRSxrQkFBVSxrQkFBQ0ssR0FBRCxFQUFTO0FBQUUsaUJBQUtDLEtBQUwsR0FBYUQsR0FBYjtBQUFtQixTQUQxQztBQUVFLGlCQUFTRixVQUZYO0FBR0Usa0JBQVVELFFBSFo7QUFJRSxrQkFBVUYsZUFKWjtBQUtFLG1CQUFXLEtBQUtMO0FBTGxCLFFBREY7QUFRRTtBQUFBO0FBQUEsVUFBTSxXQUFVLCtDQUFoQjtBQUNHUztBQURIO0FBUkYsS0FERjtBQWNELEc7OztFQWpEbUNiLE1BQU1nQixhLFVBUW5DQyxZLEdBQWU7QUFDcEJOLFlBQVUsS0FEVTtBQUVwQkMsY0FBWSxJQUZRO0FBR3BCQyxTQUFPO0FBSGEsQztTQVJIVixRIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc0xvY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTG9ja2VkOiBmYWxzZSxcbiAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgIGxhYmVsOiAnJyxcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUl0ZW1DbGljayh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlSXRlbUNsaWNrKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVJdGVtQ2xpY2sodHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNMb2NrZWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgbGFiZWwsXG4gICAgICBoYW5kbGVJdGVtQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtYXZhaWxhYmxlLWRhdGEtaXRlbVwiPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpbnB1dFJlZj17KHJlZikgPT4geyB0aGlzLmlucHV0ID0gcmVmOyB9fVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9ja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1pdGVtLXRleHRcIj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==