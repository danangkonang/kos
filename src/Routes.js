import { 
    createAppContainer, 
    createStackNavigator,
    createMaterialTopTabNavigator 
    } from 'react-navigation';

    import Login from './pages/Login';
    import Signup from './pages/Signup';
    import Home from './components/Home';
    import Detail from './pages/Detail';
    import Iklan from './pages/Iklan'    
    const AppNavigator = createStackNavigator({
    
    home: {
        screen : Home,
        navigationOptions:{
            header:null
        }
    },
    iklan: {
        screen : Iklan,
        navigationOptions:{
            header:null
        }
    },
    detail: {
        screen : Detail,
        navigationOptions:{
            header:null
        }
    },
    login: {
        screen : Login,
        navigationOptions: {
            header : null
        }
    },
    signup: {
        screen : Signup,
        navigationOptions: {
            header : null
        }
    }
});

    const Routes = createAppContainer(AppNavigator);
    export default Routes;