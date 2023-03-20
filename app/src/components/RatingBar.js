import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MAX_RATING = 5; // maximum rating
const filledStar = require('../../res/assets/starFill.png');
const emptyStar = require('../../res/assets/starEmpty.png');

const RatingBar = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2; // round the rating to the nearest 0.5
  const filledStars = Math.floor(roundedRating); // number of filled stars
  const hasHalfStar = roundedRating % 1 !== 0; // whether the rating has a half star

  return (
    <View style={styles.container}>
      {[...Array(MAX_RATING)].map((_, index) => (
        <TouchableOpacity key={index}>
          <Image
            source={index < filledStars ? filledStar : emptyStar}
            style={styles.star}
          />
          {/* {hasHalfStar && index === filledStars && (
            <Image source={require('../../res/assets/starEmpty.png')} style={styles.star} />
          )} */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});

export default RatingBar;
