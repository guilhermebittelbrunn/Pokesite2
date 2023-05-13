import { useState, useEffect } from "react";
import axios from 'axios'

export default function useFecth(url){
    const [info,setInfo] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        setLoading(true);
        (async()=>{
            try{
                const {data} = axios.get(url);
                
            }catch(err){
                setError(err);
            }
        })()
    })
}