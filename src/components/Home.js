import React, { Component } from 'react'
import {
    View,
    ScrollView
} from 'react-native';
import Barner from './detail/Barner';
import NavHeader from '../components/NavHeader';
import InfoKos from '../components/detail/InfoKos';
import BoxBooking from './detail/boxBooking';
import ServiceKos from './detail/ServiceKos';
export default class Home extends Component {
render() {
    return (
        <View style={{flex:1, flexDirection: 'column'}}>
            <View style={{ backgroundColor: 'red'}}>
                {/* sudah transparent tapi posisi icon harus di atas
                
                */}
                <NavHeader/>
            </View>
            <ScrollView >
                <Barner/>
                <InfoKos/>
                
                <ServiceKos/>
            </ScrollView>
            <BoxBooking/>
        </View>
    )
}
}
