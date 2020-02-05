/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import {Provider} from 'mobx-react'
import AppContainer from './Src/routes/AppContainer'
// import DrawerNavigator from './Src/routes/DrawerNavigator'
import CollectionsStore from './Src/stores/CollectionsStore'
class App extends React.Component{
  render(){
    return (
      <Provider CollectionsStore={CollectionsStore}>
       <AppContainer/>
      </Provider>

    )
  }
}
export default App;



