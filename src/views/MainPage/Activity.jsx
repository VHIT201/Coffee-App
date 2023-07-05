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
import { AntDesign, Feather } from "@expo/vector-icons";

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
import { useRoute } from "@react-navigation/native";
const Activity = () => {
  const [isAct,setIsAct] = useState('Đang diễn ra')
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Header />
        <View style={{ height: 40, width: "100%", flexDirection: "row" }}>
          <TouchableOpacity onPress={()=>setIsAct('Đang diễn ra')} style={isAct === 'Đang diễn ra'? styles.btnAct : styles.btn}>
            <Text style={{ fontWeight: "500" }}>Đang diễn ra</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setIsAct('Lịch sử đặt hàng')} style={isAct === 'Đang diễn ra'? styles.btn : styles.btnAct}>
            <Text style={{ fontWeight: "500" }}>Lịch sử đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btn: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAct: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#B22830",
  },
});
