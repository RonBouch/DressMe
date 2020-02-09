import {Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Home, Finish, DressMeScreen} from '../../Screens';
import ContentDrawer from '../../Components/ContentDrawer/ContentDrawer';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    shirt: {screen: DressMeScreen},
    shoes: {screen: DressMeScreen},
    pants: {screen: DressMeScreen},
    Finish: {screen: Finish},
  },
  {
    headerMode: 'none',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    MainNavigator: {screen: MainNavigator},
  },
  {
    initialRouteName: 'MainNavigator',
    contentComponent: ContentDrawer,
    drawerWidth: Dimensions.get('window').width,
    drawerPosition: 'left',
    overlayColor: 'none',
    drawerBackgroundColor: 'transparent',
  },
);
export default DrawerNavigator;
