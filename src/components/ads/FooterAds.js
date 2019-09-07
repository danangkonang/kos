import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
//import { TouchableOpacity } from 'native-base'


export default class FootterAds extends Component {
    render() {
        return (
            
            <TouchableOpacity style={{backgroundColor: "#1BAA56", justifyContent: "center",alignItems:'center',paddingVertical:15}}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Book</Text>
            </TouchableOpacity>
        

         )
      }
  }