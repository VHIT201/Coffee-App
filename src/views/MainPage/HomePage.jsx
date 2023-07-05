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
import { useRoute } from '@react-navigation/native';


const HomePage = ({navigation}) => {

  const [selectedProductId, setSelectedProductId] = useState(null)
  return (
    <NativeBaseProvider>
      <StatusBar />
      <View style={{ height: 54, width: "100%" }}>
        <Header />
      </View>

      

      <ScrollView style={styles.container}>
        {/* <View style={{ height: 140, width: "100%", backgroundColor: "#FDE8A5" }}></View> */}
        <View style={{ height: 20 }}></View>
        <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <FlatList
            horizontal={true}
            data={ListProduct}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={()=>navigation.navigate('List',{attribute:item.attribute})}
              
                style={{
                  height: "100%",
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "70%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 60, width: 60 }}
                    resizeMode="contain"
                    source={item.link}
                  />
                </View>

                <View
                  style={{
                    height: "30%",
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "center",
                      lineHeight: 14,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ height: 150, width: "100%", padding: 10 }}>
          <HomePageSwiper data={DataEvent} />
        </View>

        <View style={{ height: 40, width: "100%", padding: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#e8600a" }}>
            Sản Phẩm Bán Chạy
          </Text>
        </View>
        <View style={{ height: 180, width: "100%", padding: 10 }}>
        <FlatList
  horizontal={true}
  data={MainData}
  renderItem={({ item }) => {
    if (item.BestSelling) {
      return (
        <TouchableOpacity
        onPress={()=>((navigation.navigate("DetailProduct",{productID:item.id})
       ))}
          style={{
            height: "100%",
            width: 100,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            marginRight: 20,
          }}
        >
        
          <View
            style={{
              height: "50%",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Image style={{ height: "90%", width: "80%" }} source={{uri:item.img}} />
          </View>
          <View
            style={{
              height: "50%",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ height: "64%" }}>
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                {item.name}
              </Text>
            </View>
            <View
              style={{
                height: "36%",
                backgroundColor: "#FEF3C7",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#e8600a",fontWeight:'bold' }}>
                {item.price} đ
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null; // Không render gì nếu item.BestSelling === false
    }
  }}
/>

          {/* //SECTION - SPBC */}
          
        </View>
        <View style={{ height: 60, width: "100%", padding: 10 }}></View>
        
        
        
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('ShoppingCart')} style={{height:60,width:60,borderRadius:30,backgroundColor:"#B22830",position:'absolute',bottom:20,right:20,justifyContent:'center',alignItems:"center"}}>
        <Icon as={Feather} name='shopping-bag' color={'white'} size='lg'/>
      </TouchableOpacity>

      
    </NativeBaseProvider>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
  },
});
