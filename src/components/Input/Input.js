import React from 'react'
import { TextInput,View } from 'react-native'
import style from './InputStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function Input({change,place,value,icon,isSecure}){
    return(
        <View style={style.container}>
            <TextInput 
            style={style.inputStyle}
            value={value} 
            onChangeText={change} 
            placeholder={place}
            secureTextEntry={isSecure}
            />
            <Icon name={icon} size={25} color="gray"/>
        </View>
    )
}
export default Input;