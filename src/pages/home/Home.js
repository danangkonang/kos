import React, { Component } from 'react';  
import { 
   View, 
   Text, 
   StyleSheet, 
   Button,
   Image,
   ScrollView,
   AsyncStorage
} from 'react-native';  

import Popular from '../../components/Popular'
import ButtonMenu from '../../components/ButtonMenu'
import Carousel from '../../components/Carousel'
export default class Home extends Component {  
   constructor(props){
      super(props)
   }
   
   componentDidMount(){
      AsyncStorage.getItem('token', (error, result) => {
         if (result) {
            console.log(result)
         }
      });
      
   }

   render() {  
       return (  
            <View style={{ flex: 1, backgroundColor:'#ddd'}}>
               {/* <ScrollView> */}
                  <Carousel/>
                  <Popular/>
                  {/* <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                     <View style={{height:150,width:'50%',backgroundColor:'pink'}}>
                        <Text>kos lain</Text>
                     </View>
                     <View style={{height:150,width:'50%',backgroundColor:'blue'}}>
                        <Text>kos lain</Text>
                     </View>
                     <View style={{height:150,width:'50%',backgroundColor:'yellow'}}>
                        <Text>kos lain</Text>
                     </View>
                  </View> */}
               {/* </ScrollView> */}
               <ButtonMenu content={this.props.navigation}/>
            </View>  
       );  
   }  
}  