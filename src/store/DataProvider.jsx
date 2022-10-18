import React, {createContext, useState} from 'react';

export const ContextData = createContext()

const DataProvider = ({children}) => {
    const [plus,setPlus] = useState(false)
    const [obj,setObj] = useState([])
    // const objData = [formData];
    const [formData,setFormData] = useState({
        caption:"",
        name:"",
        like:"",
        comment:"",
        share:""
    })
    console.log(formData)

    const plusHandler = (e)=>{
        setPlus(!plus)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        setObj(pre=>[...pre,formData])
        plusHandler(e)
    }
    // console.log(obj)

    const handleFormDataChange = (e) => {
        setFormData(pre => {
            return ({...pre,[e.target.name]:e.target.value})
        } )
    }
    return (
            <ContextData.Provider value={{
                formData,
                plusHandler,
                handleFormDataChange,
                submitHandler,
                plus,
                obj
            }}>
                {children}
            </ContextData.Provider>
    );
};

export default DataProvider;