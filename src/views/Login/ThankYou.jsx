import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";



const ThankYou = () => {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
   
    </View>
    </NativeBaseProvider>
  )
}

export default ThankYou

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"white"
    },  
    gif:{
      height:200,
      width:200
    }
})