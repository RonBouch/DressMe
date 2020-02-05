import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome5";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }
  
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.drawerTransparent}
        onPress={() => this.props.navigation.goBack()}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.drawer}
          disabled={false}
        >
            <TouchableHighlight
              underlayColor={"rgba(0,0,0,0.2)"}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <View style={styles.row}>
                {/* <Icon
                  style={{ width: "25%", textAlign: "center" }}
                  name="home"
                  type="font-awesome"
                  color="gray"
                  size={20}
                /> */}
                <Text style={styles.text}>דף הבית</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={"rgba(0,0,0,0.2)"}
              onPress={() =>
                this.props.navigation.navigate("Shoes")
              }
            >
              <View style={styles.row}>
                {/* <Icon
                  style={{ width: "25%", textAlign: "center" }}
                  name="place-of-worship"
                  type="font-awesome"
                  color="gray"
                  size={20}
                /> */}
                <Text style={styles.text}>עמותות</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={"rgba(0,0,0,0.2)"}
              onPress={() => this.props.navigation.navigate("Shirts")}
            >
              <View style={styles.row}>
                {/* <Icon
                  style={{ width: "25%", textAlign: "center" }}
                  name="hand-holding-heart"
                  type="font-awesome"
                  color="gray"
                  size={20}
                /> */}
                <Text style={styles.text}>תרומות</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={"rgba(0,0,0,0.2)"}
              onPress={() => this.props.navigation.navigate("Pants")}
            >
              <View style={styles.row}>
                {/* <Icon
                  style={{ width: "25%", textAlign: "center" }}
                  name="cart-plus"
                  type="font-awesome"
                  color="gray"
                  size={20}
                /> */}
                <Text style={styles.text}>פרסום תרומה</Text>
              </View>
            </TouchableHighlight>

           
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}
export default ContentComponent;

const styles = StyleSheet.create({
  drawerTransparent: {
    height: "100%",
    justifyContent: "flex-end"
  },
  drawer: {
    width: "70%",
    height: "86%",
    backgroundColor: "white",
    elevation: 10
  },
  header: {
    width: "100%",
    height: 200,
    backgroundColor: "#6495ed",
    justifyContent: "center"
    // textAlign: "center"
  },
  headerImage: {
    borderRadius: 100
  },
  row: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 15
    // paddingLeft: 10
  },
  menu: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 50,
    alignSelf: "center"
  },
  text: {
    width: "45%",
    fontSize: 14,
    fontWeight: "bold",
    color: "#111"
  },
  line: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: "gray",
    elevation: 3,
    margin: 15
  }
});