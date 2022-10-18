import React from 'react';
import {leftSidebarData} from "./leftsidebarData";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


const LeftSidebar = () => {
    return (
        <div className='h-[100vh] overflow-auto'>
            {
                leftSidebarData.map((data,index)=>{
                    return (
                        <Link to={data.linkUrl}  key={index} className='my-2'>
                            <div className='px-4 py-3 text-start ml-8 hover:bg-indigo-200 hover:rounded-md cursor-pointer flex'>
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