import React, { FC, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { foodData } from '../SampleData/data'
interface IProps {
    
     currentItem: {
        id: number;
        title: string;
        description: string;
        price: string;
        ingredients: string;
        rating: number;
        veg: boolean;
        nonVeg: boolean;
        image: string;
    };
    
}
interface FoodItem {
    id: number;
    title: string;
    description: string;
    price: string;
    ingredients: string;
    rating: number;
    veg: boolean;
    nonVeg: boolean;
    image: string;
}

export const Suggestion :FC<IProps> = (currentItem) => { 
const [filteredItems , setFilteredItem] = useState<FoodItem[]>([])
const { container  , subcontainer , subtitle , foodTitle , shadowProp , card , suggest} = styles

const navigation = useNavigation()
useEffect(()=>{
    const filterKey = currentItem.currentItem.veg
    const filterRating = currentItem.currentItem.rating
    if(filterKey == true){
        const suggestItems = foodData.filter(item => item.veg == true && item.rating == filterRating)
        setFilteredItem(suggestItems)
    }else{
        const Suggestion = foodData.filter(item => item.veg == true)
        setFilteredItem(Suggestion)
    }
},[])

 return(
  <View style={container}>
    <Text style={suggest}>Suggested for you</Text>
    {
    filteredItems.map((item , i)=>(
            <View key={i} style={[subcontainer , card  , shadowProp]}>
                <Image source={{uri:item.image}} style={{width: 200 , height: 200}} />
                <Text style={foodTitle}>{item.title}</Text>
                <View>
                <Text style={subtitle}>{item.description}</Text>
                </View>
            </View>
        
    ))
  }
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 50
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
  suggest:{
    fontSize: 25,
    fontWeight: 'bold',
  }
})