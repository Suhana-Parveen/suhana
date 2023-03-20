import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import RestaurantCard from '../../components/RestaurantCard';

const ListingScreen = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://205.134.254.135/~mobile/interview/public/api/restaurants_list')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      setRestaurants(data.data);
    })
    .catch(error => console.error(error));
   }, []);

   const renderRestaurantItem = ({ item }) => {
    console.log(item.latitude, item.longitude);
    return (
      <RestaurantCard restaurant={item} navigation={navigation} latitude={item.latitude} longitude={item.longitude} />
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'white'}}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Restaurants</Text>
        <View />
      </View>
      <View style={styles.listContainer}>
      <FlatList
          data={restaurants}
          renderItem={renderRestaurantItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3CB371',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 64,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default ListingScreen;
