import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { View, Text,FlatList,ActivityIndicator,   } from 'react-native';
//import Config from 'react-native-config'
import Config from '../../../config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading'
import Error from '../../components/Error'
function Products({navigation}) {
    const {loading,data,error}=useFetch(Config.API_PRODUCT_URL)
    const renderProduct=({item})=><ProductCard onSelected={()=>detailproduct(item.id)} product={item}/>;
    const detailproduct=(id)=>{
        navigation.navigate('DetailScreen',id)
    }
    if(loading){
        return(
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Loading/>
            </View>
        )
    }
    if(error){
        return(
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Error/>
            </View>
        )
    }
    return(
        <View>
            <FlatList 
            data={data} 
            renderItem={renderProduct} 
            keyExtractor={(item)=>item.id} />
        </View>
    )
}
export default Products;