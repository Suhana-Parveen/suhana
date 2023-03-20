import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RatingBar from './RatingBar';

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();
  const { title, rating, latitude, longitude } = restaurant;
  console.log("LAT LONG"+restaurant.latitude+restaurant.longitude)
  const handlePress = (latitude,longitude) => {
    navigation.navigate("MapScreen", {latitude,longitude});
    console.log("HANDLE PRESS "+ latitude + longitude);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(latitude, longitude)}    >
      <Image source={require('../../res/assets/img.png')} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{title}</Text>
        <View style={styles.ratingContainer}>
          <RatingBar rating={rating} />
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.mapContainer}>
          <Image source={require('../../res/assets/map.png')} style={styles.mapImage} />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    borderRadius: 10,
    marginBottom:20
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
    borderRadius: 8,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 16,
    color: '#999',
  },
  mapContainer: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    padding: 5,
  },
  mapImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default RestaurantCard;
