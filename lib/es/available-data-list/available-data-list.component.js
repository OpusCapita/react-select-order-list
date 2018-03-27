function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ScrollBar from '@opuscapita/react-perfect-scrollbar';

import DataItem from './../available-data-item/available-data-item.component';

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

    return React.createElement(
      'div',
      { className: 'oc-select-order-list-available-data-list' },
      React.createElement(
        ScrollBar,
        { onScrollY: this.handleScroll },
        this.props.items.map(function (item) {
          return React.createElement(DataItem, {
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
}(React.Component);

export { AvailableDataList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdmFpbGFibGUtZGF0YS1saXN0L2F2YWlsYWJsZS1kYXRhLWxpc3QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkltbXV0YWJsZVByb3BUeXBlcyIsIlNjcm9sbEJhciIsIkRhdGFJdGVtIiwiQXZhaWxhYmxlRGF0YUxpc3QiLCJwcm9wcyIsImdldFJlZk5hbWUiLCJtb3ZlRG93biIsImluZGV4IiwibmV3SW5kZXgiLCJpdGVtcyIsInNpemUiLCJpdGVtIiwiZ2V0IiwiaXNMb2NrZWQiLCJsYWJlbCIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJlbGVtZW50Iiwic29ydCIsImlucHV0Iiwic2V0U3RhdGUiLCJmb2N1c2VkRWxlbWVudCIsInNjcm9sbFVwIiwiZm9jdXMiLCJpc1NlbGVjdGVkIiwib25VbnNlbGVjdEl0ZW0iLCJvblNlbGVjdEl0ZW0iLCJoYW5kbGVTY3JvbGwiLCJzdGF0ZSIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwicmVuZGVyIiwibWFwIiwidmFsdWUiLCJjIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLDJCQUEvQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IscUNBQXRCOztBQUVBLE9BQU9DLFFBQVAsTUFBcUIsd0RBQXJCOztJQUVxQkMsaUI7OztBQU9uQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQSxVQVFuQkMsVUFSbUIsR0FRTixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDaEMsVUFBSUQsUUFBSixFQUFjO0FBQ1osWUFBTUUsWUFBV0QsUUFBUSxNQUFLSCxLQUFMLENBQVdLLEtBQVgsQ0FBaUJDLElBQWpCLEdBQXdCLENBQWhDLEdBQW9DLENBQXBDLEdBQXdDSCxLQUF6RDtBQUNBLFlBQU1JLFFBQU8sTUFBS1AsS0FBTCxDQUFXSyxLQUFYLENBQWlCRyxHQUFqQixDQUFxQkosU0FBckIsQ0FBYjtBQUNBLFlBQUlHLE1BQUtFLFFBQVQsRUFBbUI7QUFDakIsaUJBQU8sTUFBS1IsVUFBTCxDQUFnQkMsUUFBaEIsRUFBMEJFLFlBQVcsQ0FBckMsQ0FBUDtBQUNEO0FBQ0QsZUFBT0csTUFBS0csS0FBWjtBQUNEO0FBQ0QsVUFBTU4sV0FBV0QsVUFBVSxDQUFWLEdBQWMsTUFBS0gsS0FBTCxDQUFXSyxLQUFYLENBQWlCQyxJQUFqQixHQUF3QixDQUF0QyxHQUEwQ0gsUUFBUSxDQUFuRTtBQUNBLFVBQU1JLE9BQU8sTUFBS1AsS0FBTCxDQUFXSyxLQUFYLENBQWlCRyxHQUFqQixDQUFxQkosUUFBckIsQ0FBYjtBQUNBLFVBQUlHLEtBQUtFLFFBQVQsRUFBbUI7QUFDakIsZUFBTyxNQUFLUixVQUFMLENBQWdCQyxRQUFoQixFQUEwQkUsUUFBMUIsQ0FBUDtBQUNEO0FBQ0QsYUFBT0csS0FBS0csS0FBWjtBQUNELEtBdkJrQjs7QUFBQSxVQXlCbkJDLGVBekJtQixHQXlCRDtBQUFBLGFBQVEsVUFBQ0MsQ0FBRCxFQUFPO0FBQy9CLFlBQUksT0FBT0EsQ0FBUCxLQUFhLFNBQWpCLEVBQTRCO0FBQzFCLGNBQU1DLFVBQVUsTUFBSyxNQUFLWixVQUFMLENBQWdCVyxDQUFoQixFQUFtQkwsS0FBS08sSUFBeEIsQ0FBTCxFQUFvQ0MsS0FBcEQ7QUFDQSxnQkFBS0MsUUFBTCxDQUFjO0FBQ1pDLDRCQUFnQkosT0FESjtBQUVaSyxzQkFBVSxDQUFDTjtBQUZDLFdBQWQ7QUFJQUMsa0JBQVFNLEtBQVI7QUFDRCxTQVBELE1BT08sSUFBSVosS0FBS2EsVUFBVCxFQUFxQjtBQUMxQixnQkFBS3BCLEtBQUwsQ0FBV3FCLGNBQVgsQ0FBMEJkLElBQTFCO0FBQ0QsU0FGTSxNQUVBO0FBQ0wsZ0JBQUtQLEtBQUwsQ0FBV3NCLFlBQVgsQ0FBd0JmLElBQXhCO0FBQ0Q7QUFDRixPQWJpQjtBQUFBLEtBekJDOztBQUFBLFVBd0NuQmdCLFlBeENtQixHQXdDSixZQUFNO0FBQ25CLFVBQUksTUFBS0MsS0FBTCxDQUFXUCxjQUFmLEVBQStCO0FBQzdCLGNBQUtPLEtBQUwsQ0FBV1AsY0FBWCxDQUEwQlEsY0FBMUIsQ0FBeUMsTUFBS0QsS0FBTCxDQUFXTixRQUFwRDtBQUNBLGNBQUtGLFFBQUwsQ0FBYztBQUNaQywwQkFBZ0JTO0FBREosU0FBZDtBQUdEO0FBQ0YsS0EvQ2tCOztBQUVqQixVQUFLRixLQUFMLEdBQWE7QUFDWFAsc0JBQWdCUyxTQURMO0FBRVhSLGdCQUFVO0FBRkMsS0FBYjtBQUZpQjtBQU1sQjs7OEJBMkNEUyxNLHFCQUFTO0FBQUE7O0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBDQUFmO0FBQ0U7QUFBQyxpQkFBRDtBQUFBLFVBQVcsV0FBVyxLQUFLSixZQUEzQjtBQUNHLGFBQUt2QixLQUFMLENBQVdLLEtBQVgsQ0FBaUJ1QixHQUFqQixDQUFxQjtBQUFBLGlCQUNwQixvQkFBQyxRQUFEO0FBQ0UsaUJBQUtyQixLQUFLc0IsS0FEWjtBQUVFLHdCQUFZdEIsS0FBS2EsVUFGbkI7QUFHRSxzQkFBVWIsS0FBS0UsUUFIakI7QUFJRSxtQkFBT0YsS0FBS0csS0FKZDtBQUtFLDZCQUFpQixPQUFLQyxlQUFMLENBQXFCSixJQUFyQixDQUxuQjtBQU1FLGlCQUFLLGFBQUN1QixDQUFELEVBQU87QUFBRSxxQkFBS3ZCLEtBQUtHLEtBQVYsSUFBbUJvQixDQUFuQjtBQUF1QjtBQU52QyxZQURvQjtBQUFBLFNBQXJCO0FBREg7QUFERixLQURGO0FBZ0JELEc7OztFQXpFNENwQyxNQUFNcUMsUzs7U0FBaENoQyxpQiIsImZpbGUiOiJhdmFpbGFibGUtZGF0YS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG5pbXBvcnQgRGF0YUl0ZW0gZnJvbSAnLi8uLi9hdmFpbGFibGUtZGF0YS1pdGVtL2F2YWlsYWJsZS1kYXRhLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhaWxhYmxlRGF0YUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0SXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblVuc2VsZWN0SXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgIHNjcm9sbFVwOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmVmTmFtZSA9IChtb3ZlRG93biwgaW5kZXgpID0+IHtcbiAgICBpZiAobW92ZURvd24pIHtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggPiB0aGlzLnByb3BzLml0ZW1zLnNpemUgLSAxID8gMCA6IGluZGV4O1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuaXRlbXMuZ2V0KG5ld0luZGV4KTtcbiAgICAgIGlmIChpdGVtLmlzTG9ja2VkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlZk5hbWUobW92ZURvd24sIG5ld0luZGV4ICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbS5sYWJlbDtcbiAgICB9XG4gICAgY29uc3QgbmV3SW5kZXggPSBpbmRleCA9PT0gMCA/IHRoaXMucHJvcHMuaXRlbXMuc2l6ZSAtIDEgOiBpbmRleCAtIDI7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuaXRlbXMuZ2V0KG5ld0luZGV4KTtcbiAgICBpZiAoaXRlbS5pc0xvY2tlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmTmFtZShtb3ZlRG93biwgbmV3SW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbS5sYWJlbDtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IGl0ZW0gPT4gKGUpID0+IHtcbiAgICBpZiAodHlwZW9mIGUgPT09ICdib29sZWFuJykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXNbdGhpcy5nZXRSZWZOYW1lKGUsIGl0ZW0uc29ydCldLmlucHV0O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRFbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBzY3JvbGxVcDogIWUsXG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vblVuc2VsZWN0SXRlbShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdEl0ZW0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLnN0YXRlLmZvY3VzZWRFbGVtZW50LnNjcm9sbEludG9WaWV3KHRoaXMuc3RhdGUuc2Nyb2xsVXApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Mtc2VsZWN0LW9yZGVyLWxpc3QtYXZhaWxhYmxlLWRhdGEtbGlzdFwiPlxuICAgICAgICA8U2Nyb2xsQmFyIG9uU2Nyb2xsWT17dGhpcy5oYW5kbGVTY3JvbGx9ID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8RGF0YUl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpdGVtLmlzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGlzTG9ja2VkPXtpdGVtLmlzTG9ja2VkfVxuICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgaGFuZGxlSXRlbUNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGljayhpdGVtKX1cbiAgICAgICAgICAgICAgcmVmPXsoYykgPT4geyB0aGlzW2l0ZW0ubGFiZWxdID0gYzsgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2Nyb2xsQmFyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19