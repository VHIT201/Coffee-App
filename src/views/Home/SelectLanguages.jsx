import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SelectLanguages = () => {
  //useState
  const [language,setLanguage] = useState('Vietnamese')

  //function
  const changeLanguageVietNamese =()=>{
    setLanguage('Vietnamese')
  }
  const changeLanguageEnglish =()=>{
    setLanguage('English')
  }
  return (
    //SECTION - Container
    <View style={styles.container}>
      <View
        style={{
          height: "50%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: "50%", width: "80%",marginTop:40 }}
          resizeMode="contain"
          source={require("../../assets/logos/highlandscoffeeredlogo.png")}
        />
      </View>
      <View
        style={{
          height: "50%",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View style={styles.bottom}>
        {/* //SECTION - Select language */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Lựa chọn ngôn ngữ
          </Text>
          <View style={{ height: "32%", width: "100%",flexDirection:'row',justifyContent:'space-evenly',alignItems:"center",marginBottom:20}}>
            <TouchableOpacity onPress={changeLanguageVietNamese} style={language==='Vietnamese'?styles.btnActive:styles.btn}>
              <Image
                style={{ height: 40, width: 40 }}
                resizeMode="contain"
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png",
                }}
              />
              <Text>Tiếng Việt</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeLanguageEnglish} style={language==='English'?styles.btnActive:styles.btn}>
              <Image
                style={{ height: 40, width: 40 }}
                resizeMode="contain"
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/285px-Flag_of_the_United_States_%28Pantone%29.svg.png",
                }}
              />
              <Text>English</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{height:40,width:'90%',backgroundColor:'#B22830',justifyContent:"center",alignItems:'center',borderRadius:20}}>
            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>TIẾP TỤC</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default SelectLanguages;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FDE8A5",
  },
  bottom: {
    height: "86%",
    width: "100%",
    backgroundColor: "white",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  btn: {
    height: "100%",
    width: "40%",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    gap:4
  },
  btnActive: {
    height: "100%",
    width: "40%",
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    gap:4,
    borderColor:'#B22830'
  },
});
