import React, { FC } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import {useNavigation} from "@react-navigation/native"
interface IProps {
 filteredData: FoodItem[]  
}
interface FoodItem {
    id: number;
    title: string;
    description: string;
    rating: number;
    ingredients: string;
    price: string;
    image: string
}
export const ProductList :FC<IProps> = ({filteredData}) => { 

const { container  , subcontainer , foodTitle , nextArrow , subtitle , card , shadowProp} = styles
const navigation: any = useNavigation()
 return(

    <ScrollView>
<View>
    {
    filteredData.map((item , i)=>(
            <View key={i} style={[subcontainer , card  , shadowProp]}>
                <Image source={{uri:item.image}} style={{width: 200 , height: 200}} />
                <Text style={foodTitle}>{item.title}</Text>
                <View>
                <Text style={subtitle}>{item.description}</Text>
               <Text onPress={()=> navigation.navigate('Food Detail' , {item})} style={nextArrow}> → </Text>
                </View>
            </View>
        
    ))
  }

</View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   marginTop: 2,
 },
 subcontainer:{
    marginTop: 10,
    width: 300,
 },
 foodTitle:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
 },
 nextArrow:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000080'
 },
 subtitle:{
    fontSize: 15,
 },
 card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})