import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class infoKos extends Component {
render() {
    return (
        <View style={{margin:10}}>
            
            <View style={{flexDirection:'row', marginBottom:5}}>
                <View style={{flex:1}}>
                    <Text>Kebersihan</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Kenyamanan</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginBottom:5}}>
                <View style={{flex:1}}>
                    <Text>Keamanam</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Harga</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginBottom:5}}>
                <View style={{flex:1}}>
                    <Text>Fasilitas kamar</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Fasilitas umum</Text>
                    <Text >
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                        <Icon name="star" style={{color:'#ddd'}} size={16} />
                    </Text>
                </View>
            </View>

            
        </View>
        
    )
}
}
