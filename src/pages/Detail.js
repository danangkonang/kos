import React, { Component } from 'react'
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   ScrollView
   } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
export default class Detail extends Component {

   // const { navigation } = this.props;
   // const itemId = navigation.getParam('itemId', 'NO-ID');
   
   render() {
      // const { navigation } = this.props
      // const itemId = navigation.getParam('id')
      return (
         <View style={{flex:1}}>
            <ScrollView>
               {/* image */}
               <View style={{height:280}}>
                  <View style={{flex:1,backgroundColor:'#ddd'}}>
                        <Image/>
                        {/* <Text>id {itemId}</Text> */}
                  </View>
                  <View style={{height:40,flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#545454'}}>
                        <View>
                           <Icon style={{color:'#0397d5'}} type="ionicon" size={26} name="image"/>
                        </View>
                        <View>
                           <Icon style={{color:'#0397d5'}} type="ionicon" size={26} name="map-pin"/>
                        </View>
                        <View>
                           <Icon style={{color:'#0397d5'}} type="ionicon" size={26} name="crosshair"/>
                        </View>
                  </View>
                  
               </View>

               {/* boby */}
               <View style={{flex:1,backgroundColor:'#fff',paddingHorizontal:3}}>
                  <View>
                     <Text style={{color:'red'}}>putri tinggal 1 kamar</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                     <View style={{flex:3}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>kos mami room jogjakarta murah miriah</Text>
                     </View>
                     <View style={{flex:1}}>
                     <Icon style={{color:'yellow'}} type="ionicon" size={26} name="star"/>
                     </View>
                  </View>
                  <View style={{paddingVertical:5}}>
                     <Text style={{color:'#ddd'}}>updatre 23 agustus 2019 02:37</Text>
                  </View>
                  <View style={{flexDirection:'row',borderBottomWidth:1,borderTopWidth:1,borderTopColor:'#545454',borderBottomColor:'#545454',paddingVertical:10}}>
                     <View style={{flex:1}}><Text>tidak termasuk listrik</Text></View>
                     <View style={{flex:1}}><Text>tidak termasuk listrik</Text></View>
                  </View>
                  <View style={{paddingVertical:5}}>
                     <Text style={{paddingVertical:3}}>luas kamar</Text>
                     <View style={{flexDirection:'row'}}>
                        <Icon style={{color:'#0397d5'}} type="ionicon" size={27} name="maximize"/>
                        <Text> 5 x 3 m</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row'}}>
                     <View style={{flex:2}}>
                        <Text>fasilitas kos dan kamar</Text>
                     </View>
                     <View style={{flex:1}}>
                        <Text style={{color:'green'}}>lainya</Text>
                     </View>
                  </View>

                  {/* rating */}
                  <View style={{flexDirection:'row',flexWrap:'wrap',paddingTop:5}}>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text>kebersihan</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text>kenyamanan</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text>keamanan</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text>harga</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text>fasilitas kamar</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text>fasilitas umum</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                  </View>

                  <View style={{paddingVertical:5}}>
                     <Text style={{fontWeight:'bold'}}>veryfikasi</Text>
                  </View>
                  <View style={{flexDirection:'column'}}>
                     <View><Text>Kos belum di kunjungi</Text></View>
                     <View><Text>Telephon sudah terverifikasi</Text></View>
                  </View>
                  <View style={{backgroundColor:'#ddd',paddingVertical:10,flexDirection:'row',paddingHorizontal:5}}>
                     <View style={{flex:2}}>
                        <Text>Ada data yang kurang tepat atau kendala lainya dengan kos?</Text>
                     </View>
                     <View style={{flex:1}}>
                        <Text style={{color:'green'}}>Laporkan</Text>
                     </View>
                  </View>

                  {/* product lain */}
                  <View style={{paddingVertical:15}}>
                     <Text style={{fontWeight:'bold',fontSize:16}}>Kos menarik lainya</Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                     <View style={{height:150,width:'50%',backgroundColor:'pink'}}>
                        <Text>kos lain</Text>
                     </View>
                     <View style={{height:150,width:'50%',backgroundColor:'blue'}}>
                        <Text>kos lain</Text>
                     </View>
                     <View style={{height:150,width:'50%',backgroundColor:'yellow'}}>
                        <Text>kos lain</Text>
                     </View>
                  </View>
               </View>
            </ScrollView>
            {/* bootom */}
            <View style={{height:50,marginHorizontal:2,marginBottom:1,flexDirection:'row'}}>
               <View style={{flex:1,padding:2}}>
                  <TouchableOpacity onPress={()=> alert('tes')}
                  style={{backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#0397d5'}}
                  >
                     <Text style={{fontSize:16,color:'#545454',marginVertical:10}}>Chat</Text>
                  </TouchableOpacity>
               </View>
               <View style={{flex:2,padding:2}}>
                  <TouchableOpacity onPress={()=> alert('tes')}
                  style={{backgroundColor:'#0397d5',borderRadius:5,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#0397d5'}}
                  >
                     <Text style={{fontSize:16,color:'#ddd',marginVertical:10}}>Booking Sekarang</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      )
   }
}