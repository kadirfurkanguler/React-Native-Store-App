import React,{useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View,Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

function AuthProvider({children}){
    const[user,setUser]=useState(null)
    const[authLoading,setAuthLoading]=useState(true)  

    useEffect(()=>{
        AsyncStorage.getItem('@USER')
        .then(userSession=>{
            userSession&&setUser(JSON.parse(userSession))
            setAuthLoading(false)
        })
    },[])
    const store = createStore(reducers,{user,authLoading});

    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider;