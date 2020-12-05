import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Drawer from './index';

jest.mock('../../providers', () => ({
  useDrawer: () => ({
    toggle: () => {},
    isOpen: false,
  }),
}));

const makeProps = ({ children } = {}) => ({
  children: children || <p>Content</p>,
});

const renderComponent = (props) => shallow(<Drawer {...props} />);

describe('Drawer Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent(makeProps()))).toMatchSnapshot();
  });

  it('renders proper children', () => {
    const expectedChildren = 'Lorem';

    const wrapper = renderComponent(makeProps({ children: expectedChildren }));
    expect(wrapper.children().debug()).toEqual(expectedChildren);
  });
});
