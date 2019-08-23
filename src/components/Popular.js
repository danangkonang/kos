import React, { Component } from 'react'
import {
   View,
   StyleSheet, 
   Image,
   ScrollView 
} from 'react-native'
export default class Popular extends Component {
   render() {
      return (
         <View style={{flex:1, backgroundColor:'#ddd'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:'row',height: 150,paddingLeft:10}}>

               <View style={{marginRight:12}} >
               <Image style={{width: 150,height: 150, borderRadius:8,}} source={require('../img/room.jpg')}/>
               </View>

               <View style={{paddingRight:10}} >
               <Image style={{ width: 150,height: 150, borderRadius:8,}} source={require('../img/room.jpg')}/>
               </View>

               <View style={{paddingRight:10}} >
               <Image style={{width: 150,height: 150, borderRadius:8,}} source={require('../img/room.jpg')}/>
               </View>

            </ScrollView >
         </View>
      )
   }
}