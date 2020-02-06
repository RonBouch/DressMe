import { Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Home, Pants, Finish,Shoes,Shirts } from '../../Screens';

import ContentComponent from '../../Components/ContentComponent/ContentComponent'



const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },


    Shoes: { screen: Shoes },

    Pants: { screen: Pants },
    Shirts: { screen: Shirts },
    
    Finish: { screen: Finish },

  },
  {
    headerMode: "none"
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    MainNavigator: { screen: MainNavigator }
  },
  {
    initialRouteName: "MainNavigator",
    contentComponent: ContentComponent,
    drawerWidth: Dimensions.get("window").width,
    drawerPosition: "left",
    overlayColor: "none",
    drawerBackgroundColor: "transparent"
  }
);
export default (DrawerNavigator);