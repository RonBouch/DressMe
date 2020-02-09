import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {inject} from 'mobx-react';
import {ScrollView} from 'react-native-gesture-handler';
import ItemView from '../../Components/ItemView';

@inject('CollectionsStore')
export default class DressMeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      fList: [],
      collections: [],
    };
  }

  componentDidMount() {
    this.onUploadScreen();
  }

  onUploadScreen() {
    let fil = this.props.CollectionsStore.collections.filter(item => {
      return item.type == this.props.navigation.state.params.name;
    });
    this.setState({collections: fil, fList: fil});
  }

  filterBySearch(e) {
    if (e != '') {
      let fil = this.state.collections.filter((item, i) => {
        return this.search(item, e) && i < 5;
      });
      this.setState({
        fList: fil,
        search: e,
      });
    } else {
      this.setState({
        fList: this.state.collections,
      });
    }
  }

  search = (item, e) =>
    item.sizes.includes(parseInt(e)) ||
    item.name.includes(e.toLowerCase()) ||
    item.brand.includes(e.toLowerCase()) ||
    item.colors.includes(e.toLowerCase());

  render() {
    return (
      <View style={s.container}>
        <MenuBar navigation={this.props.navigation} />

        <Text style={s.title}>
          {' '}
          Select {this.props.navigation.state.params.name} !{' '}
        </Text>
        <TextInput
          style={s.search}
          placeholder="Search"
          onChangeText={e => this.filterBySearch(e)}
        />
        <Text>You have {this.state.fList.length} items</Text>
        <ScrollView>
          {this.state.fList.map((item, index) => {
            return (
              <ItemView
                key={index}
                type={this.props.navigation.state.params.name.toUpperCase()}
                item={item}
                props={this.props}
              />
            );
          })}
        </ScrollView>
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
  search: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 150,
    marginTop: 10,
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
