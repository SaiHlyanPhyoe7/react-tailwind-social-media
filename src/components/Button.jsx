import React from 'react';

const Button = ({children}) => {
    // console.log(children)
    return (
        <div>
            <button className='px-3 py-2 mx-1 w-[100%] rounded-md bg-blue-400 cursor-pointer'>
                {children}
            </button>
        </div>
    );
};

export default Button;