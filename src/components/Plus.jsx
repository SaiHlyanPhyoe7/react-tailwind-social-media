import  {useContext} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import {ContextData} from "../store/DataProvider";
import Modal from "./Modal";

const Plus = ({children}) => {

    const {formData,plusHandler,handleFormDataChange,submitHandler,plus} = useContext(ContextData)


    return (
        <div className='flex justify-center rounded-full items-center'>
                <button onClick={plusHandler} >
                    <AiOutlinePlus className='mt-4 text-6xl rounded-full'/>
                </button>
                { plus &&
                    <Modal submitHandler={submitHandler} handleFormDataChange={handleFormDataChange} data={formData} plusHandler={plusHandler} classname=''/>
                }
        </div>
    );
};

export default Plus;