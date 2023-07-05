import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { login } from "../../services/api";
const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUserName] = useState("");
  const [data,setData] = useState("");
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async () => {
    const res  = await login({username, password})
    setData(res)
  }
  // console.log(data);
  
  useEffect(() => {
    if(data?.status === 'OK' ){
      navigation.navigate('Home')
    }
    if(data?.status === 'ERR'){
      console.log(data.message)
    }
    
  }, [data]);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={{ height: "14%", width: "100%" }}></View>
        <Image
          style={{ height: 120, width: 120 }}
          resizeMode="contain"
          source={require("../../assets/logos/highlandscoffeeredlogo.png")}
        />

        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#B22830",
            lineHeight: 30,
          }}
        >
          Chào Mừng Trở Lại !
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
           
            placeholder="Số điện thoại"
            style={styles.textInput}
            value={username}
            onChangeText={setUserName}
          />
        </View>

        <View style={styles.inputContainer1}>
          <TextInput
            placeholder="Mật khẩu"
            style={styles.textInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={toggleShowPassword}
          >
            <Icon
              as={AntDesign}
              name={showPassword ? "eyeo" : "eye"}
              size="md"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={{ flexDirection: "row", gap: 10 }}
          >
            {check && (
              <View
                style={{
                  height: 16,
                  width: 16,
                  borderWidth: 1,
                  borderColor: "#D1D5DB",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon as={AntDesign} name="check" />
              </View>
            )}
            {!check && (
              <View
                style={{
                  height: 16,
                  width: 16,
                  borderWidth: 1,
                  borderColor: "#D1D5DB",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
            )}
            <Text style={{ fontSize: 13 }}>Ghi nhớ tôi</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "#B22830" }}>
              Quên mật khẩu ?
            </Text>
          </TouchableOpacity>
        </View>

        {phoneNumber.length < 3 && password.length < 3 ? (
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              marginTop: 40,
              height: 36,
              width: "100%",
              backgroundColor: "#D1D5DB",
              justifyContent: "center",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#9CA3AF" }}
            >
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={()=>handleLogin(username,password) }
            style={{
              marginTop: 40,
              height: 36,
              width: "100%",
              backgroundColor: "#B22830",
              justifyContent: "center",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        )}

        <View style={{width:"90%",marginTop:30,flexDirection:"row",justifyContent:'space-around',alignItems:"center"}}>
          <View style={{height:0.5,width:'30%',backgroundColor:"black"}}></View>
          <Text>hoặc</Text>
          <View style={{height:0.5,width:'30%',backgroundColor:"black"}}></View>
        </View>

        <View style={{width:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center',gap:30,marginTop:30}}>
                <TouchableOpacity style={{height:40,width:40,backgroundColor:'white',borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                  <Image style={{height:30,width:30,borderRadius:15}} resizeMode='contain' source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40,width:40,backgroundColor:'white',borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                  <Image style={{height:30,width:30,borderRadius:15}} resizeMode='contain' source={{uri:"https://www.freepnglogos.com//uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"}}/>
                </TouchableOpacity>
            </View>

            <View style={{flex:1,width:"100%",justifyContent:"center",alignItems:"flex-end",flexDirection:"row"}}>
              <Text>Khách hàng mới ?  </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <Text style={{color:'#B22830',fontSize:15,fontWeight:"bold"}}>Tạo một tài khoản</Text>
              </TouchableOpacity>
            </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FDE8A5",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  inputContainer1: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
  passwordToggle: {
    padding: 5,
  },
});
