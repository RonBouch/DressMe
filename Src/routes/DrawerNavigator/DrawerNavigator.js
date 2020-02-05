import { Dimensions } from "react-native";
import {createAppContainer}  from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from '../../Screens/Home'
import Shirts from '../../Screens/Shirts'
import Shoes from '../../Screens/Shoes'
import Pants from '../../Screens/Pants'

import ContentComponent from '../../Components/ContentComponent/ContentComponent'



const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },

    Shirts: { screen: Shirts },

    Shoes: { screen: Shoes },

    Pants: { screen: Pants },
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
    drawerPosition: "right",
    overlayColor: "none",
    drawerBackgroundColor: "transparent"
  }
);
export default createAppContainer(DrawerNavigator);