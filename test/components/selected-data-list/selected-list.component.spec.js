/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { List } from 'immutable';

import SelectedDataList from '../../../src/selected-data-list/selected-data-list.component';

describe('Selected data list component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      onSortChange: () => {},
      onRemoveItem: () => {},
      items: List([
        {
          value: 1,
          label: 'one',
        },
        {
          value: 2,
          label: 'two',
        },
        {
          value: 3,
          label: 'three',
        },
      ]),
    };
    const wrapper = mount(<SelectedDataList {...props} />);
    expect(wrapper.find('.oc-select-order-list-remove-icon').exists()).to.equal(true);
    let spy;
    spy = sinon.spy(wrapper.instance(), 'shouldCancelStart');
    wrapper.instance().shouldCancelStart({ target: { className: { baseVal: ['oc-select-order-list-remove-icon'] } } });
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleItemRemove');
    wrapper.instance().handleItemRemove({ value: 1 });
    expect(spy.called).to.be.true;
    wrapper.unmount();
  });
});
