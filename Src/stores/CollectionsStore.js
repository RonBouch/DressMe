import {observable, action, runInAction, configure} from 'mobx';
import {persist, create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {CollectionType} from '../utils/enums';
configure({enforceActions: 'observed'});

class CollectionsStore {
  @observable collections = [];
  @persist @observable sumOfSet = 0;
  @observable items = Array(Object.keys(CollectionType).length).fill(null);

  @action addItem = item => {
    this.items[+CollectionType[item.type.toUpperCase()]] = item;
    // switch (parseInt(CollectionType[item.type.toUpperCase()])) {
    //   case 0:
    //     this.myShoes = item;
    //     break;
    //   case 1:
    //     this.myPants = item;
    //     break;
    //   case 2:
    //     this.myShirt = item;
    //     break;
    //   default:
    //     break;
    // }
    // this.items[CollectionType[item.type.toUpperCase()]]= item;
  };

  @action addSet = () => {
    this.sumOfSet = this.sumOfSet + 1;
    this.items = Array(Object.keys(CollectionType).length).fill(null);
  };
  
  @action fetchDataAsync = async () => {
    fetch(
      'http://www.mocky.io/v2/5e3940013200005e00ddf87e​?mocky-delay=600ms',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(collections => {
        runInAction(() => {
          this.collections = collections.results.sort((a, b) =>
            a.brand > b.brand ? 1 : -1,
          );
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

const store = new CollectionsStore();
hydrate('CollectionsStore', store).then(() =>
  console.log('someStore has been hydrated'),
);
export default store;
