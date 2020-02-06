import {observable, action, runInAction, configure} from 'mobx';
import {persist, create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';
configure({enforceActions: 'observed'});

class CollectionsStore {
  @observable collections = [];
  @observable myShoes = null;
  @observable myShirt = null;
  @observable myPants = null;
  @persist @observable sumOfSet = 0;

  @action addShoes = item => {
    this.myShoes = item;
  };
  @action addShirt = item => {
    this.myShirt = item;
  };
  @action addPants = item => {
    this.myPants = item;
  };
  @action addSet = () => {
    this.sumOfSet = this.sumOfSet + 1;
    this.myShirt = null;
    this.myPants = null;
    this.myShoes = null;
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
        console.log(
          'collections = >',
          collections.results.sort((a, b) => (a.name > b.name ? 1 : -1)),
        );
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

