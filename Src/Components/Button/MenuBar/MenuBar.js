import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from 'react-navigation-drawer';

export default MenuBar = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      style={s.menuSide}>
      <Icon name="bars" type="font-awesome" color="black" size={28} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  menuSide: {
    position: 'absolute',
    left: 5,
    width: 60,
    height: 60,
  },
});
