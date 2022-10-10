import React from 'react';
import img4 from '../imagesToTest/4.jpeg'
import Button from "./Button";
import {RiVideoAddLine} from 'react-icons/ri'
import {AiOutlineSearch,AiOutlineMore} from 'react-icons/ai'
import {rightsidebarData} from "./rightsidebarData";

const RightSidebar = () => {
    return (
        <div className='h-[100vh] overflow-auto'>
            <div className='bg-red-300 grid grid-cols-4 p-3'>
                <h2 className='text-start col-span-2'>Friend requests</h2>
                <p className='text-end col-span-2 text-blue-600 text-[18px]'>See All</p>
            </div>
            <div className='grid grid-cols-5 bg-yellow-200'>
                <div className='col-span-1 py-2 bg-pink-400'>
                    <img className='rounded-full w-[630px] p-2 mx-auto' src={img4} alt=""/>
                </div>
                <div className='col-span-4 bg-red-400 mx-2'>
                    <div className='row-span-1 flex justify-between p-1'>
                        <h2 className='px-2'>Tint Tun Win</h2>
                        <p className='text-sm'>1d</p>
                    </div>
                    <div>
                        <p className='text-sm text-start px-3'>2 mutual friends</p>
                    </div>
                    <div className='flex grid grid-cols-4 gap-2 my-2 mx-1 justify-center items-center'>
                        <div className='col-span-2'>
                            <Button>Confirm</Button>
                        </div>
                        <div className='col-span-2'>
                            <Button>Delete</Button>
                        </div>
                    </div>
                </div>
                <hr className='w-[90%] rounded-md mt-4 mx-auto'/>
            </div>
            <div>
                <div className='bg-fuchsia-400 grid grid-cols-4 p-3'>
                    <h2 className='text-start col-span-2'>Contacts</h2>
                    <div className='bg-green-400 col-span-2 flex items-center justify-end'>
                        <RiVideoAddLine className='text-[19px] mx-2'/>
                        <AiOutlineSearch className='text-[19px] mx-2'/>
                        <AiOutlineMore className='text-[19px] mx-2'/>
                    </div>
                </div>
                    {
                        rightsidebarData.map((i,index)=>{
                            return (
                                <div key={index} className='grid grid-cols-12 my-3'>
                                    <div className='col-span-2 mx-auto'>
                                        <img src={i.img} className='w-[50px] rounded-full' alt=""/>
                                    </div>
                                    <div className='col-span-10 my-auto'>
                                        <h2 className='text-start'>{i.name}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            <div></div>
        </div>
    );
};

export default RightSidebar;