/* eslint-disable no-nested-ternary */
import { List } from 'immutable';
import { arrayMove } from 'react-sortable-hoc';

const escapeRegExp = /[-\\^$*+?.()|[\]{}]/g;
const escapeKeyword = keyword => keyword.replace(escapeRegExp, '\\$&');

export default {

  getSelectedData: (visibleData) => {
    const sortedData = visibleData.slice();
    sortedData.sort((a, b) => a.priority > b.priority);
    return sortedData.filter(d => d.isSelected === true);
  },

  changeDataSort(items, oldIndex, newIndex) {
    let lockedItems = [];
    for (let i = Math.min(oldIndex, newIndex) + 1; i < Math.max(oldIndex, newIndex); i += 1) {
      const item = items.get(i);
      if (item.isLocked) {
        lockedItems.push({ object: item, index: i });
      }
    }
    if (oldIndex < newIndex) {
      lockedItems = lockedItems.reverse();
    }
    let data = arrayMove(items.toArray(), oldIndex, newIndex);
    for (let i = 0; i < lockedItems.length; i += 1) {
      const oldItemIndex = data.indexOf(lockedItems[i].object);
      const newItemIndex = lockedItems[i].index;
      data = arrayMove(data, oldItemIndex, newItemIndex);
    }
    return List(data);
  },

  filterData: (data, keyword) => {
    let filteredData;
    if (keyword !== '') {
      const regexp = new RegExp(escapeKeyword(keyword), 'i');
      filteredData = data.filter(c => regexp.test(c.label));
    } else {
      filteredData = data;
    }
    return filteredData;
  },
};

