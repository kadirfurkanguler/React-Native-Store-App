import React from 'react'
import { TouchableOpacity,Text,ActivityIndicator } from 'react-native'
import style from './ButtonStyle'
function Input({text,onpress,loading}){
    return(
        <TouchableOpacity style={style.container} onPress={onpress} disabled={loading}>
            {
               loading?(
                   <ActivityIndicator color="white"/>
               ):(
                    <Text style={style.title}>{text}</Text>
               )
            }
        </TouchableOpacity>
    )
}
export default Input;