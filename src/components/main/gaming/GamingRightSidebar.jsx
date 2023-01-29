import React from 'react';
import img from '../../../imagesToTest/profileImg/16.png'

const GamingRightSidebar = () => {
    return (
        <div className='col-span-9'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 h-[300px] flex flex-col justify-center items-start ml-36'>
                    <h1>Still in progress.</h1>
                    <h1 className='col-span-12'>looking for collaborate on this project,</h1>
                    <h1 className='col-span-12'>Repo Link Here.(https://github.com/SaiHlyanPhyoe7/react-tailwind-social-media)</h1>
                    <h1 className='col-span-12'>Or Mail me at saihlyan.phyoe7@gmail.com</h1>
                </div>
                
                <div className='col-span-12'>
                    <div className='col-span-3 w-[1000px] mx-auto h-[250px] flex overflow-scroll' >
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