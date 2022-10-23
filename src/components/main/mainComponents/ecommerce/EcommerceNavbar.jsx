import React from 'react';
import {AiOutlineShop, AiOutlineShoppingCart} from "react-icons/ai";

const EcommerceNavbar = () => {
    return (
        <div className='bg-indigo-100 py-3 shadow sticky top-[70px] z-20'>
            <div className='flex justify-between items-center w-[90%] mx-auto'>
                <div className='flex justify-center items-center'>
                    <AiOutlineShop className='text-4xl text-indigo-500'/>
                    <h1 className='text-3xl text-indigo-500'>MyShop</h1>
                </div>
                <div className='flex space-x-5 justify-center items-center'>

                    <div>
                        <input className='px-6 rounded-md border-none outline-none' type="search" placeholder='Search'/>
                    </div>

                    <div>
                        <select className='cursor-pointer rounded-lg px-8 text-start'>
                            <option value="">Clothes</option>
                            <option value="">Watches</option>
                            <option value="">Shoes</option>
                            <option value="">Glasses</option>
                        </select>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button className='px-4 w-full py-2  text-white text-lg hover:bg-indigo-400 bg-indigo-500 rounded-lg inline'>
                            <span className=''><AiOutlineShoppingCart className=' inline'/></span> Cart
                            </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EcommerceNavbar;