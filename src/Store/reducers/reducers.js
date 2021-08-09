import AsyncStorage from '@react-native-async-storage/async-storage'
export default function reducers(state,action){
    console.log("reducer calisti")
    switch (action.type) {
        case "SET_USER":
            const {user}=action.payload;
            AsyncStorage.setItem('@USER',JSON.stringify(user))

            return {...state,user}
        default:
            return state
    }
}