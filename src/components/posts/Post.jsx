import React, {useState} from 'react';
import {FiMoreVertical} from 'react-icons/fi'
import {AiOutlineLike,AiFillHeart} from 'react-icons/ai'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'
import {postData} from "./postDatas/postsData";
import NewPost from "./newPost/NewPost";



const Post = () => {

    const [show,setShow] = useState(false)

    return (
        <div className=''>
            {
                postData.map((data,index)=>{
                    return (
                        <div key={index} className='my-2'>
                            <div>
                                <div className='grid grid-cols-12 items-center text-start py-2'>
                                    <div className='col-span-1 mx-auto'>
                                        <img src={data.profileImage} alt="img2"
                                             className='rounded-full cursor-pointer border-blue-500 hover:opacity-[0.9] w-[38px] justify-self-center'/>
                                    </div>
                                    <div className='col-span-10 cursor-pointer hover:underline'><h1>{data.postName}</h1></div>
                                    <div className='col-span-1 justify-self-center'><FiMoreVertical/></div>
                                </div>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-11'>
                                        <p className='text-start mx-4 my-2 px-4 py-1 truncate'>
                                            {data.postCaption}
                                        </p>
                                    </div>
                                </div>
                                <div className='m-2 flex items-center justify-center'>
                                    <img className='px-3 py-2 w-auto' src={data.postImage} alt=""/>
                                </div>
                                <div className='grid py-2 grid-cols-12 justify-center items-center w-[90%] mx-auto'>
                                    <div className='col-span-1 text-start mx-1 text-indigo-600'>
                                        <AiOutlineLike className='text-[25px] inline rounded-full'/>
                                        <AiFillHeart className='text-[25px] inline rounded-full'/>
                                    </div>
                                    <div className='col-span-2'>
                                        <p className='capitalize text-start'>{data.postLikes} Likes</p>
                                    </div>
                                    <div className='col-span-9 text-end'>
                                        <p className='inline px-2'>{data.postComment} Comments</p>
                                        <p className='inline px-2'>{data.postShare} Shares</p>
                                    </div>
                                </div>
                                <hr className='w-[95%] mx-auto mt-4 rounded-full'/>

                                <div className='grid grid-cols-12'>
                                    <div onClick={()=>setShow(!show)} className={`col-span-4 ${show ? "text-indigo-600" : ''} flex justify-center items-center py-2`}>
                                        <AiOutlineLike className='mx-2 text-xl'/>
                                        <button className=''>Like</button>
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
                            <div className='border mt-5 border-gray-400'></div>

                        </div>
                    )
                })
            }
            <NewPost/>
        </div>
    );
};

export default Post;
