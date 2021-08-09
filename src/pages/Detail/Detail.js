import React from 'react'
import { View, Text,Image } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Config from '../../../config';
import style from './DetailStyle'
function Detail({route}) {
    const id=route.params
    const {loading,data,error}=useFetch(Config.API_PRODUCT_URL+"/"+id)
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
        <View style={style.container}>
            <Image style={style.image} source={{uri:data.image}}/>
            <View style={style.bodyContainer}>
                <Text style={style.title}>{data.title}</Text>
                <Text style={style.des}>{data.description}</Text>
                <Text style={style.price}>{data.price}$</Text>
            </View>
        </View>
    )
}
export default Detail;