import React, { FC } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

interface IProps {}

export const SplashScreen :FC<IProps> = (props) => { 

const { container , loader} = styles
 return(
  <View style={container}>
    <Image source={require('../../../asset/loader.gif')} style={loader} />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 loader:{
    width: 370 ,
    height: 700
 }
})