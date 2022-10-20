import img1 from '../../imagesToTest/1.png'
import React from 'react';
import {AiOutlineSearch,AiOutlineHome,AiOutlinePlaySquare} from 'react-icons/ai'
import {GiThreeFriends} from 'react-icons/gi'
import {BiGroup} from 'react-icons/bi'
import {SiEslgaming} from 'react-icons/si'
import {CgMenuGridO} from 'react-icons/cg'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RiNotification4Line} from 'react-icons/ri'
import img7 from '../../imagesToTest/7.jpeg'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='grid grid-cols-12 py-1 sticky top-0 bg-white shadow'>
            <div className='col-span-4 flex items-center justify-start my-1'>
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
            <div className='col-span-4 grid grid-cols-10 gap-1'>
                <Link to='/' className='m-auto col-span-2 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <AiOutlineHome className='text-3xl'/>
                </Link>
                <Link to='/friends' className='m-auto col-span-2 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <GiThreeFriends className='text-3xl'/>
                </Link>
                <Link to='/watch' className='m-auto col-span-2 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <AiOutlinePlaySquare className='text-3xl'/>
                </Link>
                <Link to='/groups' className='m-auto col-span-2 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <BiGroup className='text-3xl'/>
                </Link>
                <Link to='/pages' className='m-auto col-span-2 duration-300 p-3 hover:bg-gray-200 hover:shadow-md rounded-lg'>
                    <SiEslgaming className='text-3xl'/>
                </Link>
            </div>
            <div className='col-span-4 flex grid grid-cols-12'>
                <div className='col-span-8'></div>
                <div className='p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <CgMenuGridO className='text-3xl'/>
                </div>
                <div className='p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <FaFacebookMessenger className='text-3xl'/>
                </div>
                <div className='p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <RiNotification4Line className='text-3xl'/>
                </div>
                <div className='p-1 rounded-lg ml-auto col-span-1 my-auto mr-3'>
                    <img src={img7} className='w-[45px] rounded-full' alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;