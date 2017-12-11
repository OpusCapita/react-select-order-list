/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DataItem from '../../../src/list-control/available-list/available-item.component';

describe('available item component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      key: 1,
      isSelected: true,
      label: '',
      handleItemClick: () => {},
    };
    const wrapper = mount(<DataItem {...props} />);
    expect(wrapper.find('.oc-available-data-item').exists()).to.equal(true);
    wrapper.unmount();
  });
});
