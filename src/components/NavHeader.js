import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class Home extends Component {
    render() {
        return (
         <View style={styles.header}>
            <View style={styles.iconHeader}>
                <Icon name="arrow-left" size={28} color="#000" />
            </View>
            <View style={styles.textHeader}>
                <Text style={{fontSize:23, color:'#000'}}>Add iklan</Text>
            </View>
         </View>
         )
      }
  }
  
const styles = StyleSheet.create({
    
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'transparent',
        paddingHorizontal:10,
        paddingVertical:15
    },
    textHeader:{
        flex:3,
    },
    iconHeader:{
        flex:1,

    }
    
})