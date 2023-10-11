import React from 'react';
import {ScrollView} from 'react-native';
import {screenHeight} from '../constants/Dimension.constant';
import images from '../constants/Images.constant';
import useApp from '../hooks/App.hook';
import useTheme from '../hooks/Theme.hook';
import useTranslation from '../hooks/Translation.hook';
import Button from '../components/Button';
import HStack from '../components/HStack';
import Image from '../components/Image';
import Text from '../components/Text';
import VStack from '../components/VStack';

const HomeScreen = () => {
  const [_, dispatch] = useApp();
  const {t} = useTranslation();
  const colors = useTheme();

  function handleChangeLanguage() {
    dispatch({type: 'CHANGE_LANGUAGE'});
  }

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.background,
        flex: 1,
      }}>
      <HStack top={screenHeight / 12} justify="center">
        <Image
          source={images.logoRaise}
          width={150}
          height={150}
          resizeMode="contain"
        />
      </HStack>
      <VStack top={10} paddingHorizontal={12} align="center">
        <Text top={8} size={34} bold>
          Boulders App
        </Text>
        <Text top={4} size={20}>
          {t.global.welcome}
        </Text>
        <Button
          top={24}
          label={t.home.changeLanguage}
          onPress={() => handleChangeLanguage()}
        />
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
