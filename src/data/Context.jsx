import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
  isLandscape: true,
}); 

const Context = (children) => {
  const [cart, setCart] = useState(['0DF112','0DF175'])
  return (
    <CartContext.Provider value={{cart,setCart}}>
    {children}
    </CartContext.Provider>
  )
}

export default Context

const styles = StyleSheet.create({})

