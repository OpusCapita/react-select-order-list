'use strict';

exports.__esModule = true;

var _immutable = require('immutable');

var _reactSortableHoc = require('react-sortable-hoc');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var escapeRegExp = /[-\\^$*+?.()|[\]{}]/g;
var escapeKeyword = function escapeKeyword(keyword) {
  return keyword.replace(escapeRegExp, '\\$&');
};

exports.default = {
  getAvailableDataList: function getAvailableDataList(availableData, selectedData) {
    return availableData.map(function (item, ind) {
      var isLocked = item.isLocked,
          label = item.label,
          value = item.value;

      var isSelected = selectedData.findIndex(function (i) {
        return i.value === value;
      }) !== -1;
      var sort = ind + 1;
      return {
        uuid: _shortid2.default.generate(),
        isLocked: isLocked,
        isSelected: isSelected,
        label: label,
        sort: sort,
        value: value
      };
    });
  },

  getSelectedDataList: function getSelectedDataList(selectedData) {
    return selectedData.map(function (item, ind) {
      var isLocked = item.isLocked,
          label = item.label,
          value = item.value;

      var sort = ind + 1;
      return {
        isLocked: isLocked,
        label: label,
        sort: sort,
        value: value
      };
    });
  },

  changeDataSort: function changeDataSort(dataList, oldIndex, newIndex) {
    var data = dataList.toJS();
    var changeOverLockedItems = false;
    if (oldIndex + 1 < newIndex) {
      for (var i = oldIndex; i < newIndex; i += 1) {
        if (data[i] && data[i].isLocked) {
          changeOverLockedItems = true;
        }
      }
    }
    if (oldIndex > newIndex + 1) {
      for (var _i = oldIndex; _i > newIndex; _i -= 1) {
        if (data[_i] && data[_i].isLocked) {
          changeOverLockedItems = true;
        }
      }
    }
    var sortedData = [];
    if (changeOverLockedItems) {
      // Swap items if sorting is done over locked item to keep it in place
      var _i2 = void 0;
      _i2 = data.length;
      while (_i2 > 0) {
        _i2 -= 1;
        sortedData[_i2] = data[_i2];
      }
      sortedData[oldIndex] = data[newIndex];
      sortedData[newIndex] = data[oldIndex];
    } else {
      // Normal sorting move all other items up/down
      sortedData = (0, _reactSortableHoc.arrayMove)(data, oldIndex, newIndex);
    }
    return (0, _immutable.List)(sortedData);
  },

  filterData: function filterData(data, keyword) {
    var filteredData = void 0;
    if (keyword !== '') {
      var regexp = new RegExp(escapeKeyword(keyword), 'i');
      filteredData = data.filter(function (i) {
        return regexp.test(i.labelText || i.label);
      });
    } else {
      filteredData = data;
    }
    return filteredData;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhLnV0aWxzLmpzIl0sIm5hbWVzIjpbImVzY2FwZVJlZ0V4cCIsImVzY2FwZUtleXdvcmQiLCJrZXl3b3JkIiwicmVwbGFjZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiYXZhaWxhYmxlRGF0YSIsInNlbGVjdGVkRGF0YSIsIm1hcCIsIml0ZW0iLCJpbmQiLCJpc0xvY2tlZCIsImxhYmVsIiwidmFsdWUiLCJpc1NlbGVjdGVkIiwiZmluZEluZGV4IiwiaSIsInNvcnQiLCJ1dWlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiZ2V0U2VsZWN0ZWREYXRhTGlzdCIsImNoYW5nZURhdGFTb3J0IiwiZGF0YUxpc3QiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiZGF0YSIsInRvSlMiLCJjaGFuZ2VPdmVyTG9ja2VkSXRlbXMiLCJzb3J0ZWREYXRhIiwibGVuZ3RoIiwiZmlsdGVyRGF0YSIsImZpbHRlcmVkRGF0YSIsInJlZ2V4cCIsIlJlZ0V4cCIsImZpbHRlciIsInRlc3QiLCJsYWJlbFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEsZUFBZSxzQkFBckI7QUFDQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsU0FBV0MsUUFBUUMsT0FBUixDQUFnQkgsWUFBaEIsRUFBOEIsTUFBOUIsQ0FBWDtBQUFBLENBQXRCOztrQkFFZTtBQUNiSSx3QkFBc0IsOEJBQUNDLGFBQUQsRUFBZ0JDLFlBQWhCO0FBQUEsV0FDcEJELGNBQWNFLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFBQSxVQUN2QkMsUUFEdUIsR0FDSUYsSUFESixDQUN2QkUsUUFEdUI7QUFBQSxVQUNiQyxLQURhLEdBQ0lILElBREosQ0FDYkcsS0FEYTtBQUFBLFVBQ05DLEtBRE0sR0FDSUosSUFESixDQUNOSSxLQURNOztBQUUvQixVQUFNQyxhQUFhUCxhQUFhUSxTQUFiLENBQXVCO0FBQUEsZUFB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bXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuXG5jb25zdCBlc2NhcGVSZWdFeHAgPSAvWy1cXFxcXiQqKz8uKCl8W1xcXXt9XS9nO1xuY29uc3QgZXNjYXBlS2V5d29yZCA9IGtleXdvcmQgPT4ga2V5d29yZC5yZXBsYWNlKGVzY2FwZVJlZ0V4cCwgJ1xcXFwkJicpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEF2YWlsYWJsZURhdGFMaXN0OiAoYXZhaWxhYmxlRGF0YSwgc2VsZWN0ZWREYXRhKSA9PiAoXG4gICAgYXZhaWxhYmxlRGF0YS5tYXAoKGl0ZW0sIGluZCkgPT4ge1xuICAgICAgY29uc3QgeyBpc0xvY2tlZCwgbGFiZWwsIHZhbHVlIH0gPSBpdGVtO1xuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkRGF0YS5maW5kSW5kZXgoaSA9PiBpLnZhbHVlID09PSB2YWx1ZSkgIT09IC0xO1xuICAgICAgY29uc3Qgc29ydCA9IGluZCArIDE7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1dWlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIGlzTG9ja2VkLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgc29ydCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9O1xuICAgIH0pXG4gICksXG5cbiAgZ2V0U2VsZWN0ZWREYXRhTGlzdDogc2VsZWN0ZWREYXRhID0+IChcbiAgICBzZWxlY3RlZERhdGEubWFwKChpdGVtLCBpbmQpID0+IHtcbiAgICAgIGNvbnN0IHsgaXNMb2NrZWQsIGxhYmVsLCB2YWx1ZSB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IHNvcnQgPSBpbmQgKyAxO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNMb2NrZWQsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBzb3J0LFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH07XG4gICAgfSlcbiAgKSxcblxuICBjaGFuZ2VEYXRhU29ydDogKGRhdGFMaXN0LCBvbGRJbmRleCwgbmV3SW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZGF0YUxpc3QudG9KUygpO1xuICAgIGxldCBjaGFuZ2VPdmVyTG9ja2VkSXRlbXMgPSBmYWxzZTtcbiAgICBpZiAob2xkSW5kZXggKyAxIDwgbmV3SW5kZXgpIHtcbiAgICAgIGZvciAobGV0IGkgPSBvbGRJbmRleDsgaSA8IG5ld0luZGV4OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGRhdGFbaV0gJiYgZGF0YVtpXS5pc0xvY2tlZCkge1xuICAgICAgICAgIGNoYW5nZU92ZXJMb2NrZWRJdGVtcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9sZEluZGV4ID4gbmV3SW5kZXggKyAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gb2xkSW5kZXg7IGkgPiBuZXdJbmRleDsgaSAtPSAxKSB7XG4gICAgICAgIGlmIChkYXRhW2ldICYmIGRhdGFbaV0uaXNMb2NrZWQpIHtcbiAgICAgICAgICBjaGFuZ2VPdmVyTG9ja2VkSXRlbXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzb3J0ZWREYXRhID0gW107XG4gICAgaWYgKGNoYW5nZU92ZXJMb2NrZWRJdGVtcykge1xuICAgICAgLy8gU3dhcCBpdGVtcyBpZiBzb3J0aW5nIGlzIGRvbmUgb3ZlciBsb2NrZWQgaXRlbSB0byBrZWVwIGl0IGluIHBsYWNlXG4gICAgICBsZXQgaTtcbiAgICAgIGkgPSBkYXRhLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICBpIC09IDE7XG4gICAgICAgIHNvcnRlZERhdGFbaV0gPSBkYXRhW2ldO1xuICAgICAgfVxuICAgICAgc29ydGVkRGF0YVtvbGRJbmRleF0gPSBkYXRhW25ld0luZGV4XTtcbiAgICAgIHNvcnRlZERhdGFbbmV3SW5kZXhdID0gZGF0YVtvbGRJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBzb3J0aW5nIG1vdmUgYWxsIG90aGVyIGl0ZW1zIHVwL2Rvd25cbiAgICAgIHNvcnRlZERhdGEgPSBhcnJheU1vdmUoZGF0YSwgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIExpc3Qoc29ydGVkRGF0YSk7XG4gIH0sXG5cbiAgZmlsdGVyRGF0YTogKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICBsZXQgZmlsdGVyZWREYXRhO1xuICAgIGlmIChrZXl3b3JkICE9PSAnJykge1xuICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChlc2NhcGVLZXl3b3JkKGtleXdvcmQpLCAnaScpO1xuICAgICAgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoaSA9PiByZWdleHAudGVzdChpLmxhYmVsVGV4dCB8fCBpLmxhYmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJlZERhdGE7XG4gIH0sXG59O1xuIl19