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
import { AntDesign,MaterialIcons,FontAwesome,FontAwesome5,Feather } from "@expo/vector-icons";

const Other = ({navigation}) => {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        
        <View style={{height:'20%',width:"100%",alignItems:"flex-end",paddingRight:20,justifyContent:'center',marginTop:10}}>
          <TouchableOpacity style={{height:24,width:90,borderRadius:20,borderWidth:1,justifyContent:'center',alignItems:"center",borderColor:'white'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'white'}}>Tiếng Việt</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,width:'100%',flexDirection:'row'}}>
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
      </View>
      <View style={styles.body}>
        <ScrollView style={{width:'100%',padding:20,marginTop:10}}>
        <View style={{height:10}}></View>
            <Text style={{color:"black",fontWeight:'bold',fontSize:16}}>Tài khoản</Text>
            <View style={{width:'100%',gap:6,marginTop:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Brief')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"50%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={FontAwesome5} name='user-alt' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Hồ sơ</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Settings')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"50%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={FontAwesome5} name='cog' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Cài đặt</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
            </View>

            <Text style={{color:"black",fontWeight:'bold',fontSize:16,marginTop:30}}>Tương tác</Text>
            <View style={{width:'100%',gap:6,marginTop:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Home',{screen:'Activity'})} style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"50%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={Feather} name='activity' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Hoạt động</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
              
            </View>


            <Text style={{color:"black",fontWeight:'bold',fontSize:16,marginTop:30}}>Thông tin chung</Text>
            <View style={{width:'100%',gap:6,marginTop:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Policies')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"50%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={Feather} name='file-text' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Chính sách/Policies</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('LoyaltyProgram')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"90%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={Feather} name='file-text' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>CT Thành Viên/Loyalty Program</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"90%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={Feather} name='alert-circle' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Giới thiệu về Phiên bản Ứng dụng</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
              
            </View>


            <Text style={{color:"black",fontWeight:'bold',fontSize:16,marginTop:30}}>Trung tâm trợ giúp</Text>
            <View style={{width:'100%',gap:6,marginTop:10}}>
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"50%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
              <Icon as={AntDesign} name='questioncircle' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Câu hỏi thường gặp</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:"100%",height:40,backgroundColor:"white",borderRadius:10,paddingRight:10,paddingLeft:10}}>
              <View style={{width:"90%",height:"100%",flexDirection:"row",alignItems:"center",gap:20}}>
                <Icon as={MaterialIcons} name='feedback' size='md' color='#B22830'/>
                <Text style={{fontWeight:'500'}}>Phản hồi & Hỗ trợ</Text>
              </View>
              <Icon as={FontAwesome5} name='angle-right' size='md' color='#B22830'/>
              </TouchableOpacity>
             
              
            </View>

            <TouchableOpacity style={{height:36,width:'100%',backgroundColor:"#B22830",borderRadius:20,justifyContent:"center",alignItems:"center",marginTop:30}}>
              <Text style={{color:"white",fontWeight:'bold',fontSize:15}}>ĐĂNG XUẤT</Text>
            </TouchableOpacity>



            <View style={{height:100}}></View>
        </ScrollView>
      </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Other

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:'100%',
    backgroundColor:'#B22830'

  },  
  header:{
    height:"24%",
    width:'100%',
    
  },
  body:{
    height:"76%",
    width:"100%",
    alignItems:"center",
    backgroundColor:"#E5E7EB",
    borderTopLeftRadius:40,
    borderTopEndRadius:40,
    overflow:'hidden'
  },
})