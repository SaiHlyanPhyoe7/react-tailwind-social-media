import React from 'react';

const Button = ({children}) => {
    // console.log(children)
    return (
        <div>
            <button className='w-full py-2 mx-1 text-white rounded-md bg-indigo-400 cursor-pointer'>
                {children}
            </button>
        </div>
    );
};

export default Button;