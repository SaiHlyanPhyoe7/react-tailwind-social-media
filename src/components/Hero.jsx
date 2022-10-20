import React from 'react';
import LeftSidebar from "./leftSideBar/LeftSidebar";
import RightSidebar from "./rightSideBar/RightSidebar";
import Main from "./main/Main";

const Hero = () => {
    return (
        <div className='grid grid-cols-12 h-screen gap-2'>
            <div className='col-span-3'><LeftSidebar/></div>
            <div className='col-span-6'><Main/></div>
            <div className='col-span-3'><RightSidebar/></div>
        </div>
    );
};

export default Hero;