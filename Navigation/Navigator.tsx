import { createStackNavigator } from '@react-navigation/stack';
import React, { FC , useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Home } from '../View/Pages/Home';
import { ProductDetail } from '../View/Pages/Product';
import { SplashScreen } from '../View/Pages/Splash';



export const AppNavigator :FC= (props) => { 
    const [loader , setLoader] = useState(true)
    const Stack = createStackNavigator();
const { container } = styles
  setTimeout(()=>{
    setLoader(false)
  }, 1000)
  if(loader){
    return(<SplashScreen />)
  }else{
    return(
        <Stack.Navigator>
        <Stack.Screen name="UrbanBites" component={Home} />
        <Stack.Screen name="Food Detail" component={ProductDetail} />
      </Stack.Navigator>
      )
  }
 
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})