import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign,MaterialIcons } from "@expo/vector-icons";
import ListProduct from "../../data/ListProduct";
import MainData from "../../data/MainData";

const Order = ({navigation}) => {
  const [nameData, setNameData] = useState("Traditional coffee");
  const [selectedItem, setSelectedItem] = useState('Traditional coffee');
  const filteredData = MainData.filter((item) => item.attribute === nameData);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Search')}
          style={{
            marginBottom: 20,
            height: 30,
            width: "90%",
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#D1D5DB",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "#D1D5DB", fontSize: 12 }}>Tìm kiếm tên món ăn</Text>
          <Icon as={AntDesign} name="search1" color="#D1D5DB" />
        </TouchableOpacity>

        <View style={{ height: 100, width: "100%", backgroundColor: "white", flexDirection: "row", gap: 20 }}>
          <FlatList
          showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
            horizontal
            data={ListProduct}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setNameData(item.attribute)} style={{ height: "100%", width: 80, justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: "70%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                  <Image style={{ height: 50, width: 50 }} resizeMode="contain" source={item.link} />
                </View>
                <View style={{ height: "30%", width: "100%", justifyContent: "flex-start", alignItems: "center" }}>
                  <Text style={[styles.itemText, item.attribute === nameData && styles.selectedItemText]}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <FlatList
          style={{ marginTop: 20 }}
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailProduct", { productID: item.id })}
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
        <Image style={{ height: "80%", width: "80%" }} resizeMode="contain" source={{ uri: item.img }} />
      </View>
      <View style={{ width: "48%", height: "90%", justifyContent: "space-evenly" }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <View style={{ width: "90%", height: "40%" }}>
          <Text style={{ fontSize: 11, lineHeight: 16, color: "#9CA3AF" }} numberOfLines={2}>
            {item.describe}
          </Text>
        </View>
        <View style={{ height: 20, width: 70, backgroundColor: "black", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 12 }}>{item.id}</Text>
        </View>
      </View>
      <View style={{ width: "26%", height: "100%", justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{ color: "#4B5563", marginTop: 4 }}>{item.price} đ</Text>
      </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{height:50,gap:10,width:'100%',position:'absolute',bottom:0,backgroundColor:'#B22830',flexDirection:"row",padding:10,justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',justifyContent:'center',gap:10}}>
          <View style={{height:'100%',justifyContent:'center',alignItems:"center"}}>
              <Icon as={MaterialIcons} name='location-on' size={'lg'} color='white'/>
          </View>
          <View style={{height:'100%',justifyContent:'center',paddingTop:4,paddingBottom:4}}>
              <Text style={{color:'white',fontSize:12}}>Tại Bàn</Text>
              <TouchableOpacity><Text style={{color:'white',fontWeight:"bold"}}>Chọn một địa chỉ</Text></TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('ShoppingCart')} style={{justifyContent:'center',alignItems:"center",height:'100%',marginRight:10}}>
          <Icon as={AntDesign} name='shoppingcart' size={'xl'} color='white'/>
        </TouchableOpacity>
        

        
      </View>
    </NativeBaseProvider>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    position:"relative"
  },
  itemText: {
    fontSize: 12,
    textAlign: "center",
    lineHeight: 14,
  },
  selectedItemText: {
    color: "red",
  },
});
