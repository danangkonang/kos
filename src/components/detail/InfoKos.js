import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
export default class InfoKos extends Component {
render() {
    return (
        <View style={{
            paddingHorizontal:10
        }}>
            
            <View style={{
                flexDirection: 'row',
                marginVertical:10
                }}>
                <View style={{flex:2}}>
                    <Text style={{color:'red'}}>tante kos</Text>
                    <Text style={{fontSize:18}}>rumah kos di jakarta raya murah meriah</Text>
                    <Text style={{color:'#ddd'}}>update 12 juli 2019</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <Icon2 name="star-circle" size={20} color="#000" />
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                marginVertical:10,
                paddingHorizontal:10, 
                paddingVertical:10, 
                borderWidth:2,
                borderColor:'#ddd',
                }}>
                <View style={{flex:1}}>
                    <Text>Tidak termasuk listrik</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Tidak ada min bayar</Text>
                </View>
            </View>

            
            <View >
                <Text>Luas kamar</Text>
                <Text>
                    <Icon name="ios-basket" size={20} color="#000" /> 50m
                </Text>
            </View>

            <View style={{flexDirection:'row', flex:1, justifyContent:'space-between', paddingVertical:10}}>
                <View style={{flex:1}}>
                    <Text>Fasilitas kos</Text>
                    
                </View>
                <View style={{flex:1}}>
                    <Text style={{color:'green'}}>Lainya</Text>
                </View>
            </View>
            
        </View>
        
    )
}
}
