//! Formik values hatasi var 
import React,{useState} from 'react'
import {Image,View, Alert, } from 'react-native'
import Input from '../../components/Input'
import style from './LoginStyle'
import Button from '../../components/Button'
import usePost from '../../hooks/usePost'
import Config from '../../../config';
import { useDispatch } from 'react-redux'
import {Formik} from './formik'
function Login(){
    const{loading,error,data,post}=usePost()
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const dispatch=useDispatch()
    function handleLogin(){
        // Alert.alert("sasfas",Config.API_AUTH+ " ve " + Config.API_PRODUCT_URL)
        post(Config.API_AUTH,{username,password})
    }
    if(error){
        Alert.alert("Store","Ooopps store is doesn'n working.")
        console.log(error)
 
    }
    if(data){
        if(data.status=='Error'){
            Alert.alert("Store","User not found")
        }
        else{
            dispatch({type:'SET_USER',payload:{user}})
        }
    }
    return(
        <View style={style.container}>
            <View style={style.logoContainer}>
                <Image 
                style={style.logo} 
                source={require('../../assets/logo.png')}/>
            </View>
            <View style={style.bodyContainer}>
                <Input 
                change={setUsername} 
                value={username} 
                icon="account" 
                place="Type Username.."/>
                <Input 
                change={setPassword} 
                value={password} 
                icon="key" 
                place="Type Password.."
                isSecure
                />
                <Button onpress={handleLogin} text="Sign In"/>
            </View>
        </View>
    )
    // return(
    //     <View style={style.container}>
    //         <View style={style.logoContainer}>
    //             <Image style={style.logo} source={require('../../assets/logo.png')}/>
    //         </View>
    //         <Formik intitialValues={{username:'',password:''}} onSubmit={handleLogin}>
    //             {formik=>(
    //             <View style={style.bodyContainer}>
    //                 <Input value={formik.values.username} change={formik.handleChange('username')} place="Type Username.."/>
    //                 <Input value={{...formik.values.password}} change={formik.handleChange('password')} place="Type Password.."/>
    //                 <Button onpress={formik.handlesubmit} text="Sign In"/>
    //             </View>
    //             )}
    //         </Formik>
    //     </View>
    //)
}
const user={
    id:1,
    email:'John@gmail.com',
    username:'johnd',
    password:'m38rmF$',
    name:{
        firstname:'John',
        lastname:'Doe'
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'
}
export default Login;