import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView
} from 'react-native'
// import { Button } from 'native-base'
// import Icon from 'react-native-vector-icons/FontAwesome5'

export default class AdsTop extends Component {
   constructor(){
      this.state = {
         nameKos : ''
      }
   }
    render() {
        return (
         <View style={{padding: 10}}>
            <View style={styles.input}>
               <View>
                  <Text>Nama Kost</Text>
                  <TextInput
                        style={styles.inputText}
                        placeholder='Masukkan nama kost disini...'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                        onChangeText={(txt)=> this.setState({nameKos : txt})}
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

         )
      }
  }

  const styles = StyleSheet.create({
   
   input:{
       paddingHorizontal:5,
       marginTop:5
   },
   
   inputText:{

   }
})