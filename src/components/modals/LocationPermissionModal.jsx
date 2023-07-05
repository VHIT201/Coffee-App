import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, Accuracy, getCurrentPositionAsync } from 'expo-location';

const LocationPermissionModal = ({ navigation }) => {
  const [userAddress, setUserAddress] = useState('');

  const requestLocationPermission = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      if (status === 'granted') {
        console.log('Location permission granted');
        const { coords } = await getCurrentPositionAsync({ accuracy: Accuracy.High });
        const { latitude, longitude } = coords;
        setUserAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
        

      } else {
        console.log('Location permission denied');
        navigation.navigate('Login'); // Chuyển hướng đến màn hình Login
      }
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(userAddress);

  const onPressAccept = () => {
    requestLocationPermission();
    navigation.navigate('Login'); // Chuyển hướng đến màn hình Login
  };

  const onPressRefuse = ()=>{
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={{ height: 220, width: 360, backgroundColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: '80%', width: '100%', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Sử dụng vị trí của bạn</Text>
          <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>Quyền truy cập vị trí được yêu cầu để chọn trước cửa hàng gần nhất cho người dùng và để hiển thị danh sách các cửa hàng trên bản đồ cửa hàng.</Text>
          <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>Thông tin vị trí được dùng để tính toán khoảng cách từ người dùng đến các cửa hàng gần nhất khi ứng dụng đang mở.</Text>
        </View>
        <View style={{ height: '20%', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={onPressRefuse} style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderRightWidth: 0.5, borderColor: '#414141' }}>
            <Text style={{ color: '#fc9295', fontSize: 14, fontWeight: 'bold' }}>Từ chối</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderColor: '#414141', borderLeftWidth: 0.5 }} onPress={onPressAccept}>
            <Text style={{ color: '#fc9295', fontSize: 14, fontWeight: 'bold' }}>Chấp nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocationPermissionModal;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0.5019607843137255, 0.5019607843137255, 0.5019607843137255, 0.3)'
  }
});
