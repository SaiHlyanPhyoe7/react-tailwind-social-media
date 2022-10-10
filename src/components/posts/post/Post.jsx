import React from 'react';
import {FiMoreVertical} from 'react-icons/fi'
import {AiOutlineLike,AiFillHeart} from 'react-icons/ai'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'
import {postData} from "./postsData";
import img1 from '../../../imagesToTest/1.png'
import img2 from '../../../imagesToTest/2.jpeg'
import img3 from '../../../imagesToTest/3.jpeg'
import img4 from '../../../imagesToTest/4.jpeg'
import img5 from '../../../imagesToTest/5.jpeg'
import img6 from '../../../imagesToTest/6.jpeg'
import img7 from '../../../imagesToTest/7.jpeg'
import img8 from '../../../imagesToTest/8.jpeg'
import img9 from '../../../imagesToTest/9.jpeg'
import img10 from '../../../imagesToTest/10.jpeg'
import img11 from '../../../imagesToTest/11.jpeg'
import img12 from '../../../imagesToTest/12.jpeg'
import img13 from '../../../imagesToTest/13.jpeg'
import img14 from '../../../imagesToTest/14.jpeg'

const Post = () => {
    console.log(postData)
    return (
        <div>
            {
                postData.map((data,index)=>{
                    return (
                        <div key={index} className='my-2'>
                            <div>
                                <div className='grid grid-cols-12 items-center text-start bg-blue-400 py-2'>
                                    <div className='col-span-1 mx-auto'>
                                        <img src={data.profileImage} alt="img2"
                                             className='rounded-full border-blue-500 w-[38px] justify-self-center'/>
                                    </div>
                                    <div className='col-span-10'><h1>{data.postName}</h1></div>
                                    <div className='col-span-1 justify-self-center'><FiMoreVertical/></div>
                                </div>
                                <div className='bg-pink-400 grid grid-cols-12'>
                                    <div className='col-span-11'>
                                        <p className='text-start mx-4 my-2 px-4 py-1'>
                                            {data.postCaption}
                                        </p>
                                    </div>
                                </div>
                                <div className='m-2 flex items-center justify-center'>
                                    <img className='px-3 py-2 w-auto' src={data.postImage} alt=""/>
                                </div>
                                <div className='grid py-2 grid-cols-12 justify-center items-center bg-red-500 w-[90%] mx-auto'>
                                    <div className='col-span-1 text-start mx-1'>
                                        <AiOutlineLike className='text-[25px] inline rounded-full bg-yellow-100'/>
                                        <AiFillHeart className='text-[25px] inline rounded-full bg-yellow-100'/>
                                    </div>
                                    <div className='col-span-1'>
                                        <p className='uppercase text-start'>{data.postLikes}</p>
                                    </div>
                                    <div className='col-span-9 text-end'>
                                        <p className='inline px-2'>{data.postComment} Comments</p>
                                        <p className='inline px-2'>{data.postShare} Shares</p>
                                    </div>
                                </div>
                                <hr className='w-[95%] mx-auto mt-4 rounded-full'/>

                                <div className='grid grid-cols-12 bg-white'>
                                    <div className='col-span-4 flex justify-center items-center bg-white py-2'>
                                        <AiOutlineLike className='mx-2 text-xl'/>
                                        <button>Like</button>
                                    </div>
                                    <div className='col-span-4 flex justify-center items-center bg-white py-2'>
                                        <FaRegCommentAlt className='mx-2 text-xl'/>
                                        <button>Comment</button>
                                    </div>
                                    <div className='col-span-4 flex justify-center items-center bg-white py-2'>
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

export default Post;
