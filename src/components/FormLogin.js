import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import axios from 'axios';

// import {  
//     StackNavigator  
// } from 'react-navigation'; 


export default class FormLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    login = () => {
        fetch('http://192.168.0.20:3000/user/login', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            alert('sukses login');
            //this.props.content.navigate('chat')
        })
        .catch((error) => {
        console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#fff'
                    onChangeText={(email)=> this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}
                />
                
                <TouchableOpacity style={styles.button} onPress={this.login} >
                    <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent :'center',
        alignItems :'center'
    },
    inputBox :{
        width :300,
        backgroundColor : 'rgba(255,255,255,0.3)',
        borderRadius :25,
        paddingHorizontal :16,
        fontSize : 16,
        color :'#fff',
        marginVertical :10
    },
    button :{
        width :300,
        borderRadius :25,
        backgroundColor : '#00ff',
        marginVertical :10,
        paddingVertical :13
    },
    buttonText :{
        fontSize :16,
        fontWeight : '500',
        color : '#fff',
        textAlign :'center'
    }
})