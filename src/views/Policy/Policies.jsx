import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  Touchable,
} from "react-native";
import Swiper from "react-native-swiper";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign,Feather } from "@expo/vector-icons";
const Policies = ({navigation}) => {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:'10%',height:"100%",justifyContent:"center",alignItems:"center"}}>
          <Icon as={AntDesign} name='left' size='md' color={'gray.400'}/>
        </TouchableOpacity>

        <View style={{height:"100%",width:"80%",justifyContent:'center',alignItems:"center"}}>
          <Text style={{fontWeight:"bold",fontSize:16}}>Chính Sách/Policies</Text>
        </View>
        <View style={{height:"100%",width:"10%",justifyContent:'center',alignItems:"center"}}>
       
        </View>
      </View>

      <View style={{flex:1,width:"100%"}}>



      </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Policies

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:"100%"
  }, 
  header:{
    height:50,
    width:"100%",
    flexDirection:"row",
    backgroundColor:'white'
  },
})