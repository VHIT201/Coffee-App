import React, { useContext, useRef } from "react";
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

import { CartContext } from "../../../App";
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
const ninetyPercentHeight = (windowHeight * 92 / 100);
const DetailProduct = ({navigation}) => {

  

  const {cart,setCart} = useContext(CartContext)
  
  const addToCart = (id,num) =>{
    const itemOrder =  cart.find(
        (item) => item?.id === id
        );
     if (itemOrder) {
      const temp = cart.filter(item => item.id !== id)
        itemOrder.amount +=num;
        setCart([...temp,itemOrder])
      } else {
        setCart([...cart,{id: id,amount: num}])
      }
  }
  console.log(cart)

  const scrollViewRef = useRef(null)
  const [isScrollViewEnd, setScrollViewEnd] = useState(false);
  const [quantity,setQuantity] = useState(1)
  const handleScroll = (event) => {
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;
    
    const isEnd = scrollViewHeight + scrollOffset >= contentHeight;
    setScrollViewEnd(isEnd);
  };

  const handlePlusQuantity =()=>{
    setQuantity(quantity+1)
  }

  const handleMinusQuantity =()=>{
    if(quantity-1>0){
      setQuantity(quantity-1)
    }
    if(quantity-1<=0){
      setQuantity(0)
    }
  }
  //useState
  const [act,setAct] = useState('S')
  const route = useRoute()
  
  const productId = route.params.productID

  const product = MainData.find(item => item.id === productId)
 
  const add = product.price * quantity
  return (
    <NativeBaseProvider>
    
    <StatusBar/>
    <View style={styles.container}>
      <ScrollView style={{width:"100%"}} onScroll={handleScroll} ref={scrollViewRef}>
      <View style={{height:400,width:"100%",backgroundColor:"white",justifyContent:'center',alignItems:"center"}}>
      <Image style={{height:"80%",width:"80%"}} resizeMode='contain' source={{uri:product.img}}/>
      </View>

      <View style={{height:windowHeight,width:"100%",padding:10,backgroundColor:"#e9e5df",borderTopLeftRadius:20,borderTopEndRadius:20}}>
        <View style={{width:"100%",flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginTop:20,marginBottom:12}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{product.name}</Text>
            <Text style={{fontSize:18,fontWeight:"bold",marginRight:10}}>{product.price} đ</Text>
        </View>
        <View style={{width:"76%"}}>
            <Text style={{fontSize:12,color:'#666'}}>{product.describe}</Text>
            {/* <Text style={{fontSize:12,color:'#666'}}>Phần trang trí có thể bị ảnh hưởng khi vận chuyển.</Text> */}
            <Text style={{fontSize:12,color:'#666'}}>{product.VAT}</Text>
        </View>
        <View style={{height:20,width:60,backgroundColor:"black",borderRadius:20,justifyContent:"center",alignItems:"center",marginBottom:30,marginTop:20}}>
            <Text style={{color:"white",fontSize:12}}>{product.id}</Text>
        </View>

        <View style={{width:"100%",flexDirection:'row',gap:10,marginBottom:20}}>
          <TouchableOpacity onPress={()=>setAct('S')} style={act === 'S' ? styles.btnAct : styles.btn}>
            <Text style={act ==='S' ? styles.textInbtn : styles.textInbtnAct}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setAct('M')} style={act === 'M' ? styles.btnAct : styles.btn}>
            <Text style={act ==='M' ? styles.textInbtn : styles.textInbtnAct}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setAct('L')} style={act === 'L' ? styles.btnAct : styles.btn}>
            <Text style={act ==='L' ? styles.textInbtn : styles.textInbtnAct}>L</Text>
          </TouchableOpacity>
        </View>

        <View style={{height:1,width:'100%',backgroundColor:'#9CA3AF',marginBottom:30}}></View>

        <View style={{height:100,width:'100%',gap:10}}>
          <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
            <Icon as={MaterialCommunityIcons} name='note-edit' color={'#B22830'}/>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Ghi Chú</Text>
            <Text style={{fontSize:12,color:'#9CA3AF'}}>Không bắt buộc</Text>
          </View>
          <View style={{height:60,width:'100%',borderWidth:1,padding:10,marginBottom:80}}>
            <TextInput placeholder="Ghi Chú"></TextInput>
          </View>
        </View>
      </View>
      </ScrollView>
      <View style={{position:'absolute',height:46,width:'100%',justifyContent:"center",alignItems:"flex-start",padding:10,backgroundColor:'#B22830'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Icon as={EvilIcons} name='close' size='2xl' color={'white'}/></TouchableOpacity>
      </View>
      <View style={{position:'absolute',bottom:0,height:60,width:'100%',alignItems:"center",flexDirection:'row',padding:10,backgroundColor:'white',justifyContent:"space-between"}}>
        <View style={{width:'50%',flexDirection:"row",gap:20,alignItems:'center'}}>
          <TouchableOpacity onPress={handleMinusQuantity} style={{height:30,width:30,borderWidth:1,justifyContent:'center',alignItems:'center',borderColor:'#9CA3AF'}}>
            <Icon as={Entypo} name='minus'/>
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity onPress={handlePlusQuantity} style={{height:30,width:30,borderWidth:1,justifyContent:'center',alignItems:'center',borderColor:'#9CA3AF'}}>
            <Icon as={AntDesign} name='plus'/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>addToCart(productId,quantity)} style={{height:40,width:160,backgroundColor:'#B22830',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>THÊM {add} Đ</Text>
        </TouchableOpacity>
        </View>
    </View>
    
    </NativeBaseProvider>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"white",
        position:'relative'
    },
    btn:{
      height:40,
      width:100,
      backgroundColor:"white",
      borderRadius:10,
      justifyContent:"center",
      alignItems: "center",
    },

    btnAct:{
      height:40,
      width:100,
      backgroundColor:"#B22830",
      borderRadius:10,
      justifyContent:"center",
      alignItems: "center",
    },
    textInbtn:{
      color:'white',
      fontSize:12,
      fontWeight:"bold"
    },
    textInbtnAct:{
      color:'#6B7280',
      fontSize:12,
      fontWeight:"bold"
    },
})