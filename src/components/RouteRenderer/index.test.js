import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import RouteRenderer from './index';

import routes from '../../routes';

jest.mock('../../routes', () => [
  {
    path: '/lorem',
    name: 'Lorem',
    icon: 'lorem',
    exact: true,
  },
  {
    path: '/ipsum',
    name: 'Ipsum',
    icon: 'Ipsum',
    exact: false,
  },
]);

const renderComponent = () => shallow(<RouteRenderer />);

describe('RouteRenderer Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });

  it('renders proper number of routes', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('Route').length).toBe(routes.length);
  });
});
