import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = createStackNavigator(
  {
    DrawerNavigator: {screen: DrawerNavigator},
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {headerVisable: false},
  },
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
