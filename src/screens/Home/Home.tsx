import React, { memo, useEffect, useState } from 'react';

import { addToCart, incrementCount } from '@store/reducers/cardSlice';
import { auth } from 'config/firebase';
import { signOut } from 'firebase/auth';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

const Home = () => {
  const handleLogout = async () => {
    try {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (error) {}
  };
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const itemsCount = useSelector((state: any) => state.itemsCount);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts([{}]);
  }, [products, itemsCount]);

  const getItemsCount = () => {
    dispatch(incrementCount());
  };

  const addToWishListHandler = () => {
    dispatch(addToCart());
    getItemsCount();
  };

  const addCartHandler = () => {
    dispatch(addToCart());
    getItemsCount();
  };

  const loadBooks = (book: any) => {
    return (
      <TouchableOpacity
        disabled
        onPress={() => {
          // navigation.navigate('ProductDetails', {});
        }}>
        <View style={styles.productMain}>
          <View style={{ width: '35%', height: 200 }}>
            <Image
              style={{
                width: '100%',
                height: '95%',
                resizeMode: 'contain',
                borderRadius: 5,
              }}
              source={{
                uri: 'https://play-lh.googleusercontent.com/_tslXR7zUXgzpiZI9t70ywHqWAxwMi8LLSfx8Ab4Mq4NUTHMjFNxVMwTM1G0Q-XNU80',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              alignContent: 'center',
              marginLeft: 20,
            }}>
            <View style={{ overFlow: 'hidden' }}>
              <Text numberOfLines={1} style={styles.text}>
                'title'
              </Text>
            </View>
            <Text style={{ color: '#666666' }}>Category : 3</Text>
            <Text style={styles.text}>Price : ${22}</Text>
            <Rating
              startingValue={Math.floor(parseInt(5))}
              ratingCount={5}
              imageSize={25}
              ratingBackgroundColor="black"
            />
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {}}>
                <Text style={{ color: '#FF543C', fontWeight: 'bold' }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                {/* <Fontisto
                  name="heart"
                  size={33}
                  color="#FF543C"
                  style={{ marginLeft: 10 }}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <TextStyles>{'Home'}</TextStyles>
      <TouchableOpacity onPress={handleLogout}>
        <Text>{'Logout'}</Text>
      </TouchableOpacity>
      <FlatList data={filteredProducts} renderItem={loadBooks} />
    </Container>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const TextStyles = styled.Text``;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  bookMain: {
    marginTop: 10,
    width: '100%',
    height: 500,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  productMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
    backgroundColor: 'red',
  },
  text: {
    color: 'black',
    // fontFamily: 'halfmoon_bold',
    fontSize: 15,
    fontWeight: 'bold',
    overflow: 'hidden',
    width: '90%',
  },
  addToCartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 135,
    backgroundColor: 'white',
    borderRadius: 3,
    borderColor: '#FF543C',
    borderWidth: 1,
  },
});

export default memo(Home);
