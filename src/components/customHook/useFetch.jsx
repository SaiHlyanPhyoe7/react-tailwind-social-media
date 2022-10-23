import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [fetchData,setFetchData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [fetchError,setFetchError] = useState(null)


    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if (!res.ok){
                    throw Error('Coulld not fetch data for that resource')
                }
                return res.json()
            })
            .then((data)=>{
                setFetchData(data)
                setIsPending(false)
                setFetchError(null)
                console.log(data)
            })
            .catch((err)=>{
                setIsPending(false)
                setFetchError(err.message)
                console.log(fetchError)
            })

    },[url])

    return {fetchData,isPending,fetchError}
}

export default useFetch






//
//
//
//
//
