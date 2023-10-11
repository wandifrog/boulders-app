import React from 'react';
import {render as _render, fireEvent} from '@testing-library/react-native';
import {AppProvider} from '../../contexts/App.context';
import Button from '../Button';
import 'react-native';

describe('Button component', () => {
  const render = (children: any) =>
    _render(<AppProvider>{children}</AppProvider>);

  it('renders correctly with default label', () => {
    const {getByText} = render(<Button />);
    const buttonElement = getByText('Button');
    expect(buttonElement).toBeTruthy();
  });

  it('renders with a custom label', () => {
    const label = 'Custom Label';
    const {getByText} = render(<Button label={label} />);
    const buttonElement = getByText(label);
    expect(buttonElement).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button label="Test Button" onPress={onPressMock} />,
    );
    const buttonElement = getByText('Test Button');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('disables the button when loading is true', () => {
    const {getByTestId} = render(
      <Button label="Loading Button" loading={true} />,
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeDisabled();
  });

  it('disables the button when disabled is true', () => {
    const {getByTestId} = render(
      <Button label="Disabled Button" disabled={true} />,
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeDisabled();
  });
});
