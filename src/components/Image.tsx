import React from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageStyle,
} from 'react-native';
import images from '../constants/Images.constant';

type ImageProps = ComponentMetrics & RNImageProps;

/**
 * Image component.
 * @example
 * <Image />
 * <Image source={images.frog} />
 * <Image source={{uri: 'LINK_IMAGEE'}} />
 */
const Image = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  height = 300,
  width = 300,
  source = images.logoRaise,
  ...props
}: ImageProps): JSX.Element => {
  const styImage: ImageStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    width,
    height,
  };

  return (
    <RNImage
      width={width}
      height={height}
      fadeDuration={250}
      source={source}
      style={styImage}
      testID="image"
      {...props}
    />
  );
};

export default Image;
