import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {observer, inject} from 'mobx-react';
import {BtnCheck, MenuBar} from '../../Components/Button';
import {CollectionType} from '../../utils/enums';

@inject('CollectionsStore')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.CollectionsStore.fetchDataAsync();
  }

  render() {
    const {CollectionsStore} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 70}}>
        <MenuBar navigation={this.props.navigation} />

        <View style={{}}>
          <Text style={{fontSize: 20}}>Dress me application</Text>

          <Text>sum of set - {CollectionsStore.sumOfSet}</Text>
        </View>

        <View style={{flex: 1, margin: 10, justifyContent: 'space-around'}}>
          {Object.keys(CollectionType).map((item, index) => {
            return (
              <BtnCheck
                key={index}
                name={item.toLowerCase()}
                exist={CollectionsStore.items[index]}
                navigation={this.props.navigation}
              />
            );
          })}

          <View>
            {!CollectionsStore.items.includes(null) ? (
              <TouchableOpacity
                style={s.finishButton}
                onPress={() => this.props.navigation.navigate('Finish')}>
                <Text>Finish</Text>
              </TouchableOpacity>
            ) : (
              <Text style={s.txtErr}>Select your collection</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
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
  txtErr: {
    color: 'red',
  },
  menuSide: {
    position: 'absolute',
    left: 5,
    width: 60,
    height: 60,
  },
});
