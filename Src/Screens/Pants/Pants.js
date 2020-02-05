import React, { Component } from 'react'
import { Text, View ,TextInput,StyleSheet} from 'react-native'
import {inject} from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler';
import ItemView from '../../Components/ItemView'
import CollectionType from '../../Components/CollectionType'

@inject('CollectionsStore')
export default class Pants extends Component {
    constructor(props) {
        super(props);
        this.state={
            search:"",
            count:0
        }
    }
    componentDidMount(){
        let len=   this.props.CollectionsStore.collections.filter((item) =>{
            return item.type == "pants";
    })
    this.setState({
        count:len
    })
}
 
    search(item){
        if(
            item.sizes.includes(parseInt(this.state.search))||item.name.includes(this.state.search.toLowerCase())||item.brand.includes(this.state.search.toLowerCase())||item.colors.includes(this.state.search.toLowerCase())
        ){
            return true;
        }
        return false;
       
    }
    
    render() {
        const {CollectionsStore}=this.props;
        return (
            <View style={s.container}>
                <Text style={s.title}> Select Shirt ! </Text>
                <TextInput style={s.search} placeholder="Search" onChangeText={(e)=>this.setState({search:e})}/>
                <Text>You have {this.state.count.length} items</Text>
                <ScrollView>
               {CollectionsStore.collections.map((item, index) => {
                   if(this.search(item)){
            if(item.type=='pants'){
           
                return(
                    <ItemView key={index} type={CollectionType.PANTS} item={item} props={this.props}/>
                )
            }      
        }
           
        })}
                </ScrollView>
            </View>
        )
    }
}
const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop:70
    },
    title:{
      fontSize:22,
      color :'gray',
      fontWeight:'bold'
    },
    itemView:{
      margin:20,
    },
    search:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
        width:150,
        marginTop:10
    },
    txtItem:{
    fontSize:18,
    fontWeight:'bold'
    },
    sizeButton: {
        elevation: 10,
        backgroundColor: "rgba(50, 90, 90,.6)",
        height: 25,
        alignItems: "center",
        justifyContent: "center",
      
        padding:2
      },
})

