import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

//import component
    import LocationPermissionModal from '../../components/modals/LocationPermissionModal'

const LocationPermission = ({navigation}) => {
  return (
    <View style={styles.container}>
  
        <Image style={{height:'50%',width:"70%"}} resizeMode='contain' source={require('../../assets/logos/highlandscoffeeredlogo.png')}/>
        
            <View style={{position:'absolute',height:"100%",width:'100%'}}>
            <LocationPermissionModal navigation={navigation}/>
            </View>
        

    </View>
    
  )
}

export default LocationPermission

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#FDE8A5",
        position:'relative',
        justifyContent:"center",
        alignItems:"center",
    }
})