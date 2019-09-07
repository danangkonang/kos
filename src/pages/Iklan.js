import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StatusBar,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
export default class AddAds extends Component {
    constructor(props){
        super(props)
        this.state={
            nameKos:'',
            addresKos:''
        }
    }
    store=()=>{
        alert(this.state.nameKos)
    }

    render() {
        return (
    <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1}}>

            <ScrollView>

            <View style={{padding: 10}}>
                <View style={styles.input}>
                <View>
                    <Text>Nama Kost</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Masukkan nama kost disini...'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(nameKos)=> this.setState({nameKos})}
                        value={this.state.nameKos}
                    />
                </View>
                <View>
                    <Text>Alamat Kost</Text>
                    <TextInput
                        placeholder='Masukkan nama jalan, kecamatan, kelurahan, dll...'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(addresKos)=> this.setState({addresKos})}
                        value={this.state.addresKos}
                    />
                </View>
                </View>
            </View>
            <View style={styles.containerMap}>
                <MapView 
                    provider={PROVIDER_GOOGLE}

                    style={styles.map}
                    initialRegion={{
                    latitude: -6.301608,
                    longitude: 106.735095,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}
                    >
                    <Marker
                    draggable
                    coordinate={{
                    latitude: -6.301608,
                    longitude: 106.735095,
                    }}
                    onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                    title={'Kos'}
                    description={'koskosan murah'}
                    />
                </MapView>

                
            </View>


            <View style={{padding: 10}}>
               <View style={styles.input}>

               <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <TextInput
                            placeholder='1312344'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(longitude)=> this.setState({longitude})}
                            value={this.state.longitude}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <TextInput
                            placeholder='634577'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(latitude)=> this.setState({latitude})}
                            value={this.state.latitude}
                        />
                    </View>
                </View>

                    <View>
                            <Text>Pemilik Kost</Text>
                            <TextInput
                                placeholder='Pemilik Kost'
                                underlineColorAndroid='rgba(0,0,0,1)'
                                placeholderTextColor='#D5DBDB'
                                onChangeText={(direktore)=> this.setState({direktore})}
                                value={this.state.direktore}
                            />
                    </View>
                    <View>
                            <Text>No hp pemilik Kost</Text>
                            <TextInput
                                placeholder='No hp pemilik Kost'
                                underlineColorAndroid='rgba(0,0,0,1)'
                                placeholderTextColor='#D5DBDB'
                                onChangeText={(phoneDirektore)=> this.setState({phoneDirektore})}
                                value={this.state.phoneDirektore}
                            />
                    </View>
                    <View>
                            <Text>Pengelola Kost</Text>
                            <TextInput
                                placeholder='Pengelola Kost'
                                underlineColorAndroid='rgba(0,0,0,1)'
                                placeholderTextColor='#D5DBDB'
                                onChangeText={(management)=> this.setState({management})}
                                value={this.state.management}
                            />
                    </View>
                    <View>
                            <Text>No Hp Pengelola Kost</Text>
                            <TextInput
                                placeholder='No Hp Pengelola Kost'
                                underlineColorAndroid='rgba(0,0,0,1)'
                                placeholderTextColor='#D5DBDB'
                                onChangeText={(phoneManagement)=> this.setState({phoneManagement})}
                                value={this.state.phoneManagement}
                            />
                    </View>

                    <View>
                        <Text>lus kamar</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:2}}>
                                <TextInput
                                    placeholder='meter'
                                    underlineColorAndroid='rgba(0,0,0,1)'
                                    placeholderTextColor='#D5DBDB'
                                    onChangeText={(longitude)=> this.setState({longitude})}
                                    
                                />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text>x</Text>
                            </View>
                            <View style={{flex:2}}>
                                <TextInput
                                    placeholder='meter'
                                    underlineColorAndroid='rgba(0,0,0,1)'
                                    placeholderTextColor='#D5DBDB'
                                    onChangeText={(latitude)=> this.setState({latitude})}
                                    
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text>Harga/bulan</Text>
                        <TextInput
                            placeholder=' Harga/bulan'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(phoneManagement)=> this.setState({phoneManagement})}
                            value={this.state.phoneManagement}
                        />
                  </View>

                </View>
            </View>
            </ScrollView>
        </View>
        
        

        <View style={{backgroundColor:'#fff',flexDirection:'row'}}>
            {/* <TouchableOpacity style={{backgroundColor: "#1BAA56", marginBottom:5, justifyContent: "center",alignItems:'center',paddingVertical:15}}
                onPress={this.store}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Book</Text>
            </TouchableOpacity> */}
            <View style={{backgroundColor:'#fff',flex:1,padding:4}}>
                <TouchableOpacity style={{backgroundColor: "#1BAA56",justifyContent: "center",alignItems:'center',paddingVertical:15,borderRadius:5}}
                    onPress={this.store}>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>Chat</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#fff',flex:2,padding:4}}>
                <TouchableOpacity style={{backgroundColor: "#1BAA56",justifyContent: "center",alignItems:'center',paddingVertical:15, borderRadius:5}}
                    onPress={this.store}>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>Book</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:5,
        marginTop:5
    },
    inputText:{
    },
    kordinat:{
        flexDirection:'row',
    },
    kordinatTitik:{
        flex:1
    },
    containerMap:{
        margin: 10,
        height:200
        },
    map: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
    },
    header :{
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor:'#1baa56'
    }

})