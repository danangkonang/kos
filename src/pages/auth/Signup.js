import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
//import Logo from '../components/Logo';
import Form from '../../components/FormSignup';

export default class Singup extends Component {
    render() {
        return (
            <View style={styles.container} >
                {/* <Logo/> */}
                <Form/>
                <View style={styles.singupText}>
                    <Text style={styles.singupTextContex}>Have accunt please?</Text>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('login') }
                        >
                        <Text style={styles.singupButton}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : 'red',
        flex :1,
        justifyContent :'center',
        alignItems :'center'
    },
    singupText :{
        flexGrow :1,
        alignItems :'center',
        justifyContent :'center',
        paddingVertical : 16,
        flexDirection : 'row'
    },
    singupTextContex:{
        color :'rgba(255,255,255,0.7)',
        fontSize : 16
    },
    singupButton :{
        color :'#fff',
        fontSize :16,
        fontWeight :'500'
    }
})