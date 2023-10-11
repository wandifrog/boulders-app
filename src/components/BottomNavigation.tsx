import React from 'react';
import {ViewStyle} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import useTheme from '../hooks/Theme.hook';
import useTranslation from '../hooks/Translation.hook';
import Button from './Button';
import HStack from './HStack';

type RootParamList = {
  Home: undefined;
  Order: undefined;
  List: undefined;
};

/**
 * BottomNavigation component.
 * @example
 * <BottomNavigation />
 */
const BottomNavigation = (): JSX.Element => {
  const navigation: NavigationProp<RootParamList> = useNavigation();
  const {language} = useTranslation();
  const colors = useTheme();

  const styBottomNavigation: ViewStyle = {
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: colors.background,
  };

  return (
    <HStack justify="space-evenly" padding={15} style={styBottomNavigation}>
      <Button
        label={language === 'id' ? 'Beranda' : 'Home'}
        width={85}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        label={language === 'id' ? 'Daftar' : 'List'}
        width={85}
        onPress={() => navigation.navigate('List')}
      />
      <Button
        label={language === 'id' ? 'Pesanan' : 'Order'}
        width={140}
        onPress={() => navigation.navigate('Order')}
      />
    </HStack>
  );
};

export default BottomNavigation;
