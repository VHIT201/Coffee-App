import React, { useRef } from "react";
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
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign,Feather,MaterialIcons,MaterialCommunityIcons,EvilIcons,Entypo } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

//import data
import ListProduct from "../../data/ListProduct";
import DataEvent from "../../data/DataEvent";
import BestSellingList from "../../data/BestSellingList";
import MainData from "../../data/MainData";
//import Component
import Header from "../../components/Header/Header";
import HomePageSwiper from "../../components/Swiper/HomePageSwiper";
import ListImgProduct from "../../assets/ListProductImg/ListImgProduct";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const List = ({navigation}) => {
  //useState
  const route = useRoute()
  const attribute = route.params.attribute
  
  const handleTitle =(title)=>{
    if(title === 'Traditional coffee'){
      return 'CÀ PHÊ TRUYỀN THỐNG'
    }
    if(title === 'Machine coffee'){
      return 'CÀ PHÊ PHA MÁY'
    }
    if(title === 'Tea'){
      return 'TRÀ'
    }
    if(title === 'PhinDi'){
      return 'PHINDI'
    }
    if(title === 'Freeze'){
      return 'FREEZE'
    }
    if(title === 'otherdrinks'){
      return 'THỨC UỐNG KHÁC'
    }
    if(title === 'cake'){
      return 'BÁNH'
    }
  }
  return (
    <NativeBaseProvider>
    <StatusBar/>
    <View style={styles.container}>
      
      <View style={{height:70}}></View>
        <FlatList
          data={MainData}
          renderItem={({item})=>{
            
            if(item.attribute === attribute){
              
              
              return(
                <TouchableOpacity onPress={()=>((navigation.navigate("DetailProduct",{productID:item.id}),
        console.log('hello world')))} style={{height:100,width:'100%',borderBottomWidth:1,borderBottomColor:'#D1D5DB',flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"26%",height:'100%',justifyContent:'center',alignItems:"center"}}>
            <Image style={{height:'80%',width:"80%"}} resizeMode='contain' source={{uri:item.img}}/>
          </View>
          <View style={{width:"48%",height:'90%',justifyContent:'space-evenly'}}>
            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
            <View style={{width:"90%",height:'40%'}}>
            <Text style={{fontSize:11,lineHeight:16,color:'#9CA3AF'}} numberOfLines={2}>{item.describe}</Text>
            </View>
            <View style={{height:20,width:70,backgroundColor:"black",borderRadius:20,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:"white",fontSize:12}}>{item.id}</Text>
            </View>
          </View>
          <View style={{width:"26%",height:'100%',justifyContent:'flex-start',alignItems:"center"}}>
            <Text style={{color:'#4B5563',marginTop:4}}>{item.price} đ</Text>
          </View>
        </TouchableOpacity>
              )
            }
            else{
              return null
            }
          }}

        />
        <View style={{height:60}}></View>
     
    </View>
    <View style={{height:60,width:'100%',padding:10,position:"absolute",top:0,backgroundColor:"#B22830",flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:"100%",width:'10%',justifyContent:"center"}}>
        <Icon as={EvilIcons} name='close' size='2xl' color={'white'}/>
        </TouchableOpacity>
        <View style={{width:'80%',height:"100%",justifyContent:"center",alignItems:"center",alignItems:"center"}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>{handleTitle(attribute)}</Text>
        </View>
        <TouchableOpacity style={{height:"100%",width:'10%',justifyContent:"center",alignItems:"center"}}>
        <Icon as={EvilIcons} name='search' size='2xl' color={'white'}/>
        </TouchableOpacity>
      </View>

      <View style={{height:50,gap:10,width:'100%',position:'absolute',bottom:0,backgroundColor:'#B22830',flexDirection:"row",padding:10}}>
        <View style={{height:'100%',justifyContent:'center',alignItems:"center"}}>
            <Icon as={MaterialIcons} name='location-on' size={'lg'} color='white'/>
        </View>
        <View style={{height:'100%',justifyContent:'center',paddingTop:4,paddingBottom:4}}>
            <Text style={{color:'white',fontSize:12}}>Tại Bàn</Text>
            <TouchableOpacity><Text style={{color:'white',fontWeight:"bold"}}>Chọn một địa chỉ</Text></TouchableOpacity>
        </View>

        
      </View>
    </NativeBaseProvider>
  )
}

export default List

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        position:'relative'
    },
})