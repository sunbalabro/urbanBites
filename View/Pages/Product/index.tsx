import React, { FC } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { RouteProp, useRoute } from "@react-navigation/native";
import { Suggestion } from '../../../Components/Suggestion';

interface IProps {}



type RootStackParamList = {
    ProductDetail: { item: FoodItem }; 
};

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

  interface FoodItem {
    id: number;
    title: string;
    description: string;
    rating: number;
    ingredients: string;
    price: string;
    image: string;
    veg: boolean;
    nonVeg: boolean;
  }
  
export const ProductDetail :FC<IProps> = () => { 

const { container , foodTitle , foodDescription , foodIngredients , foodPrice , foodRating , foodImg , label} = styles

const route = useRoute<ProductDetailRouteProp>();
const { item } = route.params;
 return(
    <ScrollView>
<View>
    <View style={container}>
        <Image source={{uri: item.image}} style={foodImg} />
    <Text style={foodTitle}>{item.title}</Text>
    <Text style={label}>
        Price
    </Text>
    <Text style={foodPrice}>{item.price}</Text>
    <Text style={label}>Description</Text>
    <Text style={foodDescription}>{item.description}</Text>
    <Text style={label}>Ingredients</Text>
    <Text style={foodIngredients}> {item.ingredients}</Text>
    <Text style={label}>Rating </Text>
    <Text style={foodRating}>{item.rating}</Text>
  </View>
  <Suggestion currentItem ={ item} />
    </View>
    </ScrollView>
    
  )
}


const styles = StyleSheet.create({
  container: {
   marginTop: 30,
   padding: 30,
 },
 foodTitle:{
    fontSize: 45,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#F194FF'
 },
 foodPrice: {
    fontSize: 20,
    marginTop: 10
 },
 foodDescription: {
    fontSize: 20
 },
 foodIngredients: {
    fontSize: 20
 },
 foodRating: {
    fontSize: 20
 },
 foodImg: {
    width: 300,
    height: 200
 },
 label:{
    fontSize: 28,
    color: '#000080',
    fontWeight: 'bold'
 }
})