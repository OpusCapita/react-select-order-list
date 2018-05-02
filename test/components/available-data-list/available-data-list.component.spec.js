/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { List } from 'immutable';
import AvailableDataList from '../../../src/available-data-list/available-data-list.component';

describe('Available data list component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      onSelectItem: () => {},
      onUnselectItem: () => {},
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
    const wrapper = mount(<AvailableDataList {...props} />);
    expect(wrapper.find('.oc-select-order-list-available-data-list').exists()).to.equal(true);
    const spy = sinon.spy(wrapper.instance(), 'handleItemClick');
    wrapper.instance().handleItemClick({ value: 1 });
    expect(spy.called).to.be.true;
    wrapper.unmount();
  });

  it('should filter items correctly', function it() {
    const props = {
      onSelectItem: () => {},
      onUnselectItem: () => {},
      items: List([
        {
          uuid: 1,
          value: 1,
          label: 'one',
        },
        {
          uuid: 2,
          value: 2,
          label: 'two',
        },
        {
          uuid: 3,
          value: 3,
          label: 'three',
        },
      ]),
    };
    const wrapper = mount(<AvailableDataList {...props} />);
    expect(wrapper.find('.oc-select-order-list-available-data-list').exists()).to.equal(true);
    expect(wrapper.find('.oc-select-order-list-available-data-item').length).to.equal(3);
    wrapper.setProps({ searchKeyword: 'two' });
    wrapper.update();
    expect(wrapper.find('.oc-select-order-list-available-data-item').length).to.equal(1);
    wrapper.unmount();
  });
});
