import React, { Component } from 'react';  
import { 
   View, 
   Text, 
   StyleSheet, 
   Button,
   Image,
   ScrollView 
} from 'react-native';  

import Popular from '../../components/Popular'
import ButtonMenu from '../../components/ButtonMenu'
import Carousel from '../../components/Carousel'
export default class Home extends Component {  
   // static navigationOptions = {  
   //      title: 'Dashboard',  
   // };  
 
   render() {  
       return (  
            <View style={{ flex: 1, backgroundColor:'#ddd'}}>
               <Carousel/>
               <Popular/>   
               <ButtonMenu content={this.props.navigation}/>
            </View>  
       );  
   }  
}  