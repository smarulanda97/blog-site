import React from 'react';
import { shallow } from 'enzyme';
import Index from '../../pages/index.js';

test('Render page <Index/>', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper.find('TopPosts')).toHaveLength(1);
});
