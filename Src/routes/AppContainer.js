import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { Home, Pants, Finish,Shoes,Shirts } from '../Screens';
// import {createStackNavigator} from 'react-navigation-stack'
// import DrawerNavigator from './DrawerNavigator/DrawerNavigator'
// import btnCheck from '../Components/Button/BtnCheck'


const AppSwitchNavigator = createStackNavigator({
  // DrawerNavigator:{screen:DrawerNavigator},
    Home:{screen:Home},
    Pants:{screen:Pants},
    Shoes:{screen: Shoes},
    Shirts:{screen:Shirts},
    Finish:{screen:Finish}
  },
  {
    headerMode: "none",
    defaultNavigationOptions: { headerVisable: false }
  }
  ); 
  const AppContainer = createAppContainer(AppSwitchNavigator);
  export default AppContainer