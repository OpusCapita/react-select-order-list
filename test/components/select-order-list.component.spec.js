/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { List } from 'immutable';

import SelectOrderList from '../../src/index';

describe('Select and order list component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      onChange: () => {},
      availableData: List([
        {
          label: 'one',
          value: 1,
        },
        {
          label: 'two',
          value: 2,
        },
        {
          label: 'three',
          value: 3,
        },
      ]),
      selectedData: List([
        {
          label: 'two',
          value: 2,
        },
        {
          label: 'three',
          value: 3,
        },
      ]),
    };
    const wrapper = mount(<SelectOrderList {...props} />);
    expect(wrapper.find('.oc-select-order-list-keyword-input').exists()).to.equal(true);
    let spy;
    spy = sinon.spy(wrapper.instance(), 'handleKeywordChange');
    wrapper.instance().handleKeywordChange('test');
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleSortChange');
    wrapper.instance().handleSortChange(1, 2);
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleSelectItem');
    wrapper.instance().handleSelectItem({ value: 1 });
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleUnselectItem');
    wrapper.instance().handleUnselectItem({ value: 1 });
    expect(spy.called).to.be.true;
    wrapper.unmount();
  });
});
