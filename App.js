import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { createContext, useContext, useState } from 'react';
import axios from 'axios';
// Import views
import LocationPermission from './src/views/Home/LocationPermission';
import SelectLanguages from './src/views/Home/SelectLanguages';
import Register from './src/views/Login/Register';
import OTPViews from './src/views/Login/OTPViews';
import Login from './src/views/Login/Login';
import Information from './src/views/Login/Information';
import CreatePassword from './src/views/Login/CreatePassword';
import ThankYou from './src/views/Login/ThankYou';
import HomePage from './src/views/MainPage/HomePage';
import Order from './src/views/MainPage/Order';
import Activity from './src/views/MainPage/Activity';
import Store from './src/views/MainPage/Store';
import Other from './src/views/MainPage/Other';
import DetailProduct from './src/views/Products/DetailProduct';
import List from './src/views/Products/List';
import Search from './src/views/Products/Search';
import ShoppingCart from './src/views/ShoppingCart/ShoppingCart';
import Brief from './src/views/OtherPage/Brief';
import Settings from './src/views/OtherPage/Settings';
import Policies from './src/views/Policy/Policies';
import LoyaltyProgram from './src/views/Policy/LoyaltyProgram';
export const CartContext = createContext(

); 

export default function App() {

  
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const [cart,setCart] = useState([])
  const [numberPhone,setNumberPhone] = useState(null)
  const [userLocation,setUserLocation] = useState(null)
  return (

  
    <NavigationContainer>
      <CartContext.Provider value={{cart,setCart,numberPhone,setNumberPhone,userLocation,setUserLocation}}>
      
        <Stack.Navigator initialRouteName="LocationPermission" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LocationPermission" component={LocationPermission} />
          <Stack.Screen name="SelectLanguages" component={SelectLanguages} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="OTPViews" component={OTPViews} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen name="ThankYou" component={ThankYou} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen name="Brief" component={Brief} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Policies" component={Policies} />
          <Stack.Screen name="LoyaltyProgram" component={LoyaltyProgram} />

          <Stack.Screen name="Home">
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: '#f4495d',
                  tabBarStyle: {
                    height: 54, // Tăng chiều cao của tab
                  },
                  tabBarLabelStyle: {
                    fontSize: 12, // Tăng kích thước font chữ của tab
                    fontWeight: 'bold', // Tăng độ đậm của font chữ
                    padding:2
                  },
                }}
              >
                <Tab.Screen
                  name="HomePage"
                  component={HomePage}
                  options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="home" size={size} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Order"
                  component={Order}
                  options={{
                    tabBarLabel: 'Đặt hàng',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="shoppingcart" size={size} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Activity"
                  component={Activity}
                  options={{
                    tabBarLabel: 'Hoạt động',
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="activity" size={size} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Store"
                  component={Store}
                  options={{
                    tabBarLabel: 'Cửa hàng',
                    tabBarIcon: ({ color, size }) => (
                      <Entypo name="shop" size={size} color={color} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Other"
                  component={Other}
                  options={{
                    tabBarLabel: 'Khác',
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="ellipsis1" size={size} color={color} />
                    ),
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          
        </Stack.Navigator>
        
        </CartContext.Provider>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
