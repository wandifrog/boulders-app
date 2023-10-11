import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Spacer from '../Spacer';

describe('Spacer', () => {
  it('should render a `View` component with a flex value of 1', () => {
    render(<Spacer />);

    const spacer = screen.getByTestId('spacer');

    expect(spacer).toHaveStyle({flex: 1});
  });
});
