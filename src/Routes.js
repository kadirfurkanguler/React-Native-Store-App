import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './pages/Products';
import Detail from './pages/Detail'
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';
const Stack=createStackNavigator();
function App(){
    const userSession=useSelector(s=>s.user)
    const isLoading=useSelector(s=>s.authLoading)
    const dispatch = useDispatch()
    return(
        <NavigationContainer>
            {
                isLoading&&(<Loading/>)
            }
            <Stack.Navigator>
                {
                    !userSession?(
                        <Stack.Screen 
                        name="LoginScreen" 
                        options={{headerShown:false}} 
                        component={Login} />
                    ):(
                        <>
                        <Stack.Screen 
                        name="ProductScreen" 
                        options={{title:'Store',
                        headerStyle:{backgroundColor:"#64b5f6"},
                        headerTitleStyle:{color:'white'},
                        headerRight:()=> <Icon name="logout" size={30} color="white" onPress={()=>dispatch({type:"REMOVE_USER"})} />
                        }} 
                        component={Products} 
                        />
                        <Stack.Screen 
                        name="DetailScreen" 
                        options={{title:'Store',headerStyle:{backgroundColor:"#64b5f6"},headerTitleStyle:{color:'white'}}} 
                        component={Detail} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;