import React from 'react';
import {render as _render, screen} from '@testing-library/react-native';
import Text from '../Text';
import {AppProvider} from '../../contexts/App.context';
import VStack from '../VStack';

describe('VStack', () => {
  const render = (children: any) =>
    _render(<AppProvider>{children}</AppProvider>);

  it('should render the correct children', () => {
    render(
      <VStack>
        <Text>Hello</Text>
        <Text>World</Text>
      </VStack>,
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
      <VStack style={style}>
        <Text>Hello</Text>
        <Text>World</Text>
      </VStack>,
    );

    const vstackId = screen.getByTestId('vstack');

    expect(vstackId).toHaveStyle(style);
  });

  it('should pass other props to the `View` component', () => {
    const testId = 'vstack';

    render(
      <VStack testID={testId}>
        <Text>Hello</Text>
        <Text>World</Text>
      </VStack>,
    );

    const vstackId = screen.getByTestId(testId);

    expect(vstackId).toHaveProp('testID', testId);
  });
});
