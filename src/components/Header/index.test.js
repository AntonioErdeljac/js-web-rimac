import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Header from './index';

const mockGetStatus = jest.fn();
const mockGetAlertMessage = jest.fn();

jest.mock('../../providers', () => ({
  useSystem: () => ({
    getStatus: mockGetStatus,
    getAlertMessage: mockGetAlertMessage,
  }),
}));

const renderComponent = () => shallow(<Header />);

describe('Drawer Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent())).toMatchSnapshot();
  });

  it('calls getStatus and getAlertMessage on mount', () => {
    renderComponent();

    expect(mockGetStatus).toHaveBeenCalled();
    expect(mockGetAlertMessage).toHaveBeenCalled();
  });
});
