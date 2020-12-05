import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Info from './index';

const mockWarn = jest.fn();
const mockClearWarning = jest.fn();

jest.mock('../../providers', () => ({
  useSystem: () => ({
    warn: mockWarn,
    clearWarning: mockClearWarning,
  }),
}));

const makeProps = ({ icon, title, value, suffix, min, max, warning, edit, onChange } = {}) => ({
  icon: icon || 'battery',
  title: title || 'Battery',
  value: value || 100,
  suffix: suffix || '%',
  min: min || 0,
  max: max || 0,
  warning: warning || 'Battery level not ideal',
  edit: edit || false,
  onChange: onChange || (() => {}),
});

const renderComponent = (props) => shallow(<Info {...props} />);

describe('Info Component', () => {
  it('renders correctly according to snapshot', () => {
    expect(toJson(renderComponent(makeProps()))).toMatchSnapshot();
  });

  it('calls warn function with warning value if value is faulty', () => {
    const warning = 'Battery level bad.';
    renderComponent(makeProps({ value: 10, min: 30, max: 100, warning }));

    expect(mockWarn.mock.calls[0][0]).toEqual(warning);
  });

  it('calls clearWarning function if value is good', () => {
    const warning = 'Battery level bad.';
    renderComponent(makeProps({ value: 50, min: 30, max: 100, warning }));

    expect(mockClearWarning).toHaveBeenCalled();
  });
});
