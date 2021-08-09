import { StyleSheet,Dimensions } from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#64b5f6",
    },
    logo:{
        marginTop:25,
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width*0.9,
        resizeMode:'contain',
        tintColor:'white'
    },
    logoContainer:{
        alignItems:'center'
        
    },
    bodyContainer:{

    },
})