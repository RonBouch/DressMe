import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from 'react-navigation-drawer';

export default ContentDrawer = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.drawerTransparent}
      onPress={() => props.navigation.goBack()}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.drawer}
        disabled={false}>
        <TouchableHighlight
          underlayColor={'rgba(0,0,0,0.2)'}
          onPress={() => {
            props.navigation.navigate('Home');
            props.navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <View style={styles.row}>
            <Icon
              style={{width: '25%', textAlign: 'center'}}
              name="home"
              type="font-awesome"
              color="gray"
              size={20}
            />
            <Text style={styles.text}>Home</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'rgba(0,0,0,0.2)'}
          onPress={() => {
            props.navigation.navigate('DressMeScreen', {name: 'shoes'});
            props.navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <View style={styles.row}>
            <Icon
              style={{width: '25%', textAlign: 'center'}}
              name="search-plus"
              type="font-awesome"
              color="gray"
              size={20}
            />
            <Text style={styles.text}>Shoes</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'rgba(0,0,0,0.2)'}
          onPress={() => {
            props.navigation.navigate('DressMeScreen', {name: 'pants'});
            props.navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <View style={styles.row}>
            <Icon
              style={{width: '25%', textAlign: 'center'}}
              name="search-plus"
              type="font-awesome"
              color="gray"
              size={20}
            />
            <Text style={styles.text}>Pants</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'rgba(0,0,0,0.2)'}
          onPress={() => {
            props.navigation.navigate('DressMeScreen', {name: 'shirt'});
            props.navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <View style={styles.row}>
            <Icon
              style={{width: '25%', textAlign: 'center'}}
              name="search-plus"
              type="font-awesome"
              color="gray"
              size={20}
            />
            <Text style={styles.text}>Shirt</Text>
          </View>
        </TouchableHighlight>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerTransparent: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  drawer: {
    width: '70%',
    height: '86%',
    backgroundColor: 'white',
    elevation: 10,
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#6495ed',
    justifyContent: 'center',
  },
  headerImage: {
    borderRadius: 100,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
  },
  menu: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 50,
    alignSelf: 'center',
  },
  text: {
    width: '45%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: 'gray',
    elevation: 3,
    margin: 15,
  },
});
