import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity,StatusBar,Image } from "react-native";
import { NativeBaseProvider, Text, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Information = () => {

    //use State
    const [checkPolicies,setCheckPolicies] = useState(false)
    const [checkLoyaltyProgram,setCheckLoyaltyProgram] = useState(false)
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <StatusBar/>
      <View style={{height:"6%",width:"100%",flexDirection:'row',alignItems:"center"}}>
        <TouchableOpacity style={{height:'100%',width:'5%',justifyContent:"center"}}>
            <Icon as={AntDesign} name='left' size={'sm'}/>
        </TouchableOpacity>

        <View style={{height:"100%",width:"90%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>Thông Tin Khách Hàng</Text>
        </View>

        <View style={{height:'100%',width:"5%"}}></View>
      </View>
      <View style={{width:"100%",marginTop:10}}>
        <Text style={{fontWeight:"bold"}}>Thông Tin Cá Nhân</Text>
      </View>

      <View style={{width:'100%',flexDirection:"row",justifyContent:"center",alignItems:"center",height:40,marginTop:20}}>
        <TextInput style={{height:"100%",width:'48%',borderWidth:1,borderColor:'#d6d6e7',paddingLeft:10}} placeholder="Tên (Không bắt buộc)"></TextInput>
        <View style={{height:'100%',width:"4%"}}></View>
        <TextInput style={{height:"100%",width:'48%',borderWidth:1,borderColor:'#d6d6e7',paddingLeft:10}} placeholder="Họ (Không bắt buộc)"></TextInput>

      </View>
      <View style={{width:'100%',flexDirection:"row",justifyContent:"center",alignItems:"center",height:40,marginTop:20}}>
        <View style={{height:"100%",width:'20%',gap:6,justifyContent:"center",alignItems:'center',flexDirection:"row",borderWidth:1,borderColor:'#d6d6e7'}}>
        <Image
                style={{ height: 20, width: 20 }}
                resizeMode="contain"
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxXOdK8yUgu5Rd29X-Xm6_xQXRj0Rvc3z_tDdQS_1&s",
                }}
              />
        <Text>+84</Text>
        </View>
        <View style={{height:'100%',width:"4%"}}></View>
        <View style={{height:"100%",width:'76%',borderWidth:1,borderColor:'#d6d6e7',paddingLeft:10,justifyContent:"center",alignItems:"flex-start"}}>
            <Text style={{marginLeft:4}}>382823786</Text>
        </View>
        
        
      </View>
      <View style={{width:"100%",flexDirection:"row",marginTop:20}}>
            <TouchableOpacity onPress={()=>setCheckPolicies(!checkPolicies)} style={{flexDirection:"row",justifyContent:'center',alignItems:"center", gap:10}}>
                {checkPolicies===true ?(
                    <View style={{height:16,width:16,borderWidth:1,borderColor:'#d6d6e7',backgroundColor:"#fc9295"}}>
                    <Icon as={AntDesign} name='check' color='white'/>
                </View>
                ):(
                    <View style={{height:16,width:16,borderWidth:1,borderColor:'#d6d6e7'}}></View>
                )}
                
                

                <Text>Chấp nhận  </Text>
            </TouchableOpacity>
            <TouchableOpacity><Text style={{color:'#B22830',textDecorationLine:"underline"}}>Chính sách/Policies</Text></TouchableOpacity>
        </View>
      <View style={{width:"100%",flexDirection:"row",marginTop:10}}>
            <TouchableOpacity onPress={()=>setCheckLoyaltyProgram(!checkLoyaltyProgram)} style={{flexDirection:"row",justifyContent:'center',alignItems:"center", gap:10}}>
                {checkLoyaltyProgram===true ?(
                    <View style={{height:16,width:16,borderWidth:1,borderColor:'#d6d6e7',backgroundColor:"#fc9295"}}>
                    <Icon as={AntDesign} name='check' color='white'/>
                </View>
                ):(
                    <View style={{height:16,width:16,borderWidth:1,borderColor:'#d6d6e7'}}></View>
                )}
                
                

                <Text>Chấp nhận  </Text>
            </TouchableOpacity>
            <TouchableOpacity><Text style={{color:'#B22830',textDecorationLine:"underline"}}>CT Thành Viên/Loyalty Program</Text></TouchableOpacity>
        </View>
        
        <View style={{flex:1,width:'100%',alignItems:"center",justifyContent:"flex-end"}}>

        {(checkPolicies===true && checkLoyaltyProgram===true)?
        (<TouchableOpacity style={{height:40,width:"100%",backgroundColor:"#B22830",borderRadius:20,marginBottom:20,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>TIẾP THEO</Text>
            </TouchableOpacity>)
        :
        ( <TouchableOpacity disabled={true} style={{height:40,width:"100%",backgroundColor:"#D1D5DB",borderRadius:20,marginBottom:20,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>TIẾP THEO</Text>
            </TouchableOpacity>)
        }
           
            
        </View>
    </View>
    </NativeBaseProvider>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:"100%",
        backgroundColor:"white",
        padding:10
    },
})