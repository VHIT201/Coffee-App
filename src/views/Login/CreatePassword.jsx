import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image } from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };
  

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar />
        <View style={{ height: '6%', width: "100%", justifyContent: "center" }}>
          <TouchableOpacity style={{ height: 20, width: 30, justifyContent: 'center' }}>
            <Icon as={AntDesign} name='left' size={'sm'} />
          </TouchableOpacity>
        </View>
        <Text style={{ lineHeight: 40, fontSize: 24, fontWeight: 'bold' }}>Tạo mật khẩu</Text>
        <Text style={{ color: '#9CA3AF', marginTop: 10 }}>Mật khẩu cần dài ít nhất 8 ký tự</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Mật Khẩu Mới"
            placeholderTextColor={'#E5E7EB'}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={{marginRight:10}} onPress={toggleShowPassword}>
            <Icon as={AntDesign} name={showPassword ? 'eyeo' : 'eye'} size={'md'} color='#E5E7EB' />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Xác Nhận Mật Khẩu"
            placeholderTextColor={'#E5E7EB'}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={{marginRight:10}} onPress={toggleShowConfirmPassword}>
            <Icon as={AntDesign} name={showConfirmPassword ? 'eyeo' : 'eye'} size={'md'} color='#E5E7EB'/>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,width:'100%',justifyContent:"space-between"}}>
        
        {(password.length >= 8 && confirmPassword.length >=8 && password != confirmPassword)?
        (<Text style={{fontSize:11,color:'#B22830'}}>Mật khẩu không khớp, vui lòng thử lại</Text>)
        :
        (<Text style={{fontSize:11,color:'#B22830'}}></Text>)
        }
        {(password.length >= 8 && confirmPassword.length >=8 && password === confirmPassword)?
        (<TouchableOpacity style={{height:40,width:"100%",backgroundColor:"#B22830",borderRadius:20,marginBottom:20,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>TẠO MẬT KHẨU</Text>
            </TouchableOpacity>)
        :
        ( <TouchableOpacity disabled={true} style={{height:40,width:"100%",backgroundColor:"#D1D5DB",borderRadius:20,marginBottom:20,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>TẠO MẬT KHẨU</Text>
            </TouchableOpacity>)
        }
        </View>

      </View>
    </NativeBaseProvider>
  )
}

export default CreatePassword

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
    backgroundColor: "white"
  },
  inputContainer: {
    height: 36,
    width: "100%",
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    flex: 1
  }
});
