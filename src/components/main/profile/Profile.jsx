import React from 'react';
import coverImg from '../../../imagesToTest/fromUnsplash/jeremy-brady-vK26p2SFX3E-unsplash.jpg'
import profileImg from '../../../imagesToTest/profileImg/3.jpeg'
import {AiFillClockCircle, AiFillEdit, AiFillGithub, AiFillPlusCircle, AiOutlinePlus} from "react-icons/ai";
import {BsThreeDots} from 'react-icons/bs'
import superNatural1 from '../../../imagesToTest/actor/dean.jpeg'
import superNatural2 from '../../../imagesToTest/actor/sam.jpeg'
import superNatural3 from '../../../imagesToTest/actor/castiel&sam.jpeg'
import superNatural4 from '../../../imagesToTest/actor/samBlackSuit.jpeg'
import superNatural5 from '../../../imagesToTest/actor/deanBlackSuit.jpeg'

import emmaStone from '../../../imagesToTest/actress/Emma Stone.jpeg'
import galGatok from '../../../imagesToTest/actress/galGadot.jpeg'
import zendata from '../../../imagesToTest/actress/zendaya.jpeg'
import jolie from '../../../imagesToTest/actress/angelinaJolie.png'
import scarlet from '../../../imagesToTest/actress/scarlettJohansson.jpeg'
import arianaGrande from '../../../imagesToTest/actress/arianaGrande.jpeg'
import jenniferLawrence from '../../../imagesToTest/actress/jenniferLawrence.jpeg'
import emiliaClarke from '../../../imagesToTest/actress/emiliaClarke.jpeg'


const Profile = () => {
    const friendList = [
        {
            id : 1,
            img : galGatok,
            name : 'Gal Gadot'
        },
        {
            id : 2,
            img : emmaStone,
            name : 'Emma Stone'
        },
        {
            id : 3,
            img : zendata,
            name : 'Zendaya'
        },
        {
            id : 4,
            img : jolie,
            name : 'Angelina Jolie'
        },
        {
            id : 5,
            img : scarlet,
            name : 'Scarlett Johansson'
        },
        {
            id : 6,
            img : arianaGrande,
            name : 'Arianna Grande'
        },
        {
            id : 7,
            img : jenniferLawrence,
            name : 'Jennifer Lawrence'
        },
        {
            id : 8,
            img : emiliaClarke,
            name : 'Emilia Clarke'
        },

    ]
    return (
        <div className='w-[40%] min-h-screen grid-rows-4 mx-auto grid'>
            <div className='row-span-1'>
                <img src={coverImg} className='h-full w-full' alt=""/>
            </div>
            <div className='row-span-3'>
                <div className='relative'>
                    <img src={profileImg} className='absolute w-[160px] top-[-100px] left-[20px] border-4 border-white rounded-full' alt=""/>
                </div>
                <div className='mt-[80px]'>
                    <div>
                        <h1 className='my-3 font-semibold mx-3 text-xl'>Sai Hlyan Phyoe</h1>
                        <div className='mb-[15px] flex justify-between items-center mx-4'>
                            <button className=' mx-2 flex justify-center items-center w-full py-2 text-white rounded-md bg-indigo-500'><AiFillPlusCircle className='mx-3 text-xl'/>
                                Add to Story</button>
                            <button className='mx-2 flex justify-center items-center w-full py-2 text-gray-800 rounded-md bg-gray-300'><AiFillEdit className='mx-3 text-xl'/>
                                Edit profile</button>
                            <button className='bg-gray-300 px-3 py-3 rounded-md'><BsThreeDots/></button>
                        </div>
                        <hr className='w-[95%] mx-auto rounded-lg'/>
                    </div>
                    <div className='mx-1 mt-[15px]'>
                        <div className='flex my-1 py-1 mx-2 justify-start items-center'><AiFillClockCircle className='text-xl mx-3 text-gray-500'/><p>Joined on September 2020</p></div>
                        <div className='flex my-1 py-1 mx-2 justify-start items-center'><AiFillGithub className='text-xl mx-3 text-gray-500'/><p>SaiHlyanPhyoe7</p></div>
                        <div className='flex my-1 py-1 mx-2 justify-start items-center'><BsThreeDots className='text-xl mx-3 text-gray-500'/><p>See your About info</p></div>
                    </div>
                    <div className='my-4'>
                        <div className='flex overflow-x-scroll scroll-none-cus mx-4 h-[215px] '>
                            <div className='bg-indigo-300 rounded-xl flex justify-center items-center h-full text-gray-500 text-[30px] mx-2'>
                                <AiOutlinePlus className='w-[130px]'/></div>
                            <img src={superNatural1} className='rounded-xl mx-2' alt=""/>
                            <img src={superNatural2} className='rounded-xl mx-2' alt=""/>
                            <img src={superNatural3} className='rounded-xl mx-2' alt=""/>
                            <img src={superNatural4} className='rounded-xl mx-2' alt=""/>
                            <img src={superNatural5} className='rounded-xl mx-2' alt=""/>
                        </div>
                    </div>

                    <div className='w-[100%] flex justify-center items-center mx-auto'>
                        <button className='bg-indigo-200 text-indigo-500 rounded-md my-2 w-[70%] font-semibold py-2'>Edit Public Details</button>
                    </div>
                </div>
                <hr className='rounded-lg'/>
                <div className='mt-[5px]'>
                    <div className=''>
                        <div className='mx-3 flex justify-between items-center'>
                            <div>
                                <h1 className='font-semibold'>Friends</h1>
                                <p className='text-gray-400'>147 friends</p>
                            </div>
                            <div><h1 className=''>Find Friends</h1></div>
                        </div>
                        <div className='grid mt-2 mb-0'>
                            <div className='row-span-1 grid grid-cols-4 mx-auto'>
                                {
                                    friendList.map((friend,index)=>{
                                        return (
                                            <div>
                                                <img src={friend.img} className='h-[170px] m-2 rounded-xl' alt=""/>
                                                <h1 className='font-semibold mx-3 my-1'>{friend.name}</h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-5 w-[90%] mx-auto'>
                        <button className='bg-gray-300 w-[600px] mx-auto py-2 rounded-md font-semibold text-gray-600'>See All Friends</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;