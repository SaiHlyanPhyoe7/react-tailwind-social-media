import React from 'react';
import Plus from "./Plus";
import Posts from "./posts/Posts";

const Main = () => {
    return (
        <div className='bg-green-400'>
            <Posts/>
            <Plus/>
        </div>
    );
};

export default Main;