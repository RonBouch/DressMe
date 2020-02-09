import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default OrderDetails = props => {
  return (
    <View style={{flexDirection: 'column', margin: 5}}>
      <Text style={s.title}>{props.item.type}</Text>
      <Text>Name : {props.item.name}</Text>
      <Text>Brand : {props.item.brand} </Text>
      <Text>Size : {props.item.size}</Text>
      <Text>Color : {props.item.color}</Text>
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
