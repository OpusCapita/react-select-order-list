/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SelectedDataList from '../../../src/list-control/selected-list/selected-list.component';

describe('selected list component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      onSortChange: () => {},
      onRemoveItem: () => {},
      items: [
        {
          key: 1,
          label: 'one',
          isSelected: false,
          priority: -1,
        },
        {
          key: 2,
          label: 'two',
          isSelected: true,
          priority: 1,
        },
        {
          key: 3,
          label: 'three',
          isSelected: true,
          priority: 0,
        },
      ],
    };
    const wrapper = mount(<SelectedDataList {...props} />);
    expect(wrapper.find('.oc-icon-remove').exists()).to.equal(true);
    let spy;
    spy = sinon.spy(wrapper.instance(), 'shouldCancelStart');
    wrapper.instance().shouldCancelStart({ target: { className: { baseVal: ['oc-icon-remove'] } } });
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'handleItemRemove');
    wrapper.instance().handleItemRemove(1);
    expect(spy.called).to.be.true;
    wrapper.unmount();
  });
});
