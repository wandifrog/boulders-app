import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Image from '../Image';
import images from '../../constants/Images.constant';

describe('Image', () => {
  it('should render the correct image', () => {
    const source = images.bgYamato;

    render(<Image source={source} />);

    const image = screen.getByTestId('image');

    expect(image).toHaveProp('source', source);
  });

  it('should apply the correct style', () => {
    const style = {
      width: 200,
      height: 100,
    };

    render(<Image style={style} />);

    const image = screen.getByTestId('image');

    expect(image).toHaveStyle(style);
  });

  it('should pass other props to the `RNImage` component', () => {
    const testId = 'image';

    render(<Image testId={testId} />);

    const image = screen.getByTestId(testId);

    expect(image).toHaveProp('testID', testId);
  });
});
