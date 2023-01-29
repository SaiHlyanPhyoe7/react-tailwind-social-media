import img1 from '../../imagesToTest/profileImg/1.png'
import React from 'react';
import {AiOutlineSearch,AiOutlineHome,AiOutlineShop} from 'react-icons/ai'
import {GiThreeFriends} from 'react-icons/gi'
import {BiGroup} from 'react-icons/bi'
import {CgMenuGridO} from 'react-icons/cg'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RiNotification4Line} from 'react-icons/ri'
import img7 from '../../imagesToTest/profileImg/7.jpeg'
import {Link} from "react-router-dom";
import {SiEslgaming} from "react-icons/si";

const Navbar = () => {
    return (
        <div className='grid grid-cols-12 py-1 sticky top-0 bg-white shadow opacity-1 z-40'>
            <div className='hidden lg:col-span-4 lg:flex items-center justify-start my-1'>
                <Link to='/profile' className=''>
                    <img className='w-[45px] rounded-full ml-5 hover:ring-2 hover:ring-indigo-400 hover:shadow-sm' src={img1} alt=""/>
                </Link>
                <div className='flex items-center gap-0'>
                    <div className='rounded-l-full bg-white py-1 pl-2 ml-2 text-2xl'>
                        <AiOutlineSearch/>
                    </div>
                    <input type="search" placeholder='Search Facebook'
                           className='focus:border-none focus:outline-none focus:px-4 duration-500 px-1 py-1 h-[100% my-auto] bg-white border-none outline-none rounded-r-full'/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 grid grid-cols-10 gap-1'>
                <Link to='/' className='m-auto col-span-2 hover:text-indigo-400 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <AiOutlineHome className='text-3xl'/>
                </Link>
                <Link to='/friends' className='m-auto col-span-2 hover:text-indigo-400 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <GiThreeFriends className='text-3xl'/>
                </Link>
                <Link to='/gaming' className='m-auto col-span-2 hover:text-indigo-400 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <SiEslgaming className='text-3xl'/>
                </Link>
                <Link to='/groups' className='m-auto col-span-2 hover:text-indigo-400 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <BiGroup className='text-3xl'/>
                </Link>
                <Link to='/ecommerce' className='m-auto col-span-2 hover:text-indigo-400 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <AiOutlineShop className='text-3xl'/>
                </Link>
            </div>
            <div className='lg:flex lg:col-span-4 justify-center items-center grid grid-cols-9'>
                <div className='col-span-5'></div>
                <div className='rounded-lg ml-auto col-span-1 hover:text-indigo-400 hover:bg-gray-300 p-3 mx-8 hover:opacity-[0.9]'>
                    <CgMenuGridO className='text-3xl cursor-pointer'/>
                </div>
                <div className='rounded-lg ml-auto col-span-1 hover:text-indigo-400 hover:bg-gray-300 p-3 mx-8 hover:opacity-[0.9]'>
                    <FaFacebookMessenger className='text-3xl cursor-pointer'/>
                </div>
                <div className='rounded-lg ml-auto col-span-1 hover:text-indigo-400 hover:bg-gray-300 p-3 mx-8 hover:opacity-[0.9]'>
                    <RiNotification4Line className='text-3xl cursor-pointer'/>
                </div>
                <div className=' rounded-lg mx-auto my-auto hover:bg-gray-300 w-[56px] h-[56px] hover:opacity-[0.9] cursor-pointer'>
                    <Link to='/profile'><img src={img7} className='flex justify-center items-center p-[10px] rounded-full' alt=""/></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;