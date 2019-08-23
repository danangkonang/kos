import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity
   } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler';
export default class User extends Component {
   render() {
      return (
         <View style={{backgroundColor:'pink',flex:1}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
               <Text>akun</Text>
            </View>
            <View style={{flex:2}}>
               <TouchableOpacity style={{backgroundColor:'red',padding:10, margin:20}}
                  onPress={() => this.props.navigation.navigate('login')}>
                  <Text>masuk</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{backgroundColor:'blue',padding:10, margin:20}}
                  onPress={() => this.props.navigation.navigate('register')}>
                  <Text>daftar</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{backgroundColor:'green',padding:10, margin:20}}
                  onPress={() => this.props.navigation.navigate('listRoom')}>
                  <Text>list room</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{backgroundColor:'yellow',padding:10, margin:20}}
                  onPress={() => this.props.navigation.navigate('addAds')}>
                  <Text>pasang iklan</Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}