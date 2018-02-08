/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DataItem from '../../../src/available-data-item/available-data-item.component';

describe('Available data item component', function describe() {
  it('should render correctly', function it() {
    const props = {
      isSelected: true,
      label: 'Item 1',
      handleItemClick: () => {},
    };
    const wrapper = mount(<DataItem {...props} />);
    expect(wrapper.find('.oc-select-order-list-available-data-item').exists()).to.be.true;
    wrapper.unmount();
  });
});
