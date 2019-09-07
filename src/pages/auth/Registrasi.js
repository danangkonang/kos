import React, { Component } from 'react'
import {
   View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    TextInput
   } from 'react-native'
export default class Registrasi extends Component {
  constructor(props){
      super(props)
      this.state={
        email:'',
        password:'',
        noTelp:''
      }
   }

   login = () => {
     alert("tes")
      // fetch('http://192.168.0.20:3000/user/login', {
      //     method: 'post',
      //     headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //         email:this.state.email,
      //         password:this.state.password
      //     }),
      // })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //     if(responseJson.succes==true){
      //         alert('sukses')
      //     }else{
      //         alert('gagal')
      //     }
      //     //alert('sukses login');
      //     //this.props.content.navigate('chat')
      // })
      // .catch((error) => {
      // console.error(error);
      // });
   }

   render() {
      return (
         <KeyboardAvoidingView style={{flex:1}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:40,backgroundColor:'#0397d5'}}>

                    <Text style={{marginBottom:40,color:'#ddd',fontSize:24,fontWeight:'bold'}}>DAFTAR</Text>


                    <TextInput style={{alignSelf:'stretch',padding:16,marginBottom:20,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#545454'
                    onChangeText={(email)=> this.setState({email})}
                    value={this.state.email}
                    />

                    <TextInput style={{alignSelf:'stretch',padding:16,marginBottom:20,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='No Telp'
                    placeholderTextColor='#545454'
                    onChangeText={(noTelp)=> this.setState({noTelp})}
                    value={this.state.noTelp}
                    />

                    <TextInput style={{alignSelf:'stretch',padding:12,marginBottom:20,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#545454'
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}
                    />

                    <TouchableOpacity style={{alignSelf:'stretch',backgroundColor:"#545454",padding:16,alignItems:'center',borderRadius:4,borderColor:'#ddd',borderWidth:2}}><Text style={{fontWeight:'bold',color:'#ddd'}}>DAFTAR</Text></TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:60,alignItems:'flex-end'}}>
                        <Text style={{color:'#ddd'}}>Sudah mempunyai akun? </Text>
                            <TouchableOpacity onPress={() =>this.props.navigation.navigate('signup')}>
                                <Text style={{color:'#ddd',fontSize:17,fontWeight:'bold'}}> Login</Text>
                            </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
      )
   }
}