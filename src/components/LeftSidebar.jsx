import React from 'react';
import {leftSidebarData} from "./leftsidebarData";


const LeftSidebar = () => {
    return (
        <div>
            {
                leftSidebarData.map((data,index)=>{
                    return (
                        <div key={index} className='my-2'>
                            <div className='px-4 py-3 text-start ml-8 hover:bg-indigo-200 hover:rounded-md cursor-pointer flex'>
                                <span>
                                    <img className='w-7 mr-3 rounded-full' src={data.img} alt=""/>
                                    <span className='text-[25px]'>{data.icon}</span>
                                </span>
                                {data.name}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default LeftSidebar;