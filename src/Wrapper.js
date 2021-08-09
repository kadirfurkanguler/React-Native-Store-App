import React from 'react'
import { View,Text } from 'react-native'
import Router from './Routes'
import AuthProvider from './context/AuthProvider'
export default ()=>{
    return(
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
}