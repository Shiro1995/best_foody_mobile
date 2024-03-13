import React, { memo, useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';
import { addToCart, incrementCount } from '@store/reducers/cardSlice';
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
    setFilteredProducts([1, 2, 3]);
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

  const loadBooks = ({ item, index }: { item: any; index: number }) => {
    return (
      <ItemProduct
        // disabled

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
                Book number {index + 1}
              </Text>
            </View>
            <Text style={{ color: '#666666' }}>Category : 3</Text>
            <Text style={styles.text}>Price : ${22}</Text>
            <Rating
              startingValue={Math.floor(parseInt(5))}
              ratingCount={5}
              imageSize={25}
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
      </ItemProduct>
    );
  };
  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <TextLogout>{'Logout'}</TextLogout>
      </LogoutButton>
      <FlatList
        data={filteredProducts}
        renderItem={loadBooks}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Container>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;
const LogoutButton = styled.TouchableOpacity`
  border-radius: 5px;
  width: 100px;
  align-self: flex-end;
`;
const TextLogout = styled.Text`
  font-size: 15px;
  text-align: center;
  padding-vertical: 5px;
  background-color: yellow;
  color: red;
`;

const ItemProduct = styled.TouchableOpacity``;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  bookMain: {
    marginTop: 10,
    width: '100%',
    height: 500,
    borderWidth: 1,
    borderRadius: 5,
  },
  productMain: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    marginBottom: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
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
