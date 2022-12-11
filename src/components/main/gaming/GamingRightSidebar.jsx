import React from 'react';
import img from '../../../imagesToTest/profileImg/16.png'

const GamingRightSidebar = () => {
    return (
        <div className='col-span-9'>
            <div className='bg-red-400 grid grid-cols-12'>
                <div className='col-span-12 bg-green-400 h-[300px]'>Dog</div>
                <div className='col-span-12'>
                    <div className='col-span-3 bg-indigo-400 w-[1000px] mx-auto h-[250px] flex overflow-scroll' >
                        <img src={img} className='w-auto h-full px-2' alt=""/>
                        <img src={img} className='w-auto h-full px-2' alt=""/>
                        <img src={img} className='w-auto h-full px-2' alt=""/>
                        <img src={img} className='w-auto h-full px-2' alt=""/>
                        <img src={img} className='w-auto h-full px-2' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamingRightSidebar;