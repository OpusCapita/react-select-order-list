'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _data = require('./../data.utils');

var _data2 = _interopRequireDefault(_data);

var _availableDataItem = require('./../available-data-item/available-data-item.component');

var _availableDataItem2 = _interopRequireDefault(_availableDataItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailableDataList = (_temp = _class = function (_React$Component) {
  _inherits(AvailableDataList, _React$Component);

  function AvailableDataList(props) {
    _classCallCheck(this, AvailableDataList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.setItemsLabelText = function (data) {
      var updatedData = data.map(function (item) {
        var itemRef = _this[item.uuid];
        var labelText = itemRef ? itemRef.span.innerText : item.label;
        return _extends({}, item, { labelText: labelText });
      });
      return updatedData;
    };

    _this.getRefName = function (moveDown, index) {
      if (moveDown) {
        var _newIndex = index > _this.state.visibleItems.size - 1 ? 0 : index;
        var _item = _this.state.visibleItems.get(_newIndex);
        if (_item.isLocked) {
          return _this.getRefName(moveDown, _newIndex + 1);
        }
        return _item.uuid;
      }
      var newIndex = index === 0 ? _this.state.visibleItems.size - 1 : index - 2;
      var item = _this.state.visibleItems.get(newIndex);
      if (item.isLocked) {
        return _this.getRefName(moveDown, newIndex);
      }
      return item.uuid;
    };

    _this.filterItems = function (items, searchKeyword) {
      _this.setState({
        visibleItems: _data2.default.filterData(items, searchKeyword)
      });
    };

    _this.handleItemClick = function (item) {
      return function (e) {
        if (typeof e === 'boolean') {
          var index = _this.state.visibleItems.indexOf(item) + 1;
          var element = _this[_this.getRefName(e, index)].checkbox;
          _this.setState({
            focusedElement: element,
            scrollUp: !e
          });
          element.focus();
        } else if (item.isSelected) {
          _this.props.onUnselectItem(item);
        } else {
          _this.props.onSelectItem(item);
        }
      };
    };

    _this.handleScroll = function () {
      if (_this.state.focusedElement) {
        _this.state.focusedElement.scrollIntoView(_this.state.scrollUp);
        _this.setState({
          focusedElement: undefined
        });
      }
    };

    _this.items = props.items;
    _this.state = {
      focusedElement: undefined,
      scrollUp: false,
      visibleItems: props.items
    };
    return _this;
  }

  AvailableDataList.prototype.componentDidMount = function componentDidMount() {
    this.items = this.setItemsLabelText(this.items);
  };

  AvailableDataList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.items.equals(this.props.items)) {
      this.setState({
        visibleItems: nextProps.items
      });
    }
  };

  AvailableDataList.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var shouldUpdate = false;
    if (!prevProps.items.equals(this.props.items)) {
      this.items = this.setItemsLabelText(this.props.items);
      shouldUpdate = true;
    }
    if (prevProps.searchKeyword !== this.props.searchKeyword) {
      shouldUpdate = true;
    }
    if (shouldUpdate) {
      this.filterItems(this.items, this.props.searchKeyword);
    }
  };

  AvailableDataList.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-list' },
      _react2.default.createElement(
        _reactPerfectScrollbar2.default,
        { onScrollY: this.handleScroll },
        this.state.visibleItems.map(function (item) {
          return _react2.default.createElement(_availableDataItem2.default, {
            key: item.value,
            isSelected: item.isSelected,
            isLocked: item.isLocked,
            label: item.label,
            handleItemClick: _this2.handleItemClick(item),
            ref: function ref(c) {
              _this2[item.uuid] = c;
            }
          });
        })
      )
    );
  };

  return AvailableDataList;
}(_react2.default.Component), _class.defaultProps = {
  searchKeyword: ''
}, _temp);
exports.default = AvailableDataList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdmFpbGFibGVEYXRhTGlzdCIsInByb3BzIiwic2V0SXRlbXNMYWJlbFRleHQiLCJkYXRhIiwidXBkYXRlZERhdGEiLCJtYXAiLCJpdGVtIiwiaXRlbVJlZiIsInV1aWQiLCJsYWJlbFRleHQiLCJzcGFuIiwiaW5uZXJUZXh0IiwibGFiZWwiLCJnZXRSZWZOYW1lIiwibW92ZURvd24iLCJpbmRleCIsIm5ld0luZGV4Iiwic3RhdGUiLCJ2aXNpYmxlSXRlbXMiLCJzaXplIiwiZ2V0IiwiaXNMb2NrZWQiLCJmaWx0ZXJJdGVtcyIsIml0ZW1zIiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwiVXRpbHMiLCJmaWx0ZXJEYXRhIiwiaGFuZGxlSXRlbUNsaWNrIiwiZSIsImluZGV4T2YiLCJlbGVtZW50IiwiY2hlY2tib3giLCJmb2N1c2VkRWxlbWVudCIsInNjcm9sbFVwIiwiZm9jdXMiLCJpc1NlbGVjdGVkIiwib25VbnNlbGVjdEl0ZW0iLCJvblNlbGVjdEl0ZW0iLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxJbnRvVmlldyIsInVuZGVmaW5lZCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImVxdWFscyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNob3VsZFVwZGF0ZSIsInJlbmRlciIsInZhbHVlIiwiYyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7OztBQVluQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURp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LFlBQTNCO0FBQ0csYUFBS3RCLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QmIsR0FBeEIsQ0FBNEI7QUFBQSxpQkFDM0IsOEJBQUMsMkJBQUQ7QUFDRSxpQkFBS0MsS0FBSzRDLEtBRFo7QUFFRSx3QkFBWTVDLEtBQUs4QixVQUZuQjtBQUdFLHNCQUFVOUIsS0FBS2UsUUFIakI7QUFJRSxtQkFBT2YsS0FBS00sS0FKZDtBQUtFLDZCQUFpQixPQUFLZ0IsZUFBTCxDQUFxQnRCLElBQXJCLENBTG5CO0FBTUUsaUJBQUssYUFBQzZDLENBQUQsRUFBTztBQUFFLHFCQUFLN0MsS0FBS0UsSUFBVixJQUFrQjJDLENBQWxCO0FBQXNCO0FBTnRDLFlBRDJCO0FBQUEsU0FBNUI7QUFESDtBQURGLEtBREY7QUFnQkQsRzs7O0VBMUg0Q0MsZ0JBQU1DLFMsVUFRNUNDLFksR0FBZTtBQUNwQjlCLGlCQUFlO0FBREssQztrQkFSSHhCLGlCIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCBVdGlscyBmcm9tICcuLy4uL2RhdGEudXRpbHMnO1xuaW1wb3J0IERhdGFJdGVtIGZyb20gJy4vLi4vYXZhaWxhYmxlLWRhdGEtaXRlbS9hdmFpbGFibGUtZGF0YS1pdGVtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YWlsYWJsZURhdGFMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdEl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25VbnNlbGVjdEl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VhcmNoS2V5d29yZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pdGVtcyA9IHByb3BzLml0ZW1zO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgc2Nyb2xsVXA6IGZhbHNlLFxuICAgICAgdmlzaWJsZUl0ZW1zOiBwcm9wcy5pdGVtcyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuc2V0SXRlbXNMYWJlbFRleHQodGhpcy5pdGVtcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghbmV4dFByb3BzLml0ZW1zLmVxdWFscyh0aGlzLnByb3BzLml0ZW1zKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGVJdGVtczogbmV4dFByb3BzLml0ZW1zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICBpZiAoIXByZXZQcm9wcy5pdGVtcy5lcXVhbHModGhpcy5wcm9wcy5pdGVtcykpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNldEl0ZW1zTGFiZWxUZXh0KHRoaXMucHJvcHMuaXRlbXMpO1xuICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5zZWFyY2hLZXl3b3JkICE9PSB0aGlzLnByb3BzLnNlYXJjaEtleXdvcmQpIHtcbiAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXModGhpcy5pdGVtcywgdGhpcy5wcm9wcy5zZWFyY2hLZXl3b3JkKTtcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtc0xhYmVsVGV4dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZERhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbVJlZiA9IHRoaXNbaXRlbS51dWlkXTtcbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGl0ZW1SZWYgPyBpdGVtUmVmLnNwYW4uaW5uZXJUZXh0IDogaXRlbS5sYWJlbDtcbiAgICAgIHJldHVybiB7IC4uLml0ZW0sIGxhYmVsVGV4dCB9O1xuICAgIH0pO1xuICAgIHJldHVybiB1cGRhdGVkRGF0YTtcbiAgfVxuXG4gIGdldFJlZk5hbWUgPSAobW92ZURvd24sIGluZGV4KSA9PiB7XG4gICAgaWYgKG1vdmVEb3duKSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ID4gdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMuc2l6ZSAtIDEgPyAwIDogaW5kZXg7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMuZ2V0KG5ld0luZGV4KTtcbiAgICAgIGlmIChpdGVtLmlzTG9ja2VkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlZk5hbWUobW92ZURvd24sIG5ld0luZGV4ICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbS51dWlkO1xuICAgIH1cbiAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ID09PSAwID8gdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMuc2l6ZSAtIDEgOiBpbmRleCAtIDI7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuc3RhdGUudmlzaWJsZUl0ZW1zLmdldChuZXdJbmRleCk7XG4gICAgaWYgKGl0ZW0uaXNMb2NrZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlZk5hbWUobW92ZURvd24sIG5ld0luZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0udXVpZDtcbiAgfVxuXG4gIGZpbHRlckl0ZW1zID0gKGl0ZW1zLCBzZWFyY2hLZXl3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlSXRlbXM6IFV0aWxzLmZpbHRlckRhdGEoaXRlbXMsIHNlYXJjaEtleXdvcmQpLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNsaWNrID0gaXRlbSA9PiAoZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUudmlzaWJsZUl0ZW1zLmluZGV4T2YoaXRlbSkgKyAxO1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNbdGhpcy5nZXRSZWZOYW1lKGUsIGluZGV4KV0uY2hlY2tib3g7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZEVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHNjcm9sbFVwOiAhZSxcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVW5zZWxlY3RJdGVtKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcodGhpcy5zdGF0ZS5zY3JvbGxVcCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1saXN0XCI+XG4gICAgICAgIDxTY3JvbGxCYXIgb25TY3JvbGxZPXt0aGlzLmhhbmRsZVNjcm9sbH0gPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnZpc2libGVJdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8RGF0YUl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpdGVtLmlzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGlzTG9ja2VkPXtpdGVtLmlzTG9ja2VkfVxuICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgaGFuZGxlSXRlbUNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGljayhpdGVtKX1cbiAgICAgICAgICAgICAgcmVmPXsoYykgPT4geyB0aGlzW2l0ZW0udXVpZF0gPSBjOyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TY3JvbGxCYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=