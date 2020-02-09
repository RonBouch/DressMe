import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';

export default BtnCheck = props => {
  return (
    <TouchableOpacity
      style={[
        s.finishButton,
        {backgroundColor: props.exist ? 'red' : 'rgba(208, 222, 9,.9)'},
      ]}
      onPress={() => props.navigation.navigate(props.name,{name:props.name,})}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  finishButton: {
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: 'rgba(208, 222, 9,.9)',
    borderRadius: 20,
    height: 35,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
});
