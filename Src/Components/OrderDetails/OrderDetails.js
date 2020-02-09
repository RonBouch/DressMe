import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default OrderDetails = ({item}) => {
  const {type, name, brand, size, color} = item;
  return (
    <View style={{flexDirection: 'column', margin: 5}}>
      <Text style={s.title}>{type}</Text>
      <Text>Name : {name}</Text>
      <Text>Brand : {brand} </Text>
      <Text>Size : {size}</Text>
      <Text>Color : {color}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    fontSize: 22,
    color: 'gray',
    fontWeight: 'bold',
  },
});
