import React from 'react';
import img1 from "../../../imagesToTest/profileImg/1.png";
import img2 from "../../../imagesToTest/profileImg/2.jpeg";

const FriendCard = () => {
    return (
        <div className='bg-gray-400 col-span-1 h-[380px] my-1 rounded-lg mx-1'>
            <img src={img1} className='h-[220px] shadow shadow-gray-600 mx-auto mt-2 rounded-lg' alt=""/>
            <div className='mt-2'>
                <h1 className='mx-3 text-gray-300'>Aung Oo Oo</h1>
                <div className='flex items-center relative mx-3'>
                    <span className='flex items-center'>
                        <img className='w-[16px] absolute left-[12px] rounded-full' src={img1} alt=""/>
                        <img className='w-[16px] absolute rounded-full' src={img2} alt=""/>
                    </span>

                    <p className='ml-8 text-sm text-gray-300'>8 mutual friends</p>
                </div>
                <div className=''>
                    <button className='rounded-lg text-white flex mx-auto justify-center items-center w-[90%] py-1 my-1 bg-indigo-500 text-gray-300 hover:bg-indigo-400'>Confirm</button>
                    <button className='rounded-lg text-white flex mx-auto justify-center items-center w-[90%] py-1 my-1 bg-gray-500 text-gray-500 hover:bg-gray-600'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;