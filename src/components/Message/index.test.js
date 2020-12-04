import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Message from './index';

const makeProps = ({ description, icon, variant } = {}) => ({
  description: description || 'All systems operational',
  icon: icon || 'exclamation-circle',
  variant: variant || 'success',
});

const renderComponent = (props) => shallow(<Message {...props} />);

describe('Message Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent(makeProps()))).toMatchSnapshot();
  });

  it('renders proper description', () => {
    const expectedDescription = 'Lorem Ipsum';

    const wrapper = renderComponent(makeProps({ description: expectedDescription, icon: null }));
    expect(wrapper.find('.ml-2').text()).toEqual(expectedDescription);
  });
});
