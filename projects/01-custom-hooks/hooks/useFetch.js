 import { useState, useEffect } from "react"
 
 export const useFetch = (url) => {
    const [data, setData ] = useState(null)
    const [loading, setLoading ] = useState(true)
    const [error, setError ] = useState(null)

    useEffect(()=>{
        const controller = new AbortController()
        
        const fetchData = async () => {
            try {
                const response = await fetch(url, { controller })
                if(!response.ok){
                    throw new Error("Request error");
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
                
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }

    }, [url])

    return { data, loading, error }
 }