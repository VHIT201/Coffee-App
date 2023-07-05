import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { Icon, NativeBaseProvider } from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

//import list
import ListNumberPhone from "../../data/ListNumberPhone";
import { CartContext } from "../../../App";
const Register = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [btnAct, setBtnAct] = useState(false);
  const [ListVisible, setListVisible] = useState(false);
  const [prefix, setPrefix] = useState("+84");
  const {numberPhone, setNumberPhone} = useContext(CartContext)
  const [filterValue, setFilterValue] = useState("");

  const handleChangeText = (inputText) => {
    if (inputText.length > 3) {
      setBtnAct(true);
    } else {
      setBtnAct(false);
    }
    setNumberPhone(prefix.concat(inputText));
  };
  console.log(numberPhone);
  const handleTouchableOpacityPress = () => {
    setListVisible(!ListVisible);
  };

  const handleFilterChange = (text) => {
    setFilterValue(text);
  };

  const renderFlatList = () => {
    const filteredList = ListNumberPhone.filter((item) =>
      item.country.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
      <FlatList
        data={filteredList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setPrefix(item.code);
              setListVisible(false);
            }}
            style={{ height: 40, width: "100%", flexDirection: "row" }}
          >
            <View
              style={{
                width: "16%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                resizeMode="contain"
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxXOdK8yUgu5Rd29X-Xm6_xQXRj0Rvc3z_tDdQS_1&s",
                }}
              />
            </View>
            <View style={{ height: "100%", width: "2%" }}></View>
            <View
              style={{
                height: "100%",
                width: "82%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 13 }}>{item.country}</Text>
              <Text style={{ fontSize: 13 }}>{item.code}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={{ height: "100%", width: "100%", gap: 40, marginTop: 70 }}>
          <View
            style={{
              height: 120,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 120, width: 120, marginTop: 30 }}
              resizeMode="contain"
              source={require("../../assets/logos/highlandscoffeeredlogo.png")}
            />
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%" }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  color:"#B22830"
                }}
              >
                Bắt đầu cuộc hành trình của bạn
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <KeyboardAvoidingView
              style={{
                height: 46,
                width: "90%",
                backgroundColor: "white",
                flexDirection: "row",
                position: "relative",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  height: "100%",
                  width: "20%",
                  justifyContent: "center",
                  gap: 10,
                  alignItems: "center",
                  flexDirection: "row",
                }}
                onPress={handleTouchableOpacityPress}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png",
                    }}
                  />
                </View>
                <Text style={{ fontSize: 12 }}>{prefix}</Text>
              </TouchableOpacity>

              <View
                style={{
                  height: "100%",
                  width: "4%",
                  backgroundColor: "#FDE8A5",
                }}
              ></View>
              <View
                style={{
                  height: "100%",
                  width: "76%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextInput
                  onChangeText={handleChangeText}
                  style={{ height: "100%", width: "90%" }}
                  placeholder="Số điện thoại"
                ></TextInput>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity onPress={()=>navigation.navigate('OTPViews')}
              style={btnAct === false ? styles.btn : styles.btnAct}
            >
              <Text
                style={{ color: "#E5E7EB", fontSize: 14, fontWeight: "bold" }}
              >
                TIẾP TỤC
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* //SECTION - underFormRegister */}
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              gap:30,
              paddingBottom:20
              
            }}
          >
            <View
              style={{
                height: 20,
                width: "80%",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
                

              }}
            >
              <View style={{height:0.5,width: "30%",}}>
                <View
                  style={{ height: 1, width: "100%", backgroundColor: "black" }}
                ></View>
              </View>
              <View style={{height:"100%",width:"10%",justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:12}}>hoặc</Text>
              </View>
              <View style={{height:0.5,width: "30%",}}>
                <View
                  style={{ height: 1, width: "100%", backgroundColor: "black" }}
                ></View>
              </View>
            </View>
            <View style={{height:'10%',width:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center',gap:30}}>
                <TouchableOpacity style={{height:40,width:40,backgroundColor:'white',borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                  <Image style={{height:30,width:30,borderRadius:15}} resizeMode='contain' source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40,width:40,backgroundColor:'white',borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                  <Image style={{height:30,width:30,borderRadius:15}} resizeMode='contain' source={{uri:"https://www.freepnglogos.com//uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"}}/>
                </TouchableOpacity>
            </View>
            <View style={{height:'10%',width:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center',gap:30}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{height:40,justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:'#B22830',fontSize:14,fontWeight:'bold'}}>TIẾP TỤC NHƯ KHÁCH</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{width:"100%",justifyContent:'center',alignItems:'center',flexDirection:"row",padding:10}}>
            <Text>Đã có tài khoản ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{height:40,justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:'#B22830',fontSize:14,fontWeight:'bold'}}>Đăng nhập</Text>
                </TouchableOpacity>
                
            </View>
          </View>
        </View>
        {ListVisible && (
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={-400}
            style={{
              height: windowHeight,
              width: windowWidth,
              backgroundColor: "white",
              position: "absolute",
              zIndex: 1,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* SECTION - headerListCountry */}
            <View style={styles.headerListCountry}>
              <View
                style={{
                  height: "100%",
                  width: "20%",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <TouchableOpacity
                  onPress={() => setListVisible(false)}
                  style={{
                    height: "70%",
                    width: "70%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    as={AntDesign}
                    name="left"
                    size={"md"}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "60%",
                  justifyContent: "flex-end",
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
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  >
                    Chọn Quốc Gia
                  </Text>
                </View>
              </View>
              <View style={{ height: "100%", width: "20%" }}></View>
            </View>
            <View style={styles.bodyListCountry}>
              <View style={styles.searchBox}>
                <View
                  style={{
                    height: "100%",
                    width: "10%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon as={FontAwesome} name="search" color={"muted.500"} />
                </View>
                <KeyboardAvoidingView
                  behavior="position"
                  keyboardVerticalOffset={-400}
                  style={{
                    height: "100%",
                    width: "90%",
                    justifyContent: "center",
                  }}
                >
                  <TextInput
                    style={{ height: "100%", width: "100%" }}
                    placeholder="Nhập tên quốc gia"
                    value={filterValue}
                    onChangeText={handleFilterChange}
                  />
                </KeyboardAvoidingView>
              </View>

              {/* SECTION - Flatlist */}
              <View style={{ flex: 1, width: "100%", marginTop: 10 }}>
                {renderFlatList()}
              </View>
            </View>
          </KeyboardAvoidingView>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE8A5",
    position: "relative",
  },
  headerListCountry: {
    height: "10%",
    width: "100%",
    backgroundColor: "#B22830",
    flexDirection: "row",
  },
  bodyListCountry: {
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  searchBox: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
    height: 40,
    width: "90%",
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnAct: {
    marginTop: 20,
    height: 40,
    width: "90%",
    backgroundColor: "#B22830",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
