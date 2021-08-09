import { StyleSheet,Dimensions } from 'react-native'
const deviceSice=Dimensions.get('window');
export default StyleSheet.create({
    container:{flex:1},
    bodyContainer:{padding:10},
    image:{
        width:deviceSice.width,
        height:deviceSice.height/3,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    title:{
        fontWeight:'bold',
        fontSize:25
    },
    desc:{
        fontStyle:'italic',
        marginVertical:7
    },
    price:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'right'
    }
})