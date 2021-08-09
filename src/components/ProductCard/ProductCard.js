import React from 'react'
import { Text,Image,View,TouchableWithoutFeedback } from 'react-native'
import style from './ProductCardStyle'
function ProductCard({product,onSelected}) {
    return(
        <TouchableWithoutFeedback onPress={onSelected}>
            <View style={style.container}>
                <Image style={style.image} source={{uri:product.image}}/>
                <View style={style.bodyContainer}>
                    <Text style={style.title}>{product.title}</Text>
                    <Text style={style.price}>{product.price}$</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ProductCard;