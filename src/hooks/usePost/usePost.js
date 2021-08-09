import {useState} from 'react'
import axios from 'axios'
function usePost(){
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState(null);
    const[error,setError]=useState(false);
    async function post(url,apiData){
        try {
            setLoading(true)
            //Responsedeki datayı parçaladık
            const {data:responsedata}=await axios.post(url,apiData)
            setData(responsedata)
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
        }
    }
    return {data,loading,error,post}
}
export default usePost;
