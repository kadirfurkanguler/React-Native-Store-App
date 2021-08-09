import axios from 'axios'
import {useEffect,useState} from 'react'
function useFetch(url){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const fetchData=async ()=>{
        try {
            const{data:respData}=await axios.get(url);
            setData(respData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return{error,loading,data}
}
export default useFetch;