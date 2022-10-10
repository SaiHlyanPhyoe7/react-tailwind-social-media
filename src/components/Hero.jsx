import React from 'react';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Main from "./Main";

const Hero = () => {
    return (
        <div className='grid grid-cols-12 h-screen bg-red-500 gap-2'>
            <div className='col-span-3 bg-violet-300'><LeftSidebar/></div>
            <div className='col-span-6 bg-violet-300'><Main/></div>
            <div className='col-span-3 bg-violet-300'><RightSidebar/></div>
        </div>
    );
};

export default Hero;