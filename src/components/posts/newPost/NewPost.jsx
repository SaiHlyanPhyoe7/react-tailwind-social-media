import React, {useContext, useState} from 'react';
import {ContextData} from "../../../store/DataProvider";
import {FiMoreVertical} from "react-icons/fi";
import {AiFillHeart, AiOutlineLike} from "react-icons/ai";
import {FaRegCommentAlt} from "react-icons/fa";
import {RiShareForwardLine} from "react-icons/ri";

const NewPost = () => {
    const {obj,selectedImage} = useContext(ContextData)
    const [show,setShow] = useState(false)
    return (
        <div className='my-10'>

            {
                obj.map((data,index)=>{
                    console.log(obj)
                    return(
                        <div key={index} className='my-2'>

                            <div>
                                <div className='grid grid-cols-12 flex justify-between items-center text-start py-2'>
                                        <div className='col-span-11 grid grid-cols-9'>
                                            {selectedImage && (
                                                <div  className='col-span-1  flex justify-center items-center mx-auto'>
                                                    <img className='rounded-full cursor-pointer border-blue-500 hover:opacity-[0.9] w-[38px] justify-self-center'
                                                         alt="not fount" src={URL.createObjectURL(data[2])} />
                                                    <br />
                                                    {/*<button onClick={}>Remove</button>*/}
                                                </div>
                                            )}
                                            <div className='col-span-8 flex justify-start items-center cursor-pointer hover:underline '><h1>{data[0].name}</h1></div>
                                        </div>
                                    <div className='col-span-1 justify-self-center'><FiMoreVertical/></div>
                                </div>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-11'>
                                        <p className='text-start mx-4 my-2 px-4 py-1'>
                                            {data[0].caption}
                                        </p>
                                    </div>
                                </div>

                                <div className='m-2 flex items-center justify-center'>
                                    {selectedImage && (
                                        <div>
                                            <img className='w-[95%] mx-auto' alt="not fount" src={URL.createObjectURL(data[1])} />
                                            <br />
                                            {/*<button onClick={}>Remove</button>*/}
                                        </div>
                                    )}
                                </div>

                                <div className='grid py-2 grid-cols-12 justify-center items-center w-[90%] mx-auto'>
                                    <div className='col-span-1 text-start mx-1 text-indigo-600'>
                                        <AiOutlineLike className='text-[25px] inline rounded-full'/>
                                        <AiFillHeart className='text-[25px] inline rounded-full'/>
                                    </div>
                                    <div className='col-span-2'>
                                        <p className='capitalize text-start'>{data[0].like} Likes</p>
                                    </div>
                                    <div className='col-span-9 text-end'>
                                        <p className='inline px-2'>{data[0].comment} Comments</p>
                                        <p className='inline px-2'>{data[0].share} Shares</p>
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