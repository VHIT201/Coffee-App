import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const HomePageSwiper = ({ data }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} loop={true} autoplay={true} showsPagination={false}>
      {data.map((item, index) => (
        <View key={index} style={styles.slide1}>
          <Image style={styles.image} resizeMode="cover" source={{ uri: item.img }} />
        </View>
      ))}
    </Swiper>
  );
};

export default HomePageSwiper;

const styles = StyleSheet.create({
  wrapper: {
    
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
