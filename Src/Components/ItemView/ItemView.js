import {Text, TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import React, {Component} from 'react';
import {inject} from 'mobx-react';
@inject('CollectionsStore')
export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      viewSize: -1,
      color: '',
    };
  }

  onAddItem = async (item, size) => {
    let Item = {
      ...item,
      color: this.state.color,
      size,
    };
    this.props.CollectionsStore.addItem(Item);
    this.props.props.navigation.navigate('Home');
  };

  render() {
    const {key, item} = this.props;
    return (
      <View key={key} style={s.itemView}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text style={s.txtItem}>
              {item.brand} - {item.name}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            {item.colors.map((color, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{padding: 5}}
                  onPress={() =>
                    this.setState({
                      viewSize: key,
                      check: !this.state.check,
                      color,
                    })
                  }>
                  <Text style={{color: color, fontWeight: 'bold'}}>
                    {color}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {this.state.viewSize == key && this.state.check
            ? item.sizes.map((size, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      Alert.alert('You Sure', 'Do you want this item?', [
                        {
                          text: 'Cancel',
                          onPress: () => {
                            return null;
                          },
                        },
                        {
                          text: 'Confirm',
                          onPress: () => {
                            this.onAddItem(item, size);
                          },
                        },
                      ])
                    }>
                    <Text>{size}</Text>
                  </TouchableOpacity>
                );
              })
            : null}
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
  },
  title: {
    fontSize: 22,
    color: 'gray',
    fontWeight: 'bold',
  },
  itemView: {
    margin: 20,
  },
  txtItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sizeButton: {
    elevation: 10,
    backgroundColor: 'rgba(50, 90, 90,.6)',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 2,
  },
});
