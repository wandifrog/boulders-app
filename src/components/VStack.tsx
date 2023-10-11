import React, {ReactNode} from 'react';
import {DimensionValue, FlexAlignType, View, ViewStyle} from 'react-native';

type VStackProps = ComponentMetrics & {
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
 * Vertical Stack component.
 * @example
 * <VStack>
 *   <WFText>Hello</WFText>
 *   <WFText>wWrld</WFText>
 * </VStack>
 */
const VStack = ({
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
}: VStackProps): JSX.Element => {
  const styVStack: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    width,
    height,
    alignItems: align,
    flexDirection: 'column',
    justifyContent: justify,
    padding,
    paddingHorizontal,
    paddingVertical,
    ...style,
  };

  return (
    <View style={styVStack} testID="vstack" {...props}>
      {children}
    </View>
  );
};

export default VStack;
