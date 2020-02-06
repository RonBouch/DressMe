import {Text, TouchableOpacity, View, StyleSheet,Alert} from 'react-native';
import React, {Component} from 'react';
import { inject} from 'mobx-react';
import CollectionType from '../../Components/CollectionType'

@inject('CollectionsStore')
export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      viewSize: -1,
      color:""
    };
  }

  onAddItem = async item => {
      let color=this.state.color;
      switch (this.props.type) {
          case CollectionType.SHOES:
          await this.props.CollectionsStore.addShoes({item,color});
              break;
          case CollectionType.PANTS:
          await this.props.CollectionsStore.addPants({item,color});
          break;
          case CollectionType.SHIRT:
          await this.props.CollectionsStore.addShirt({item,color});

          break;
          default:
              break;
      }
   
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
          <TouchableOpacity >
            <Text style={s.txtItem}>
              {item.brand} - {item.type}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
          {item.colors.map((color,i)=>{
           return(
            <TouchableOpacity key={i} style={{padding:5}}  onPress={() =>
              this.setState({viewSize: key, check: !this.state.check,color:color})
            } >
              <Text style={{color:color,fontWeight:'bold'}}>{color}</Text>
            </TouchableOpacity>
           )
          })}
          </View>
       
          {this.state.viewSize == key && this.state.check == true
            ? item.sizes.map((size, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                       onPress={  () =>Alert.alert(
                  'You Sure',
                  'Do you want this item?',
                  [
                    {text: 'Cancel', onPress: () => {return null}},
                    {text: 'Confirm', onPress: () => {
                      this.onAddItem({item,size})
              }}])}
                    >
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
