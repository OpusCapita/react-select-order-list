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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhLnV0aWxzLmpzIl0sIm5hbWVzIjpbImVzY2FwZVJlZ0V4cCIsImVzY2FwZUtleXdvcmQiLCJrZXl3b3JkIiwicmVwbGFjZSIsImdldEF2YWlsYWJsZURhdGFMaXN0IiwiYXZhaWxhYmxlRGF0YSIsInNlbGVjdGVkRGF0YSIsIm1hcCIsIml0ZW0iLCJpbmQiLCJpc0xvY2tlZCIsImxhYmVsIiwidmFsdWUiLCJpc1NlbGVjdGVkIiwiZmluZEluZGV4IiwiaSIsInNvcnQiLCJ1dWlkIiwiZ2VuZXJhdGUiLCJnZXRTZWxlY3RlZERhdGFMaXN0IiwiY2hhbmdlRGF0YVNvcnQiLCJkYXRhTGlzdCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJkYXRhIiwidG9KUyIsImNoYW5nZU92ZXJMb2NrZWRJdGVtcyIsInNvcnRlZERhdGEiLCJsZW5ndGgiLCJmaWx0ZXJEYXRhIiwiZmlsdGVyZWREYXRhIiwicmVnZXhwIiwiUmVnRXhwIiwiZmlsdGVyIiwidGVzdCIsImxhYmVsVGV4dCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxlQUFlLHNCQUFyQjtBQUNBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxTQUFXQyxRQUFRQyxPQUFSLENBQWdCSCxZQUFoQixFQUE4QixNQUE5QixDQUFYO0FBQUEsQ0FBdEI7O2tCQUVlO0FBQ2JJLHdCQUFzQiw4QkFBQ0MsYUFBRCxFQUFnQkMsWUFBaEI7QUFBQSxXQUNwQkQsY0FBY0UsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUFBLFVBQ3ZCQyxRQUR1QixHQUNJRixJQURKLENBQ3ZCRSxRQUR1QjtBQUFBLFVBQ2JDLEtBRGEsR0FDSUgsSUFESixDQUNiRyxLQURhO0FBQUEsVUFDTkMsS0FETSxHQUNJSixJQURKLENBQ05JLEtBRE07O0FBRS9CLFVBQU1DLGFBQWFQLGFBQWFRLFNBQWIsQ0FBdUI7QUFBQSxlQUFLQyxFQUFFSCxL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dCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgeyBhcnJheU1vdmUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cblxuY29uc3QgZXNjYXBlUmVnRXhwID0gL1stXFxcXF4kKis/LigpfFtcXF17fV0vZztcbmNvbnN0IGVzY2FwZUtleXdvcmQgPSBrZXl3b3JkID0+IGtleXdvcmQucmVwbGFjZShlc2NhcGVSZWdFeHAsICdcXFxcJCYnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBdmFpbGFibGVEYXRhTGlzdDogKGF2YWlsYWJsZURhdGEsIHNlbGVjdGVkRGF0YSkgPT4gKFxuICAgIGF2YWlsYWJsZURhdGEubWFwKChpdGVtLCBpbmQpID0+IHtcbiAgICAgIGNvbnN0IHsgaXNMb2NrZWQsIGxhYmVsLCB2YWx1ZSB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZERhdGEuZmluZEluZGV4KGkgPT4gaS52YWx1ZSA9PT0gdmFsdWUpICE9PSAtMTtcbiAgICAgIGNvbnN0IHNvcnQgPSBpbmQgKyAxO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXVpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICBpc0xvY2tlZCxcbiAgICAgICAgaXNTZWxlY3RlZCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfTtcbiAgICB9KVxuICApLFxuXG4gIGdldFNlbGVjdGVkRGF0YUxpc3Q6IHNlbGVjdGVkRGF0YSA9PiAoXG4gICAgc2VsZWN0ZWREYXRhLm1hcCgoaXRlbSwgaW5kKSA9PiB7XG4gICAgICBjb25zdCB7IGlzTG9ja2VkLCBsYWJlbCwgdmFsdWUgfSA9IGl0ZW07XG4gICAgICBjb25zdCBzb3J0ID0gaW5kICsgMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTG9ja2VkLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgc29ydCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9O1xuICAgIH0pXG4gICksXG5cbiAgY2hhbmdlRGF0YVNvcnQ6IChkYXRhTGlzdCwgb2xkSW5kZXgsIG5ld0luZGV4KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFMaXN0LnRvSlMoKTtcbiAgICBsZXQgY2hhbmdlT3ZlckxvY2tlZEl0ZW1zID0gZmFsc2U7XG4gICAgaWYgKG9sZEluZGV4ICsgMSA8IG5ld0luZGV4KSB7XG4gICAgICBmb3IgKGxldCBpID0gb2xkSW5kZXg7IGkgPCBuZXdJbmRleDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChkYXRhW2ldICYmIGRhdGFbaV0uaXNMb2NrZWQpIHtcbiAgICAgICAgICBjaGFuZ2VPdmVyTG9ja2VkSXRlbXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRJbmRleCA+IG5ld0luZGV4ICsgMSkge1xuICAgICAgZm9yIChsZXQgaSA9IG9sZEluZGV4OyBpID4gbmV3SW5kZXg7IGkgLT0gMSkge1xuICAgICAgICBpZiAoZGF0YVtpXSAmJiBkYXRhW2ldLmlzTG9ja2VkKSB7XG4gICAgICAgICAgY2hhbmdlT3ZlckxvY2tlZEl0ZW1zID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc29ydGVkRGF0YSA9IFtdO1xuICAgIGlmIChjaGFuZ2VPdmVyTG9ja2VkSXRlbXMpIHtcbiAgICAgIC8vIFN3YXAgaXRlbXMgaWYgc29ydGluZyBpcyBkb25lIG92ZXIgbG9ja2VkIGl0ZW0gdG8ga2VlcCBpdCBpbiBwbGFjZVxuICAgICAgbGV0IGk7XG4gICAgICBpID0gZGF0YS5sZW5ndGg7XG4gICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgICBzb3J0ZWREYXRhW2ldID0gZGF0YVtpXTtcbiAgICAgIH1cbiAgICAgIHNvcnRlZERhdGFbb2xkSW5kZXhdID0gZGF0YVtuZXdJbmRleF07XG4gICAgICBzb3J0ZWREYXRhW25ld0luZGV4XSA9IGRhdGFbb2xkSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgc29ydGluZyBtb3ZlIGFsbCBvdGhlciBpdGVtcyB1cC9kb3duXG4gICAgICBzb3J0ZWREYXRhID0gYXJyYXlNb3ZlKGRhdGEsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBMaXN0KHNvcnRlZERhdGEpO1xuICB9LFxuXG4gIGZpbHRlckRhdGE6IChkYXRhLCBrZXl3b3JkKSA9PiB7XG4gICAgbGV0IGZpbHRlcmVkRGF0YTtcbiAgICBpZiAoa2V5d29yZCAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlS2V5d29yZChrZXl3b3JkKSwgJ2knKTtcbiAgICAgIGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKGkgPT4gcmVnZXhwLnRlc3QoaS5sYWJlbFRleHQgfHwgaS5sYWJlbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJlZERhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWREYXRhO1xuICB9LFxufTtcbiJdfQ==