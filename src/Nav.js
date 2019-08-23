import React, {Component} from 'react'

import { 
   createAppContainer, 
   createMaterialTopTabNavigator,
   createDrawerNavigator,
   createStackNavigator,
   SafeAreaView
 } from 'react-navigation';


import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TouchableOpacity, 
  Image,
  StatusBar
} from 'react-native';
 
//import First from './pages/coba/First';
// import FirstTabHiden from './pages/coba/FirstTab'


// const Nav = createAppContainer(FirstTabHiden);
// export default Nav;


class HomeScreen extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{flex:1}}>
      <View >
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text >tab 1</Text>
      </View>
      // </SafeAreaView>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text >tab 2</Text>
      </View>
    );
  }
}

class Pengaturan extends React.Component {
  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text >tab 3</Text>
      </View>
    );
  }
}



const DrawerNavigator = createDrawerNavigator(
  {
    1: HomeScreen,
    2: SettingsScreen,
    3: Pengaturan,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);


const Nav = createAppContainer(DrawerNavigator);

export default Nav;