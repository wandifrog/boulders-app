import React, {ReactNode} from 'react';
import {DimensionValue, FlexAlignType, View, ViewStyle} from 'react-native';

type HStackProps = ComponentMetrics & {
  children: ReactNode;
  /**
   * Align items
   */
  align?: FlexAlignType;
  /**
   * Justify content
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * Padding
   */
  padding?: number | string;
  /**
   * Width
   */
  width?: DimensionValue;
  /**
   * Height
   */
  height?: DimensionValue;
  /**
   * Style
   */
  style?: ViewStyle;
};

/**
 * Horizontal Stack component.
 * @example
 * <HStack>
 *   <WFText>Hello</WFText>
 *   <WFText>wWrld</WFText>
 * </HStack>
 */
const HStack = ({
  children,
  top,
  right,
  bottom,
  left,
  width,
  height,
  align,
  justify,
  padding,
  paddingHorizontal,
  paddingVertical,
  style,
  ...props
}: HStackProps): JSX.Element => {
  const styHStack: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    width,
    height,
    alignItems: align,
    flexDirection: 'row',
    justifyContent: justify,
    padding,
    paddingHorizontal,
    paddingVertical,
    ...style,
  };

  return (
    <View style={styHStack} testID="hstack" {...props}>
      {children}
    </View>
  );
};

export default HStack;
