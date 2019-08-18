import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Barner extends Component {
render() {
    return (
        <View>

            <View style={{marginTop:-60}}>
                <Image 
                    style={{
                        height:270,
                        width:'100%'
                    }}
                    source={require('../../img/room.jpg')}/>
                    
            </View>
            <View style={{
                flexDirection: 'row', 
                justifyContent:'space-around',
                alignItems:'center', 
                backgroundColor:'#000',
                padding:10
                }}>
                <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'#fff'}}> 
                    
                        <Icon name="ios-apps" size={20} /> Foto
                    </Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>
                    
                        <Icon name="ios-apps" size={20} /> Peta
                    </Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                
                    <Text style={{color:'#fff'}}>
                        <Icon name="ios-apps" size={20}/> 360
                    </Text>
                </View>
            </View>

        </View>
        
    )
}
}
