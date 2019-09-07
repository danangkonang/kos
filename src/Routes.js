import React, { Component } from 'react';  
import { 
    createAppContainer, 
    createStackNavigator,
    createMaterialTopTabNavigator 
    } from 'react-navigation';


import Home from './pages/home/Home';
import IconHomeLeft from './components/header/IconHomeLeft';
import IconHomeRight from './components/header/IconHomeRight';

import Login from './pages/auth/Login'
import Registrasi from './pages/auth/Registrasi'
import Chat from './pages/Chat';
import Notif from './pages/Notif';
import User from './pages/User';
import ListRoom from './pages/ListRoom'
import AddAds from './pages/AddAds'
import Detail from './pages/Detail'

const AppNavigator = createStackNavigator({
    // detail: {
    //     screen : Detail,
    //     navigationOptions:{
    //         header:null
    //     }
    // },
    home: {
        screen : Home,
        navigationOptions:({ navigation }) => {
            return {
                headerLeft: (
                    <IconHomeLeft/>
                ),
                // title:(

                // ),
                headerRight: (
                    <IconHomeRight/>
				 ),
            }
        }
    },
    chat: {
        screen : Chat,
        navigationOptions:{
            headerTintColor: '#555',
        }
    },
    notif: {
        screen : Notif,
        // navigationOptions:{
        //     header:null
        // }
    },
    user: {
        screen : User,
        // navigationOptions:{
        //     header:null
        // }
    },
    login: {
        screen : Login,
        navigationOptions:{
            header:null
        }
    },
    register: {
        screen : Registrasi,
        navigationOptions:{
            header:null
        }
    },
    listRoom: {
        screen : ListRoom,
        // navigationOptions:{
        //     header:null
        // }
    },
    addAds: {
        screen : AddAds,
        // navigationOptions:{
        //     header:null
        // }
    },
    detail: {
        screen : Detail,
        navigationOptions:{
            header:null
        }
    }

});

const Routes = createAppContainer(AppNavigator);
export default Routes;