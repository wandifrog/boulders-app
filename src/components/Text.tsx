import React from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {fontSize} from '../constants/Fonts.constant';
import useTheme from '../hooks/Theme.hook';

type FTextProps = ComponentMetrics &
  TextProps & {
    children: any;
    /**
     * Font weight bold
     */
    bold?: boolean;
    /**
     * Text color
     */
    color?: string;
    /**
     * Text align center
     */
    center?: boolean;
    /**
     * Font size
     */
    size?: number;
    /**
     * Line height
     */
    lineHeight?: number;
  };

/**
 * Text component.
 * @example
 * <FText>Hello</FText>
 * <FText left={5} size={10}>World</FText>
 * <FText bold center color="red">!!</FText>
 */
const Text = ({
  children,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  bold = false,
  center = false,
  color,
  size = fontSize.normal,
  style,
  ...props
}: FTextProps): JSX.Element => {
  const colors = useTheme();

  const styText: TextStyle = {
    color: color || colors.text,
    // fontFamily: bold ? fontFamily.poppinsSemiBold : fontFamily.poppinsRegular,
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
    textAlign: center ? 'center' : undefined,
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  };

  return (
    <RNText style={[styText, style]} testID="text" {...props}>
      {children}
    </RNText>
  );
};

export default Text;
