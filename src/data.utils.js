import { List } from 'immutable';
import { arrayMove } from 'react-sortable-hoc';
import shortid from 'shortid';


const escapeRegExp = /[-\\^$*+?.()|[\]{}]/g;
const escapeKeyword = keyword => keyword.replace(escapeRegExp, '\\$&');

export default {
  getAvailableDataList: (availableData, selectedData) => (
    availableData.map((item, ind) => {
      const { isLocked, label, value } = item;
      const isSelected = selectedData.findIndex(i => i.value === value) !== -1;
      const sort = ind + 1;
      return {
        uuid: shortid.generate(),
        isLocked,
        isSelected,
        label,
        sort,
        value,
      };
    })
  ),

  getSelectedDataList: selectedData => (
    selectedData.map((item, ind) => {
      const { isLocked, label, value } = item;
      const sort = ind + 1;
      return {
        isLocked,
        label,
        sort,
        value,
      };
    })
  ),

  changeDataSort: (dataList, oldIndex, newIndex) => {
    const data = dataList.toJS();
    let changeOverLockedItems = false;
    if (oldIndex + 1 < newIndex) {
      for (let i = oldIndex; i < newIndex; i += 1) {
        if (data[i] && data[i].isLocked) {
          changeOverLockedItems = true;
        }
      }
    }
    if (oldIndex > newIndex + 1) {
      for (let i = oldIndex; i > newIndex; i -= 1) {
        if (data[i] && data[i].isLocked) {
          changeOverLockedItems = true;
        }
      }
    }
    let sortedData = [];
    if (changeOverLockedItems) {
      // Swap items if sorting is done over locked item to keep it in place
      let i;
      i = data.length;
      while (i > 0) {
        i -= 1;
        sortedData[i] = data[i];
      }
      sortedData[oldIndex] = data[newIndex];
      sortedData[newIndex] = data[oldIndex];
    } else {
      // Normal sorting move all other items up/down
      sortedData = arrayMove(data, oldIndex, newIndex);
    }
    return List(sortedData);
  },

  filterData: (data, keyword) => {
    let filteredData;
    if (keyword !== '') {
      const regexp = new RegExp(escapeKeyword(keyword), 'i');
      filteredData = data.filter(i => regexp.test(i.labelText || i.label));
    } else {
      filteredData = data;
    }
    return filteredData;
  },
};
