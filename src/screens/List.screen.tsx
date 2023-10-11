import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {openLibrary} from '../constants/Api.connstant';
import useApp from '../hooks/App.hook';
import useFetch from '../hooks/Fetch.hook';
import useTheme from '../hooks/Theme.hook';
import useTranslation from '../hooks/Translation.hook';
import Text from '../components/Text';
import VStack from '../components/VStack';

type BookListProps = {
  title: string;
  author: string;
  editionNumber: number;
  bookInformation: string[];
  pickUpDate: any;
};

const ListScreen = () => {
  const navigation = useNavigation();
  const [_, dispatch] = useApp();
  const {t} = useTranslation();
  const colors = useTheme();
  const {data, isLoading} = useFetch<Subject>(openLibrary.getSubjects);
  const [bookList, setBookList] = useState<BookListProps[]>([]);
  const [orderBook, setOrderBook] = useState<string[]>([]);

  useEffect(() => {
    const newBookList = data?.works.map(book => ({
      title: book.title,
      author: book.authors[0].name,
      editionNumber: book.edition_count,
      bookInformation: book.subject.slice(0, 3),
      pickUpDate: book.availability.available_to_borrow,
    }));
    setBookList(newBookList);
  }, [data]);

  useEffect(() => {
    if (orderBook.length === 3) {
      dispatch({type: 'SET_ORDER_BOOK', orderBook});
      setOrderBook([]);
      navigation.navigate('Order');
    }
  }, [orderBook, dispatch, navigation]);

  function handleClick(index: number) {
    const newOrderBook = [...orderBook];
    newOrderBook.push(bookList[index].title);
    setOrderBook(newOrderBook);

    const newBookList = bookList.filter((_, bookIndex) => bookIndex !== index);
    setBookList(newBookList);
  }

  console.log(orderBook);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.background,
        paddingBottom: 12,
      }}>
      <VStack align="center" padding={12} style={{flex: 1}}>
        <Text bottom={12} center size={30}>
          {t.list.pageTitle}
        </Text>
        {isLoading ? (
          <Text center>{t.global.loading}</Text>
        ) : (
          bookList.map((book, index) => (
            <TouchableOpacity
              key={index}
              style={{marginBottom: 5, padding: 10}}
              onPress={() => handleClick(index)}>
              <Text center bold>
                {t.list.bookTitle}: {book.title}
              </Text>
              <Text center>{book.bookInformation.join(', ')}</Text>
              <Text center>
                {t.list.editionNumber}: {book.editionNumber}
              </Text>
              <Text center>
                {t.list.availableToBorrow}? {book.pickUpDate ? 'Yes' : 'No'}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </VStack>
    </ScrollView>
  );
};

export default ListScreen;
