import React from 'react';

import FriendsLeftSideBar from "./FriendsLeftSideBar";
import FriendsRightSideBar from "./FriendsRightSideBar";


const FriendsSection = () => {
    return (
        <div className='grid grid-cols-12 '>
            <FriendsLeftSideBar/>
            <FriendsRightSideBar/>
        </div>
    );
};

export default FriendsSection;