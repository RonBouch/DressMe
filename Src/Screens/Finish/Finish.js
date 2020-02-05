import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import OrderDetails from '../../Components/OrderDetails'
import {observer,inject} from 'mobx-react'
import Icon from "react-native-vector-icons/FontAwesome";

@inject('CollectionsStore')
export default class Finish extends Component {
    constructor(props) {
        super(props);
    }
    handleSumbit = () => {
        this.props.CollectionsStore.addSet();
        this.props.navigation.navigate('Home');
      };
    render() {
        console.log("finish  ",this.props)
        const {CollectionsStore}=this.props;

        return (
          <View style={s.container}>
          <Image source={{uri:('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Commons-emblem-success.svg/1024px-Commons-emblem-success.svg.png')}} style={{width:200,height:200}}/>
              <View style={{flexDirection:'row',}} >
              <OrderDetails item={CollectionsStore.myShoes} />
              <OrderDetails item={CollectionsStore.myPants} />
              <OrderDetails item={CollectionsStore.myShirt} />
              </View>
              <TouchableOpacity style={s.addButton} onPress={this.handleSumbit}>
              <Icon
                  style={{ width: "25%", textAlign: "center" }}
                  name="plus-square"
                  type="font-awesome"
                  color="gray"
                  size={28}
                />
              </TouchableOpacity>
      </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop:70,
      justifyContent:'space-around'
    },
    title:{
      fontSize:22,
      color :'gray',
      fontWeight:'bold'
    },
    itemView:{
      margin:20,
    },
    txtItem:{
    fontSize:18,
    fontWeight:'bold'
    },
    sizeButton: {
        elevation: 10,
        backgroundColor: "rgba(50, 91, 90,.6)",
        height: 25,
        alignItems: "center",
        justifyContent: "center",
      
        padding:2
      },
      addButton: {
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
})