import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons';

//import { TouchableOpacity } from 'react-native-gesture-handler';

export default class boxBooking extends Component {
render() {
    return (
        <View style={{marginHorizontal:10}}>
            
            <View style={{
                flexDirection:'row',
                borderColor:'#ddd',
                borderWidth:2,
                marginVertical:5,
                paddingHorizontal:3
                }}>

                <View style={{flex:1}}>
                    <Text>Rp. 30.000</Text>
                    <Text style={{color:'green'}}>Lihat semua harga</Text>
                </View>
                <View style={{flex:1,flexDirection:'row', height:65,padding:5}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderColor:'red',
                                borderRadius:5,
                                height:50,
                                padding:7,
                                backgroundColor:'transparent'
                            }}
                        >
                            <Text style={{textAlign :'center'}}>HUbungi kos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                            style={{
                                borderColor:'red',
                                borderRadius:5,
                                height:50,
                                padding:7,
                                backgroundColor:'#ddd',
                                marginHorizontal:5,
                                justifyContent: "center"
                            }}
                            >
                            <Text style={{textAlign :'center'}}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
        
    )
}
}
