import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export default class FormSignup extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#fff'
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Repeat Password'
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} >Sign up</Text>
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