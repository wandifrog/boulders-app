import React from 'react';
import {ActivityIndicator, TouchableOpacity, ViewStyle} from 'react-native';
import useTheme from '../hooks/Theme.hook';
import Text from './Text';

type ButtonProps = ComponentMetrics & {
  /**
   * Button label
   */
  label?: string;
  /**
   * Button action when pressed
   */
  onPress?: () => void;
  /**
   * Button loading state.
   */
  loading?: boolean;
  /**
   * Button can't be pressed.
   */
  disabled?: boolean;
  /**
   * Button width.
   */
  width?: number;
};

/**
 * Button component.
 * @example
 * <Button />
 * <Button label="Hello" />
 * <Button label="Mengerti" onPress={() => alert('hello world')} />
 * <Button label="Aktivasi" loading />
 * <Button label="Aktivasi" disabled />
 */
const Button = ({
  top,
  right,
  bottom,
  left,
  label = 'Button',
  onPress = () => {},
  loading = false,
  disabled = false,
  width = 200,
}: ButtonProps): JSX.Element => {
  if (loading) {
    disabled = true;
  }

  const colors = useTheme();
  const textColor = disabled ? colors.textDisabled : colors.text;

  const styButton: ViewStyle = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    backgroundColor: disabled ? colors.buttonDisabled : colors.button,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    paddingHorizontal: 10,
    height: 40,
  };

  return (
    <TouchableOpacity
      style={styButton}
      onPress={() => onPress()}
      disabled={disabled}
      testID="button">
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text size={17} color={textColor} center>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
