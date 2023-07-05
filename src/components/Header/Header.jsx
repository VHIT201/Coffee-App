import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: 54, width: "100%", padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "white" }}>
      <TouchableOpacity style={{ height: 36, width: 36, backgroundColor: "#CECECE", borderRadius: 18, justifyContent: "center", alignItems: "center" }}>
        <Icon as={FontAwesome5} name="user-alt" color="#B22830" size="md" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{ height: 36, width: 36, borderRadius: 18, justifyContent: "center", alignItems: "center" }}>
        <Icon as={AntDesign} name="search1" size="lg" color="#CECECE" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
