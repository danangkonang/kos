import React, { Component } from 'react'
import {
    View,
    Text 
} from 'react-native'
export default class Detail extends Component {
render() {
    return (
        <View>

        
            <View style={{flex:4}}>
                <View>
                    <Image
                    source={{uri: ''}}/>
                </View>
                <View>
                    <Text>putri Tinggal 1kamar</Text>
                </View>
                <View>
                    <Text>Kos mami jogja </Text>
                </View>
                <View>
                    <Text>update 12 juli 2019 </Text>
                </View>
            </View>

            <View style={{flex:1}}>
                <Image
                source={{uri: ''}}/>
            </View>

            <View style={{flexDirection:'column'}}>
                <View style={{flex:1}}>
                    <Text>Tidak termasuk listrik</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Tidak termasuk listrik</Text>
                </View>
            </View>

            <View>
                <Text>Luas kamar</Text>
                <Text>5 x 4 m</Text>
            </View>

            <View style={{flexDirection:'column'}}>
                <View style={{flex:1}}>
                    <Text>Fasilitas kost dan kamar</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Lainya</Text>
                </View>
            </View>
            <View style={{borderColor:"yellow"}}>
                <View>
                    <Text>lihat ssemua harga</Text>
                </View>
                <View>
                    <TouchableOpacity style={{borderColor:red}}>hubungi kami</TouchableOpacity>
                    <TouchableOpacity style={{}}>Booking</TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:'column'}}>
                <View style={{flex:1}}>
                    <Text>kebrsihan</Text>
                    <Text>Icon</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>kebrsihan</Text>
                    <Text>Icon</Text>
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={{flex:1}}>
                    <Text>kebrsihan</Text>
                    <Text>Icon</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>kebrsihan</Text>
                    <Text>Icon</Text>
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={{flex:1}}>
                    <Text>kebrsihan</Text>
                    <Text>Icon</Text>
                </View>
                <View style={{flex:1}}>
                    <Text>kebrsihan</Text>
                    <Text>Icon</Text>
                </View>
            </View>

            <View>
                <View>
                    <Text>verifikasi</Text>
                </View>
                <View>
                    <Text>kos belum di kunjungi</Text>
                </View>
                <View>
                    <Text>telephone belum terverifikasi</Text>
                </View>
            </View>

            <View style={{}}>

            </View>

        </View>
    )
}
}