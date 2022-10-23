import React, {createContext, useState} from 'react';

export const ContextData = createContext()

const DataProvider = ({children}) => {
    const [plus,setPlus] = useState(false)
    const [obj,setObj] = useState([])
    // const objData = [formData];
    const [selectedImage, setSelectedImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const [formData,setFormData] = useState({
        caption:"",
        name:"",
        like:"",
        comment:"",
        share:"",
    })
    // console.log(formData)

    //upload image
    const handleSelectedImage = (event)=>{
        setSelectedImage(event.target.files[0]);
    }


    const handleProfileImage = (event)=>{
        setProfileImage(event.target.files[0]);
    }
    // console.log(typeof(selectedImage));
    // console.log(typeof(obj));



    const plusHandler = (e)=>{
        setPlus(!plus)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        setObj(pre=>[...pre,[formData,selectedImage,profileImage]])
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
                obj,
                selectedImage,
                handleSelectedImage,
                handleProfileImage

            }}>
                {children}
            </ContextData.Provider>
    );
};

export default DataProvider;