import  {useContext} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import {ContextData} from "../../store/DataProvider";
import Modal from "./Modal";

const Plus = ({children}) => {
    const {formData,plusHandler,handleFormDataChange,submitHandler,plus,selectedImage,handleSelectedImage,handleProfileImage} = useContext(ContextData)
    return (
        <div className='flex justify-center rounded-full items-center '>
                <button onClick={plusHandler} >
                    <AiOutlinePlus className='mt-4 text-6xl bg-gray-200 p-3 rounded-full hover:shadow hover:shadow-indigo-200 hover:text-indigo-400 duration-300'/>
                </button>
                <Modal submitHandler={submitHandler} handleFormDataChange={handleFormDataChange}
                       data={formData} plusHandler={plusHandler} plus={plus} selectedImage={selectedImage}
                       handleSelectedImage={handleSelectedImage} handleProfileImage={handleProfileImage}
                       className='duration-500'
                />
        </div>
    );
};

export default Plus;