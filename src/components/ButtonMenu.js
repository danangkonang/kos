import React, { Component } from 'react'
import {
   View, 
   Text, 
   StyleSheet, 
   Button,
   Image,
   ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';  
export default class ButtonMenu extends Component {
   render() {
      return (
         <View style={{height:54, backgroundColor:'green', flexDirection:'row'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:2}}>
               <Icon type="ionicon" size={26} name="home" onPress={() => this.props.content.navigate('home')} />
               <Text style={{fontSize:13, color:'#545454',marginTop:1}}>home</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center', paddingTop:2}}>
               <Icon type="ionicon" size={26} name="message-circle" onPress={() => this.props.content.navigate('chat')}/>
               <Text style={{fontSize:13, color:'#545454',marginTop:1}}>chat</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center', paddingTop:2}}>
               <Icon type="ionicon" size={26} name="bell" onPress={() => this.props.content.navigate('notif')}/>
               <Text style={{fontSize:13, color:'#545454',marginTop:1}}>notif</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center', paddingTop:2}}>
               <Icon type="ionicon" size={26} name="user" onPress={() => this.props.content.navigate('user')}/>
               <Text style={{fontSize:13, color:'#545454',marginTop:1}}>user</Text>
            </View>
         </View>
      )
   }
}