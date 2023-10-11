import React from 'react';
import {ScrollView} from 'react-native';
import useApp from '../hooks/App.hook';
import useTranslation from '../hooks/Translation.hook';
import images from '../constants/Images.constant';
import HStack from '../components/HStack';
import Image from '../components/Image';
import Text from '../components/Text';
import VStack from '../components/VStack';

const OrderScreen = () => {
  const {t} = useTranslation();
  const [state] = useApp();
  const {orderBook} = state;

  return (
    <ScrollView>
      <HStack top={50} justify="center" align="center">
        <Image
          source={images.logoRaise}
          width={76}
          height={76}
          resizeMode="contain"
        />
        <Text left={8} size={18}>
          {t.order.pageTitle}
        </Text>
      </HStack>
      <VStack bottom={12} paddingVertical={24} paddingHorizontal={48}>
        {orderBook.map((books, index) => {
          return <Order key={index} index={(index += 1)} books={books} />;
        })}
      </VStack>
    </ScrollView>
  );
};

const Order = ({books, index}: {books: string[]; index: number}) => {
  const {t} = useTranslation();
  return (
    <VStack top={20}>
      <Text bold>
        {t.order.order} #{index}
      </Text>
      <Text>
        {t.order.bookTitle} 1: {books[0]}
      </Text>
      <Text>
        {t.order.bookTitle} 2: {books[1]}
      </Text>
      <Text>
        {t.order.bookTitle} 3: {books[2]}
      </Text>
    </VStack>
  );
};

export default OrderScreen;
