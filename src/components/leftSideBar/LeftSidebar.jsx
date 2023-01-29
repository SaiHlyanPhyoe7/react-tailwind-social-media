import React from 'react';
import {leftSidebarData} from "./leftSidebarData/leftsidebarData";
import {Link} from 'react-router-dom'


const LeftSidebar = () => {
    return (
        <div className='h-[100vh] overflow-scroll fixed w-[20%]'>
            {
                leftSidebarData.map((data,index)=>{
                    return (
                        <Link to={data.linkUrl} key={index}>
                            <div className='px-4 py-3 text-start ml-8 my-2 hover:bg-indigo-100 hover:shadow-sky-300 duration-500 hover:rounded-md cursor-pointer w-[100%] flex'>
                                <span>
                                    <img className='w-7 mr-3 rounded-full' src={data.img} alt=""/>
                                    <span className='text-[25px]'>{data.icon}</span>
                                </span>
                                {data.name}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default LeftSidebar;