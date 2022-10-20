import React, {useContext, useState} from 'react';
import {ContextData} from "../../../store/DataProvider";
import {FiMoreVertical} from "react-icons/fi";
import {AiFillHeart, AiOutlineLike} from "react-icons/ai";
import {FaRegCommentAlt} from "react-icons/fa";
import {RiShareForwardLine} from "react-icons/ri";

const NewPost = () => {
    const {obj} = useContext(ContextData)
    const [show,setShow] = useState(false)

    console.log(obj)
    return (
        <div className='my-10'>
            {
                obj.map((data,index)=>{
                    return(
                        <div key={index} className='my-2'>

                            <div>
                                <div className='grid grid-cols-12 items-center text-start py-2'>

                                    <div className='col-span-10 font-semibold'><h1>{data.name}</h1></div>
                                    <div className='col-span-1 justify-self-center'><FiMoreVertical/></div>
                                </div>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-11'>
                                        <p className='text-start mx-4 my-2 px-4 py-1'>
                                            {data.caption}
                                        </p>
                                    </div>
                                </div>

                                <div className='grid py-2 grid-cols-12 justify-center items-center w-[90%] mx-auto'>
                                    <div className='col-span-1 text-start mx-1 text-indigo-600'>
                                        <AiOutlineLike className='text-[25px] inline rounded-full'/>
                                        <AiFillHeart className='text-[25px] inline rounded-full'/>
                                    </div>
                                    <div className='col-span-2'>
                                        <p className='capitalize text-start'>{data.like} Likes</p>
                                    </div>
                                    <div className='col-span-9 text-end'>
                                        <p className='inline px-2'>{data.comment} Comments</p>
                                        <p className='inline px-2'>{data.share} Shares</p>
                                    </div>
                                </div>
                                <hr className='w-[95%] mx-auto mt-4 rounded-full'/>

                                <div className='grid grid-cols-12'>
                                    <div onClick={()=>setShow(!show)} className={`col-span-4 ${show ? "text-indigo-600" : ''} flex justify-center items-center py-2`}>
                                        <AiOutlineLike className='mx-2 text-xl'/>
                                        <button>Like</button>
                                    </div>
                                    <div className='col-span-4 flex justify-center items-center py-2'>
                                        <FaRegCommentAlt className='mx-2 text-xl'/>
                                        <button>Comment</button>
                                    </div>
                                    <div className='col-span-4 flex justify-center items-center py-2'>
                                        <RiShareForwardLine className='mx-2 text-xl'/>
                                        <button>Share</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default NewPost;