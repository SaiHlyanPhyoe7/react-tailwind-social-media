import React, {useState} from 'react';
import {AiOutlineShop, AiOutlineShoppingCart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {filteredInput, receive} from "../../../slicers/EcommerceNavbarSlicer";
import useFetch from "../../../customHook/useFetch";

const EcommerceNavbar = () => {

    const [inputValue,setInputValue] = useState('')
    const dispatch = useDispatch()
    const {fetchData} = useFetch('https://fakestoreapi.com/products')
    const calculateAtc = useSelector(state=>state.calc)

    const catchNavInput = (e) =>{
        setInputValue(e.target.value)
    }

    const clickHandler = ()=>{
        if (inputValue.length === 0){
            dispatch(receive(fetchData))
        }else {
            dispatch(filteredInput(inputValue.toLowerCase()))
        }
    }



    console.log(calculateAtc)

    return (
        <div className='bg-indigo-100 py-3 shadow sticky top-[70px] z-20'>
            <div className='flex justify-between items-center w-[90%] mx-auto'>
                <div className='flex justify-center items-center'>
                    <AiOutlineShop className='text-4xl text-indigo-500'/>
                    <h1 className='text-3xl text-indigo-500'>MyShop</h1>
                </div>
                <div className='flex space-x-5 justify-center items-center'>

                    <div className=''>
                        <input className='rounded-l-md bg-white border-none outline-none text-center' onChange={catchNavInput} type="search" placeholder='Search'/>
                        <button className='bg-white border-l hover:shadow hover:ring hover:ring-indigo-300 rounded-r-md border-indigo-400  text-gray-500 text-center py-2 px-3'
                                onClick={clickHandler} >Search Now</button>
                    </div>

                    <div>
                        <select className='cursor-pointer rounded-lg px-8 text-start border-none outline-none' onClick={catchNavInput}>
                            <option className='text-xl' value=" ">Show All</option>
                            <option className='text-xl' value="Mens">Mens</option>
                            <option className='text-xl' value="Women">Women</option>
                            <option className='text-xl' value="Glasses">Glasses</option>
                        </select>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button className='px-4 w-full py-2 text-white text-lg hover:bg-indigo-400 bg-indigo-500 rounded-lg inline relative'>
                            <span className=''><AiOutlineShoppingCart className='inline'/></span> Cart
                            <span className='absolute top-[-5px] right-[-5px] text-sm bg-red-600 hover:bg-red-500 rounded-full text-white text-center h-[20px] w-[20px]'>{calculateAtc}</span>
                            </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EcommerceNavbar;