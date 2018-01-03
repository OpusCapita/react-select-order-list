/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { List } from 'immutable';
import AvailableColumnsList from '../../../src/list-control/available-list/available-list.component';

describe('available list component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      onSelectItem: () => {},
      onDeselectItem: () => {},
      items: List([
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
      ]),
    };
    const wrapper = mount(<AvailableColumnsList {...props} />);
    expect(wrapper.find('.oc-available-data-list').exists()).to.equal(true);
    let spy;
    spy = sinon.spy(wrapper.instance(), 'handleItemClick');
    wrapper.instance().handleItemClick([]);
    expect(spy.called).to.be.true;
    wrapper.unmount();
  });
});
