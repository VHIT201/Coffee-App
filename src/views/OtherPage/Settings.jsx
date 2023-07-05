import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign,MaterialIcons,FontAwesome,FontAwesome5,Feather,Ionicons } from "@expo/vector-icons";
const Settings = ({navigation}) => {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:'10%',height:'100%',justifyContent:"center",alignItems:"center"}}>
            <Icon as={AntDesign} name='left' size={'md'}/>
        </TouchableOpacity>

        <View style={{height:'100%',width:'80%',justifyContent:'center',alignItems:"center"}}>
            <Text style={{color:"black",fontWeight:'bold',fontSize:17}}>Cài Đặt</Text>
        </View>
        <View style={{height:'100%',width:'10%'}}></View>
      </View>

      <View style={{flex:1, width:"100%",paddingLeft:10,paddingRight:10}}>
      <Text style={{color:"black",fontWeight:'700',fontSize:16,marginTop:20}}>Cài Đặt tài khoản</Text>
      <TouchableOpacity style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',justifyContent:"space-between",alignItems:'center',marginTop:10}}>
                <View style={{width:"100%",height:"100%",flexDirection:"row",alignItems:'center',paddingLeft:10, paddingRight:10}}>
                    <View style={{width:'80%',gap:10,flexDirection:'row',alignItems:"center"}}>
                      <Icon as={Ionicons} name={'person-remove'} color='#B22830'/>
                      <Text style={{color:'#B22830',fontWeight:'500'}}>Xoá tài khoản</Text>

                    </View>
                    <View style={{width:'20%',alignItems:"center",alignItems:"flex-end",paddingRight:10}}>
                    </View>
                </View>
            </TouchableOpacity>
      <Text style={{color:"black",fontWeight:'700',fontSize:16,marginTop:20}}>Bảo mật</Text>
      <TouchableOpacity style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',justifyContent:"space-between",alignItems:'center',marginTop:10}}>
                <View style={{width:"100%",height:"100%",flexDirection:"row",alignItems:'center',paddingLeft:10, paddingRight:10}}>
                    <View style={{width:'80%',gap:10,flexDirection:'row',alignItems:"center"}}>
                      <Icon as={Ionicons} name={'person-remove'} color='#B22830'/>
                      <Text style={{color:'#B22830',fontWeight:'500'}}>Thay đổi mật khẩu</Text>

                    </View>
                    <View style={{width:'20%',alignItems:"center",alignItems:"flex-end",paddingRight:10}}>
                        <Icon as={FontAwesome5} name='chevron-right' size={'xs'}/>
                    </View>
                </View>
            </TouchableOpacity>
      </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    header:{
        height:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'white'
    }
})