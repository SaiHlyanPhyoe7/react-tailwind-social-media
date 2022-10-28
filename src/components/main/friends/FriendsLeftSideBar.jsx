import React from 'react';
import {AiFillGift, AiOutlinePullRequest, AiOutlineSetting} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";
import {BsChevronRight} from "react-icons/bs";
import {RiUserAddLine} from "react-icons/ri";
import {GrContactInfo} from "react-icons/gr";

const FriendsLeftSideBar = () => {
    return (
        <div className='col-span-2 py-4 text-gray-700 relative left-0 overflow-scroll'>
            <div className='flex justify-between mx-3 py-2 items-center'>
                <h1 className='text-2xl'>Friends</h1>
                <div><AiOutlineSetting className='text-2xl'/></div>
            </div>
            <div className=''>
                <ul className=''>
                    <li className='flex items-center justify-between text-gray-500 p-2 my-1'><div className='flex items-center'><FaUserFriends className='mx-4 text-2xl w-[35px] h-[35px] p-1 my-2 rounded-full bg-indigo-400 m-2'/>Home</div> <BsChevronRight className='mr-2'/></li>
                    <li className='flex items-center justify-between text-gray-500 p-2 my-1'><div className='flex items-center'><AiOutlinePullRequest className='mx-4 w-[35px] h-[35px] p-1 text-2xl my-2 rounded-full bg-slate-300'/>Friend Requests</div> <BsChevronRight className='mr-2'/></li>
                    <li className='flex items-center justify-between text-gray-500 p-2 my-1'><div className='flex items-center'><RiUserAddLine className='mx-4 w-[35px] h-[35px] p-1 text-2xl my-2 rounded-full bg-slate-300'/>Suggestions</div> <BsChevronRight className='mr-2'/></li>
                    <li className='flex items-center justify-between text-gray-500 p-2 my-1'><div className='flex items-center'><GrContactInfo className='mx-4 w-[35px] h-[35px] p-1 text-2xl my-2 rounded-full bg-slate-300'/>All friends</div> <BsChevronRight className='mr-2'/></li>
                    <li className='flex items-center justify-between text-gray-500 p-2 my-1'><div className='flex items-center'><AiFillGift className='mx-4 w-[35px] h-[35px] p-1 text-2xl my-2 rounded-full bg-slate-300'/>Birthdays</div> <BsChevronRight className='mr-2'/></li>
                    <li className='flex items-center justify-between text-gray-500 p-2 my-1'><div className='flex items-center'><GrContactInfo className='mx-4 w-[35px] h-[35px] p-1 text-2xl my-2 rounded-full bg-slate-300'/>Custom Lists</div> <BsChevronRight className='mr-2'/></li>
                </ul>
            </div>
        </div>
    );
};

export default FriendsLeftSideBar;