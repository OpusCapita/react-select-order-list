/* eslint-disable no-nested-ternary */
import { arrayMove } from 'react-sortable-hoc';

const escapeRegExp = /[-\\^$*+?.()|[\]{}]/g;
const escapeKeyword = keyword => keyword.replace(escapeRegExp, '\\$&');

export default {
  getAvailableData: data => (
    data.map((d) => {
      const key = d.key;
      const label = d.label;
      const isSelected = d.isSelected;
      const priority = d.priority === undefined ? -1 : d.priority;
      return {
        key,
        label,
        isSelected,
        priority,
      };
    })
  ),

  getSelectedData: (visibleData) => {
    const sortedData = visibleData.slice();
    sortedData.sort((a, b) => a.priority > b.priority);
    return sortedData.filter(d => d.isSelected === true);
  },

  changeDataSort: (data, oldIndex, newIndex) => arrayMove(data, oldIndex, newIndex),

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
