import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Image
                    style={{
                        width : 40,
                        height : 60
                    }}
                    source={{
                        uri: 'http://bit.ly/2KxvGvk'
                    }}
                />
                <Text style={styles.textLogo} >Ngekos</Text>
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
    textLogo :{
        marginVertical : 15,
        fontSize : 18,
        color : '#fff'
    }
})