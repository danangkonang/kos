import React, { Component } from 'react'

import { 
   FlatList, 
   ActivityIndicator, 
   Text,
   View  
} from 'react-native';

export default class ListRoom extends Component {
   constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }

    componentDidMount(){
      return fetch('http://192.168.0.20:3000/api/v1/rooms')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }



   render() {

      if(this.state.isLoading){
         return(
           <View style={{flex: 1, padding: 20}}>
             <ActivityIndicator/>
           </View>
         )
       }

      return (
         <View style={{backgroundColor:'pink',flex:1,margin:15}}>
            <FlatList
               data={this.state.dataSource}
               renderItem={({item}) => <Text style={{
                  backgroundColor:'#ddd',
                  padding:10,
                  margin:10
               }} 
               onPress={() => this.props.navigate('detail')}
               >{item.name}, {item.address}</Text>}
               keyExtractor={({id}, index) => id}
            />
         </View>
      )
   }
}