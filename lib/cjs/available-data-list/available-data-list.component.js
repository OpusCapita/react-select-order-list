'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _availableDataItem = require('./../available-data-item/available-data-item.component');

var _availableDataItem2 = _interopRequireDefault(_availableDataItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailableDataList = function (_React$Component) {
  _inherits(AvailableDataList, _React$Component);

  function AvailableDataList(props) {
    _classCallCheck(this, AvailableDataList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.getRefName = function (moveDown, index) {
      if (moveDown) {
        var _newIndex = index > _this.props.items.size - 1 ? 0 : index;
        var _item = _this.props.items.get(_newIndex);
        if (_item.isLocked) {
          return _this.getRefName(moveDown, _newIndex + 1);
        }
        return _item.label;
      }
      var newIndex = index === 0 ? _this.props.items.size - 1 : index - 2;
      var item = _this.props.items.get(newIndex);
      if (item.isLocked) {
        return _this.getRefName(moveDown, newIndex);
      }
      return item.label;
    };

    _this.handleItemClick = function (item) {
      return function (e) {
        if (typeof e === 'boolean') {
          var element = _this[_this.getRefName(e, item.sort)].input;
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

    _this.state = {
      focusedElement: undefined,
      scrollUp: false
    };
    return _this;
  }

  AvailableDataList.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-list' },
      _react2.default.createElement(
        _reactPerfectScrollbar2.default,
        { onScrollY: this.handleScroll },
        this.props.items.map(function (item) {
          return _react2.default.createElement(_availableDataItem2.default, {
            key: item.value,
            isSelected: item.isSelected,
            isLocked: item.isLocked,
            label: item.label,
            handleItemClick: _this2.handleItemClick(item),
            ref: function ref(c) {
              _this2[item.label] = c;
            }
          });
        })
      )
    );
  };

  return AvailableDataList;
}(_react2.default.Component);

exports.default = AvailableDataList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBdmFpbGFibGVEYXRhTGlzdCIsInByb3BzIiwiZ2V0UmVmTmFtZSIsIm1vdmVEb3duIiwiaW5kZXgiLCJuZXdJbmRleCIsIml0ZW1zIiwic2l6ZSIsIml0ZW0iLCJnZXQiLCJpc0xvY2tlZCIsImxhYmVsIiwiaGFuZGxlSXRlbUNsaWNrIiwiZSIsImVsZW1lbnQiLCJzb3J0IiwiaW5wdXQiLCJzZXRTdGF0ZSIsImZvY3VzZWRFbGVtZW50Iiwic2Nyb2xsVXAiLCJmb2N1cyIsImlzU2VsZWN0ZWQiLCJvblVuc2VsZWN0SXRlbSIsIm9uU2VsZWN0SXRlbSIsImhhbmRsZVNjcm9sbCIsInN0YXRlIiwic2Nyb2xsSW50b1ZpZXciLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJtYXAiLCJ2YWx1ZSIsImMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7O0FBT25CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBUW5CQyxVQVJtQixHQVFOLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUNoQyxVQUFJRCxRQUFKLEVBQWM7QUFDWixZQUFNRSxZQUFXRCxRQUFRLE1BQUtILEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsSUFBakIsR0FBd0IsQ0FBaEMsR0FBb0MsQ0FBcEMsR0FBd0NILEtBQXpEO0FBQ0EsWUFBTUksUUFBTyxNQUFLUCxLQUFMLENBQVdLLEtBQVgsQ0FBaUJHLEdBQWpCLENBQXFCSixTQUFyQixDQUFiO0FBQ0EsWUFBSUcsTUFBS0UsUUFBVCxFQUFtQjtBQUNqQixpQkFBTyxNQUFLUixVQUFMLENBQWdCQyxRQUFoQixFQUEwQkUsWUFBVyxDQUFyQyxDQUFQO0FBQ0Q7QUFDRCxlQUFPRyxNQUFLRyxLQUFaO0FBQ0Q7QUFDRCxVQUFNTixXQUFXRCxVQUFVLENBQVYsR0FBYyxNQUFLSCxLQUFMLENBQVdLLEtBQVgsQ0FBaUJDLElBQWpCLEdBQXdCLENBQXRDLEdBQTBDSCxRQUFRLENBQW5FO0FBQ0EsVUFBTUksT0FBTyxNQUFLUCxLQUFMLENBQVdLLEtBQVgsQ0FBaUJHLEdBQWpCLENBQXFCSixRQUFyQixDQUFiO0FBQ0EsVUFBSUcsS0FBS0UsUUFBVCxFQUFtQjtBQUNqQixlQUFPLE1BQUtSLFVBQUwsQ0FBZ0JDLFFBQWhCLEVBQTBCRSxRQUExQixDQUFQO0FBQ0Q7QUFDRCxhQUFPRyxLQUFLRyxLQUFaO0FBQ0QsS0F2QmtCOztBQUFBLFVBeUJuQkMsZUF6Qm1CLEdBeUJEO0FBQUEsYUFBUSxVQUFDQyxDQUFELEVBQU87QUFDL0IsWUFBSSxPQUFPQSxDQUFQLEtBQWEsU0FBakIsRUFBNEI7QUFDMUIsY0FBTUMsVUFBVSxNQUFLLE1BQUtaLFVBQUwsQ0FBZ0JXLENBQWhCLEVBQW1CTCxLQUFLTyxJQUF4QixDQUFMLEVBQW9DQyxLQUFwRDtBQUNBLGdCQUFLQyxRQUFMLENBQWM7QUFDWkMsNEJBQWdCSixPQURKO0FBRVpLLHNCQUFVLENBQUNOO0FBRkMsV0FBZDtBQUlBQyxrQkFBUU0sS0FBUjtBQUNELFNBUEQsTUFPTyxJQUFJWixLQUFLYSxVQUFULEVBQXFCO0FBQzFCLGdCQUFLcEIsS0FBTCxDQUFXcUIsY0FBWCxDQUEwQmQsSUFBMUI7QUFDRCxTQUZNLE1BRUE7QUFDTCxnQkFBS1AsS0FBTCxDQUFXc0IsWUFBWCxDQUF3QmYsSUFBeEI7QUFDRDtBQUNGLE9BYmlCO0FBQUEsS0F6QkM7O0FBQUEsVUF3Q25CZ0IsWUF4Q21CLEdBd0NKLFlBQU07QUFDbkIsVUFBSSxNQUFLQyxLQUFMLENBQVdQLGNBQWYsRUFBK0I7QUFDN0IsY0FBS08sS0FBTCxDQUFXUCxjQUFYLENBQTBCUSxjQUExQixDQUF5QyxNQUFLRCxLQUFMLENBQVdOLFFBQXBEO0FBQ0EsY0FBS0YsUUFBTCxDQUFjO0FBQ1pDLDBCQUFnQlM7QUFESixTQUFkO0FBR0Q7QUFDRixLQS9Da0I7O0FBRWpCLFVBQUtGLEtBQUwsR0FBYTtBQUNYUCxzQkFBZ0JTLFNBREw7QUFFWFIsZ0JBQVU7QUFGQyxLQUFiO0FBRmlCO0FBTWxCOzs4QkEyQ0RTLE0scUJBQVM7QUFBQTs7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsMENBQWY7QUFDRTtBQUFBO0FBQUEsVUFBVyxXQUFXLEtBQUtKLFlBQTNCO0FBQ0csYUFBS3ZCLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQnVCLEdBQWpCLENBQXFCO0FBQUEsaUJBQ3BCO0FBQ0UsaUJBQUtyQixLQUFLc0IsS0FEWjtBQUVFLHdCQUFZdEIsS0FBS2EsVUFGbkI7QUFHRSxzQkFBVWIsS0FBS0UsUUFIakI7QUFJRSxtQkFBT0YsS0FBS0csS0FKZDtBQUtFLDZCQUFpQixPQUFLQyxlQUFMLENBQXFCSixJQUFyQixDQUxuQjtBQU1FLGlCQUFLLGFBQUN1QixDQUFELEVBQU87QUFBRSxxQkFBS3ZCLEtBQUtHLEtBQVYsSUFBbUJvQixDQUFuQjtBQUF1QjtBQU52QyxZQURvQjtBQUFBLFNBQXJCO0FBREg7QUFERixLQURGO0FBZ0JELEc7OztFQXpFNEMsZ0JBQU1DLFM7O2tCQUFoQ2hDLGlCIiwiZmlsZSI6ImF2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCBEYXRhSXRlbSBmcm9tICcuLy4uL2F2YWlsYWJsZS1kYXRhLWl0ZW0vYXZhaWxhYmxlLWRhdGEtaXRlbS5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmFpbGFibGVEYXRhTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVW5zZWxlY3RJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgc2Nyb2xsVXA6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBnZXRSZWZOYW1lID0gKG1vdmVEb3duLCBpbmRleCkgPT4ge1xuICAgIGlmIChtb3ZlRG93bikge1xuICAgICAgY29uc3QgbmV3SW5kZXggPSBpbmRleCA+IHRoaXMucHJvcHMuaXRlbXMuc2l6ZSAtIDEgPyAwIDogaW5kZXg7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5pdGVtcy5nZXQobmV3SW5kZXgpO1xuICAgICAgaWYgKGl0ZW0uaXNMb2NrZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmTmFtZShtb3ZlRG93biwgbmV3SW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xuICAgIH1cbiAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ID09PSAwID8gdGhpcy5wcm9wcy5pdGVtcy5zaXplIC0gMSA6IGluZGV4IC0gMjtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5pdGVtcy5nZXQobmV3SW5kZXgpO1xuICAgIGlmIChpdGVtLmlzTG9ja2VkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZWZOYW1lKG1vdmVEb3duLCBuZXdJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtLmxhYmVsO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNsaWNrID0gaXRlbSA9PiAoZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpc1t0aGlzLmdldFJlZk5hbWUoZSwgaXRlbS5zb3J0KV0uaW5wdXQ7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZEVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHNjcm9sbFVwOiAhZSxcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVW5zZWxlY3RJdGVtKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcodGhpcy5zdGF0ZS5zY3JvbGxVcCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy1zZWxlY3Qtb3JkZXItbGlzdC1hdmFpbGFibGUtZGF0YS1saXN0XCI+XG4gICAgICAgIDxTY3JvbGxCYXIgb25TY3JvbGxZPXt0aGlzLmhhbmRsZVNjcm9sbH0gPlxuICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxEYXRhSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2l0ZW0uaXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgaXNMb2NrZWQ9e2l0ZW0uaXNMb2NrZWR9XG4gICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrKGl0ZW0pfVxuICAgICAgICAgICAgICByZWY9eyhjKSA9PiB7IHRoaXNbaXRlbS5sYWJlbF0gPSBjOyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TY3JvbGxCYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=