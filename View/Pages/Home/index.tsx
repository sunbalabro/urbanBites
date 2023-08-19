import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { ProductList } from '../../../Components/ProductsList'

interface FoodItem {
    id: number;
    title: string;
    description: string;
    rating: number;
    ingredients: string;
    price: string;
    image: string
}
import {foodData} from '../../../SampleData/data'
import { FilterModal } from '../../../Components/FilterModal';

export const Home :FC = (props) => { 
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState<FoodItem[]>(foodData);
    const handleSearch = (text: string) => {
      setSearchText(text);
      const filteredItems = foodData.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filteredItems);
    };
    const applyRatingFilter = (items: FoodItem[], currentFilter: number) => {
        if (currentFilter !== null) {
            const filteredItems = items.filter(item => item.rating == currentFilter);
            if(filteredItems.length !== 0){

                setFilteredData(filteredItems);
            }else{
                setFilteredData([])
            }
        } else{
            setFilteredData(foodData);
        }
        
    };

    const handleFilter = (val: number) => {
        applyRatingFilter(foodData, val);
    };
const { container , searchInp  , searchHeader} = styles
 return(
    <SafeAreaView>

        <ScrollView>
    <View style={container}>
    <Image source={require('../../../asset/logo.png')} style={{width: 400 , height: 150}}/>
       <Text style={searchHeader}>Search any food item</Text>
    <TextInput
       placeholder="Search food items..."
       value={searchText}
       onChangeText={handleSearch}
       style={searchInp}
     />
     <FilterModal handleFilter={handleFilter} />
    <ProductList filteredData={filteredData} />
    </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 searchInp:{
    borderWidth: 2,
    borderColor: "#000080",
    width: 300,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15
 },
 searchHeader:{
    fontSize: 25,
    color: '#000080',
    fontWeight: 'bold'
 }
})