import React from 'react';
import {render as _render, screen} from '@testing-library/react-native';
import HStack from '../HStack';
import Text from '../Text';
import {AppProvider} from '../../contexts/App.context';

describe('HStack', () => {
  const render = (children: any) =>
    _render(<AppProvider>{children}</AppProvider>);

  it('should render the correct children', () => {
    render(
      <HStack>
        <Text>Hello</Text>
        <Text>World</Text>
      </HStack>,
    );

    const helloText = screen.getByText('Hello');
    const worldText = screen.getByText('World');

    expect(helloText).toBeDefined();
    expect(worldText).toBeDefined();
  });

  it('should apply the correct style', () => {
    const style = {
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    };

    render(
      <HStack style={style}>
        <Text>Hello</Text>
        <Text>World</Text>
      </HStack>,
    );

    const hStack = screen.getByTestId('hstack');

    expect(hStack).toHaveStyle(style);
  });

  it('should pass other props to the `View` component', () => {
    const testId = 'hstack';

    render(
      <HStack testID={testId}>
        <Text>Hello</Text>
        <Text>World</Text>
      </HStack>,
    );

    const hStack = screen.getByTestId(testId);

    expect(hStack).toHaveProp('testID', testId);
  });
});
