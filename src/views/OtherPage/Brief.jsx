import React, { useContext, useState } from "react";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign,MaterialIcons,FontAwesome,FontAwesome5,Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../../../App";
const Brief = ({navigation}) => {
    const {numberPhone,setNumberPhone} = useContext(CartContext)
  return (
    <NativeBaseProvider>
    <KeyboardAwareScrollView style={styles.container}>
    <StatusBar/>
      <View style={styles.header1}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:"10%",height:"100%",justifyContent:"center",alignItems:"center"}}>
            <Icon as={MaterialCommunityIcons} name='chevron-left' size={'xl'}/>
        </TouchableOpacity>
        <View style={{width:"80%",height:"100%",justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:"black"}}>Hồ Sơ</Text>
        </View>
        <View style={{width:"10%",height:"100%"}}></View>
      
      </View>
      <View style={{height:100,width:'100%',flexDirection:'row',backgroundColor:"#B22830"}}>
          <View style={{height:"100%",width:"20%",justifyContent:'center',alignItems:"center"}}>
            <View style={{height:70,width:70,backgroundColor:'#D1D5DB',borderRadius:35,justifyContent:"center",alignItems:'center'}}>
            <Icon as={FontAwesome5} name='user-alt' size='4xl' color='#B22830'/>
            </View>
          </View>
          <View style={{height:"100%",width:"80%",justifyContent:"center",paddingLeft:10}}>
            <Text style={{fontSize:17,fontWeight:"bold",color:'white',marginBottom:10}}>Carolo Khoa | THÀNH VIÊN</Text>
            <View style={{flexDirection:'row',alignItems:"center",width:'100%'}}>
              <View style={{width:"70%",flexDirection:'row',alignItems:"center",gap:10}}>
              <Icon as={FontAwesome5} name='wallet' size={'sm'} color='white'/>
              <Text style={{color:'white',fontWeight:'500'}}>Trả trước:</Text>
              <Text style={{color:'white',fontWeight:'500'}}>100.000.000 đ</Text>
              <Image style={{height:20,width:20}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/check-mark-circle-svgrepo-com.png?alt=media&token=af29d0d8-9646-4a8b-87c6-1950b36d671d'}}/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.body}>
        <ScrollView style={{width:'100%',padding:20,marginTop:10}}>
        
            <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text style={{color:"black",fontWeight:'bold',fontSize:17}}>Thông Tin Chung</Text>
            <TouchableOpacity style={{width:40,justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:'#B22830',fontWeight:"bold"}}>Sửa</Text>
            </TouchableOpacity>
            </View>

            <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                <TextInput style={{width:"49%",height:40,backgroundColor:"white",paddingLeft:10,paddingRight:10}} placeholder="Họ"></TextInput>
                <TextInput style={{width:"49%",height:40,backgroundColor:"white",paddingLeft:10,paddingRight:10}} placeholder="Tên"></TextInput>
            </View>

            <TextInput style={{width:'100%',backgroundColor:"white",paddingRight:10,paddingLeft:10,height:40,marginTop:10}} placeholder="Giới tính"></TextInput>
            <TextInput style={{width:'100%',backgroundColor:"white",paddingRight:10,paddingLeft:10,height:40,marginTop:10}} placeholder="Sinh nhật"></TextInput>


            <Text style={{color:"black",fontWeight:'bold',fontSize:17, marginTop:20}}>Số Điện Thoại</Text>
            
            <View style={{width:'100%',flexDirection:'row',justifyContent:"space-between",alignItems:"center",height:40,marginTop:10}}>
                <View style={{height:'100%',width:'24%',backgroundColor:"white",justifyContent:'center',alignItems:"center",flexDirection:'row',gap:4}}>
                    <Image style={{height:20,width:30}} resizeMode='contain' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxXOdK8yUgu5Rd29X-Xm6_xQXRj0Rvc3z_tDdQS_1&s'}}/>
                    <Text>+84</Text>
                </View>
                <View style={{height:'100%',width:'72%',backgroundColor:"white",justifyContent:"space-between",alignItems:"center",paddingLeft:10,paddingRight:10,flexDirection:'row'}}>
                    <Text>{numberPhone}</Text>
                    <Image style={{height:15,width:15}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/shield-svgrepo-com.png?alt=media&token=d335d85e-a7f0-4143-b228-c4aa3c947609'}}/>
                </View>
            </View>


            <Text style={{color:"black",fontWeight:'bold',fontSize:17, marginTop:20}}>Email</Text>
            <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                <TextInput  style={{width:"100%",height:40,backgroundColor:"white",paddingLeft:10,paddingRight:10}} placeholder="Email"></TextInput>
             
            </View>

            <Text style={{color:"black",fontWeight:'bold',fontSize:17, marginTop:20,marginBottom:10}}>Tài Khoản Liên Kết</Text>
            <TouchableOpacity style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <View style={{width:"100%",height:"100%",flexDirection:"row",alignItems:'center',paddingLeft:10, paddingRight:10}}>
                    <View style={{width:'80%',gap:10,flexDirection:'row',alignItems:"center"}}>
                      <Image style={{height:20,width:20}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/google-color-svgrepo-com.png?alt=media&token=36a617a9-2e08-46af-a374-86adaa98158a'}}/>
                      <Text>Google</Text>
                    </View>
                    <View style={{width:'20%',alignItems:"center",alignItems:"flex-end",paddingRight:10}}>
                      <Image style={{height:20,width:20}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/radio-button-svgrepo-com.png?alt=media&token=49b8134e-cdb5-4009-a620-b214bd5665af'}}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',justifyContent:"space-between",alignItems:'center',marginTop:2}}>
                <View style={{width:"100%",height:"100%",flexDirection:"row",alignItems:'center',paddingLeft:10, paddingRight:10}}>
                    <View style={{width:'80%',gap:10,flexDirection:'row',alignItems:"center"}}>
                      <Image style={{height:20,width:20}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/facebook-color-svgrepo-com.png?alt=media&token=06e042b3-7548-4646-9043-1f1401b7e19f'}}/>
                      <Text>Facebook</Text>
                    </View>
                    <View style={{width:'20%',alignItems:"center",alignItems:"flex-end",paddingRight:10}}>
                      <Image style={{height:20,width:20}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/radio-button-svgrepo-com.png?alt=media&token=49b8134e-cdb5-4009-a620-b214bd5665af'}}/>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{height:100}}></View>

            
            



            <View style={{height:100}}></View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
    </NativeBaseProvider>
  )
}

export default Brief

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:'100%',
        backgroundColor:"#B22830"
    },
    header1:{
        height:50,
        width:"100%",
        backgroundColor:"white",
        flexDirection:'row'
    },
    body:{
        height:"76%",
        width:"100%",
        alignItems:"center",
        backgroundColor:"#E5E7EB",
        borderTopLeftRadius:20,
        borderTopEndRadius:20,
        overflow:'hidden',
        marginTop:10
      },
})