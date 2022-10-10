import img1 from '../imagesToTest/1.png'
import React from 'react';
import {AiOutlineSearch,AiOutlineHome,AiOutlinePlaySquare} from 'react-icons/ai'
import {GiThreeFriends} from 'react-icons/gi'
import {BiGroup} from 'react-icons/bi'
import {SiEslgaming} from 'react-icons/si'
import {CgMenuGridO} from 'react-icons/cg'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RiNotification4Line} from 'react-icons/ri'
import img7 from '../imagesToTest/7.jpeg'

const Navbar = () => {
    return (
        <div className='bg-green-400 grid grid-cols-12'>
            <div className='col-span-4 flex items-center justify-start my-1'>
                <div className=''>
                    <img className='w-[45px] bg-yellow-200 rounded-full ml-5' src={img1} alt=""/>
                </div>
                <div className='flex items-center gap-0'>
                    <div className='bg-white rounded-l-full py-1 pl-2 ml-2 text-2xl'>
                        <AiOutlineSearch/>
                    </div>
                    <input type="search" placeholder='Search ...'
                           className=' px-1 bg-white py-1 h-[100% my-auto] border-none outline-none rounded-r-full'/>
                </div>
            </div>
            <div className='col-span-4 grid grid-cols-10 bg-yellow-200 gap-1'>
                <div className='m-auto col-span-2'>
                    <AiOutlineHome className='text-3xl'/>
                </div>
                <div className='m-auto col-span-2'>
                    <GiThreeFriends className='text-3xl'/>
                </div>
                <div className='m-auto col-span-2'>
                    <AiOutlinePlaySquare className='text-3xl'/>
                </div>
                <div className='m-auto col-span-2'>
                    <BiGroup className='text-3xl'/>
                </div>
                <div className='m-auto col-span-2'>
                    <SiEslgaming className='text-3xl'/>
                </div>
            </div>
            <div className='col-span-4 flex grid grid-cols-12 bg-orange-500'>
                <div className='col-span-8'></div>
                <div className='bg-gray-400 p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <CgMenuGridO className='text-3xl'/>
                </div>
                <div className='bg-gray-400 p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <FaFacebookMessenger className='text-3xl'/>
                </div>
                <div className='bg-gray-400 p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <RiNotification4Line className='text-3xl'/>
                </div>
                <div className='bg-gray-400 p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <img src={img7} className='w-[45px] rounded-full' alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;