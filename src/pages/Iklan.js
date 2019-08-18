import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';

import NavHeader from '../components/NavHeader'
import IklanTop from '../components/IklanTop';
import IklanBottom from '../components/IklanBottom';
import Cordinat from '../components/Cordinat';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavHeader/>
                <KeyboardAvoidingView>
                    <IklanTop/>
                    <Cordinat/>
                    <IklanBottom/>
                </KeyboardAvoidingView>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:'#F4F6F6'
    },
    
})