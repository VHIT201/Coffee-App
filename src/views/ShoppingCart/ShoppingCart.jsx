import React, { useState,useContext } from "react";
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
import { useNavigation } from '@react-navigation/native';
import MainData from "../../data/MainData";
import { CartContext } from "../../../App";
const ShopppingCart = () => {
    const getProductById = (id) =>{
      return MainData.find((product)=>product.id === id)
    }

    const navigation = useNavigation();
    const {cart,setCart} = useContext(CartContext)
    console.log(cart)
  return (
    <>
      <NativeBaseProvider>
      <View style={styles.container}>
      <StatusBar/>
       
  
  {/* //SECTION - NullCart */}
  
      {cart.length<1?
      (
        <>
          <View style={{height:"50%",width:"100%",justifyContent:'flex-end',alignItems:"center"}}>
        <View style={{height:140,width:140,borderRadius:70,borderWidth:2,justifyContent:'center',alignItems:"center",borderColor:"#B22830",marginBottom:20}}>
        <Icon size={'6xl'} as={Feather} name='shopping-bag' color='#B22830'/>
        </View>
        </View>
        <View style={{height:'50%',width:"100%",alignItems:"center",justifyContent:'space-between'}}>
          <View style={{width:"80%",justifyContent:"center",alignItems:"center",gap:10,marginTop:20}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>Giỏ hàng của bạn đang trống.</Text>
            <Text style={{fontSize:14,textAlign:'center',fontWeight:'500'}}>Bạn chưa thêm bất cứ sản phẩm nào vào giỏ hàng của mình.</Text>
          </View>
    
          <TouchableOpacity onPress={()=>navigation.navigate('Home',{screen:'Order'})} style={{height:40,width:'90%',backgroundColor:"#B22830",borderRadius:20,justifyContent:"center",alignItems:"center",marginBottom:10}}>
            <Text style={{fontWeight:'bold',fontSize:15,color:"white"}}>ĐẶT HÀNG NGAY</Text>
          </TouchableOpacity>
        </View>
        </>
      )
      :
      (
        <>
          <View style={{height:50,width:"100%",flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:"100%",width:"10%",justifyContent:"center",alignItems:'center'}}>
            <Icon as={AntDesign} name='left' />
          </TouchableOpacity>
          <View style={{height:"100%",width:"80%",justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:18,fontWeight:"bold",marginTop:10,lineHeight:24,color:'#B22830'}}>GIỎ HÀNG CỦA BẠN</Text>
          </View>
          <View style={{width:'10%'}}></View>
          </View>
         

          <View style={{height:'80%',width:'100%',marginTop:10}}>
          <FlatList
  style={{ marginTop: 20 }}
  data={cart}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => {
    const product = getProductById(item.id);
    return (
      <TouchableOpacity
        key={index.toString()}
        style={{
          height: 100,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#D1D5DB",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "26%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image style={{ height: "80%", width: "80%" }} resizeMode="contain" source={{ uri: product.img}} />
        </View>
        <View style={{ width: "48%", height: "90%", justifyContent: "space-evenly" }}>
          <Text style={{ fontWeight: "bold" }}>{product.name}</Text>
          <View style={{ width: "90%", height: "40%" }}>
            <Text style={{ fontSize: 11, lineHeight: 16, color: "#9CA3AF" }} numberOfLines={2}>
              {product.describe}
              
            </Text>
          </View>
          <View style={{ height: 20, width: 70, backgroundColor: "black", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 12 }}>{product.id}</Text>
          </View>
        </View>
        <View style={{ width: "26%", height: "100%", justifyContent: "flex-start", alignItems: "center", marginTop: 10 }}>
          <Text style={{ color: "#4B5563", marginTop: 4 }}>{product.price} đ</Text>
          <Text>x {item.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  }}
/>

          </View>


          <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:"flex-end",padding:10}}>
            <TouchableOpacity style={{height:40,width:'100%',justifyContent:'center',alignItems:"center",backgroundColor:"#B22830",borderRadius:20}}>
              <Text style={{fontSize:15,fontWeight:'500',color:'white'}}>ĐẶT HÀNG</Text>
            </TouchableOpacity>
          </View>
        </>
      )
      }
      
  
      </View>
      </NativeBaseProvider>
    </>
  )
}

export default ShopppingCart

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:'100%',
        padding:10,
        alignItems:'center'
    },
})