import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import MainData from "../../data/MainData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState("");

  const filteredData = MainData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={()=>((navigation.navigate("DetailProduct",{productID:item.id})))}
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
  );

  return (
    <NativeBaseProvider>
      <StatusBar />
      <View style={styles.container}>
        <View style={{ height: 40, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{ height: "100%", width: "10%", justifyContent: "center", alignItems: "flex-start" }}>
            <Icon as={AntDesign} name="left" size="md" />
          </TouchableOpacity>
          <View style={{ height: "100%", width: "70%", borderWidth: 1, borderColor: "#D1D5DB", justifyContent: "center", alignItems: "center", gap: 2, padding: 10, borderRadius: 20, flexDirection: "row" }}>
            <TextInput style={{ height: "100%", width: "90%" }} placeholder="Tìm kiếm tên món ăn" onChangeText={setSearchText} />
            <Icon as={AntDesign} name="search1" />
          </View>
          <View style={{ height: "100%", width: "10%" }}></View>
        </View>

        <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
          <FlatList data={filteredData} renderItem={renderItem} />
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    padding: 10,
  },
});
