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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdmFpbGFibGVEYXRhTGlzdCIsInByb3BzIiwic2V0SXRlbXNMYWJlbFRleHQiLCJkYXRhIiwidXBkYXRlZERhdGEiLCJtYXAiLCJpdGVtIiwiaXRlbVJlZiIsInV1aWQiLCJsYWJlbFRleHQiLCJzcGFuIiwiaW5uZXJUZXh0IiwibGFiZWwiLCJnZXRSZWZOYW1lIiwibW92ZURvd24iLCJpbmRleCIsIm5ld0luZGV4Iiwic3RhdGUiLCJ2aXNpYmxlSXRlbXMiLCJzaXplIiwiZ2V0IiwiaXNMb2NrZWQiLCJmaWx0ZXJJdGVtcyIsIml0ZW1zIiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwiZmlsdGVyRGF0YSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJpbmRleE9mIiwiZWxlbWVudCIsImNoZWNrYm94IiwiZm9jdXNlZEVsZW1lbnQiLCJzY3JvbGxVcCIsImZvY3VzIiwiaXNTZWxlY3RlZCIsIm9uVW5zZWxlY3RJdGVtIiwib25TZWxlY3RJdGVtIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsSW50b1ZpZXciLCJ1bmRlZmluZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlcXVhbHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzaG91bGRVcGRhdGUiLCJyZW5kZXIiLCJ2YWx1ZSIsImMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7O0FBWW5CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBb0NuQkMs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LFlBQVgsQ0FBd0JiLEdBQXhCLENBQTRCO0FBQUEsaUJBQzNCO0FBQ0UsaUJBQUtDLEtBQUsyQyxLQURaO0FBRUUsd0JBQVkzQyxLQUFLNkIsVUFGbkI7QUFHRSxzQkFBVTdCLEtBQUtlLFFBSGpCO0FBSUUsbUJBQU9mLEtBQUtNLEtBSmQ7QUFLRSw2QkFBaUIsT0FBS2UsZUFBTCxDQUFxQnJCLElBQXJCLENBTG5CO0FBTUUsaUJBQUssYUFBQzRDLENBQUQsRUFBTztBQUFFLHFCQUFLNUMsS0FBS0UsSUFBVixJQUFrQjBDLENBQWxCO0FBQXNCO0FBTnRDLFlBRDJCO0FBQUEsU0FBNUI7QUFESDtBQURGLEtBREY7QUFnQkQsRzs7O0VBMUg0QyxnQkFBTUMsUyxVQVE1Q0MsWSxHQUFlO0FBQ3BCNUIsaUJBQWU7QUFESyxDO2tCQVJIeEIsaUIiLCJmaWxlIjoiYXZhaWxhYmxlLWRhdGEtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgU2Nyb2xsQmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuaW1wb3J0IFV0aWxzIGZyb20gJy4vLi4vZGF0YS51dGlscyc7XG5pbXBvcnQgRGF0YUl0ZW0gZnJvbSAnLi8uLi9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhaWxhYmxlRGF0YUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0SXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblVuc2VsZWN0SXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZWFyY2hLZXl3b3JkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2VhcmNoS2V5d29yZDogJycsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLml0ZW1zID0gcHJvcHMuaXRlbXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgICBzY3JvbGxVcDogZmFsc2UsXG4gICAgICB2aXNpYmxlSXRlbXM6IHByb3BzLml0ZW1zLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5zZXRJdGVtc0xhYmVsVGV4dCh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCFuZXh0UHJvcHMuaXRlbXMuZXF1YWxzKHRoaXMucHJvcHMuaXRlbXMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZUl0ZW1zOiBuZXh0UHJvcHMuaXRlbXMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgIGlmICghcHJldlByb3BzLml0ZW1zLmVxdWFscyh0aGlzLnByb3BzLml0ZW1zKSkge1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuc2V0SXRlbXNMYWJlbFRleHQodGhpcy5wcm9wcy5pdGVtcyk7XG4gICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJldlByb3BzLnNlYXJjaEtleXdvcmQgIT09IHRoaXMucHJvcHMuc2VhcmNoS2V5d29yZCkge1xuICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcyh0aGlzLml0ZW1zLCB0aGlzLnByb3BzLnNlYXJjaEtleXdvcmQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zTGFiZWxUZXh0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtUmVmID0gdGhpc1tpdGVtLnV1aWRdO1xuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gaXRlbVJlZiA/IGl0ZW1SZWYuc3Bhbi5pbm5lclRleHQgOiBpdGVtLmxhYmVsO1xuICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgbGFiZWxUZXh0IH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHVwZGF0ZWREYXRhO1xuICB9XG5cbiAgZ2V0UmVmTmFtZSA9IChtb3ZlRG93biwgaW5kZXgpID0+IHtcbiAgICBpZiAobW92ZURvd24pIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggPiB0aGlzLnN0YXRlLnZpc2libGVJdGVtcy5zaXplIC0gMSA/IDAgOiBpbmRleDtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN0YXRlLnZpc2libGVJdGVtcy5nZXQobmV3SW5kZXgpO1xuICAgICAgaWYgKGl0ZW0uaXNMb2NrZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmTmFtZShtb3ZlRG93biwgbmV3SW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtLnV1aWQ7XG4gICAgfVxuICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggPT09IDAgPyB0aGlzLnN0YXRlLnZpc2libGVJdGVtcy5zaXplIC0gMSA6IGluZGV4IC0gMjtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMuZ2V0KG5ld0luZGV4KTtcbiAgICBpZiAoaXRlbS5pc0xvY2tlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmTmFtZShtb3ZlRG93biwgbmV3SW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbS51dWlkO1xuICB9XG5cbiAgZmlsdGVySXRlbXMgPSAoaXRlbXMsIHNlYXJjaEtleXdvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGVJdGVtczogVXRpbHMuZmlsdGVyRGF0YShpdGVtcywgc2VhcmNoS2V5d29yZCksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVJdGVtQ2xpY2sgPSBpdGVtID0+IChlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMuaW5kZXhPZihpdGVtKSArIDE7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1t0aGlzLmdldFJlZk5hbWUoZSwgaW5kZXgpXS5jaGVja2JveDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkRWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgc2Nyb2xsVXA6ICFlLFxuICAgICAgfSk7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChpdGVtLmlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25VbnNlbGVjdEl0ZW0oaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3RJdGVtKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c2VkRWxlbWVudCkge1xuICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkRWxlbWVudC5zY3JvbGxJbnRvVmlldyh0aGlzLnN0YXRlLnNjcm9sbFVwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXNlbGVjdC1vcmRlci1saXN0LWF2YWlsYWJsZS1kYXRhLWxpc3RcIj5cbiAgICAgICAgPFNjcm9sbEJhciBvblNjcm9sbFk9e3RoaXMuaGFuZGxlU2Nyb2xsfSA+XG4gICAgICAgICAge3RoaXMuc3RhdGUudmlzaWJsZUl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxEYXRhSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2l0ZW0uaXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgaXNMb2NrZWQ9e2l0ZW0uaXNMb2NrZWR9XG4gICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrKGl0ZW0pfVxuICAgICAgICAgICAgICByZWY9eyhjKSA9PiB7IHRoaXNbaXRlbS51dWlkXSA9IGM7IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Njcm9sbEJhcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==