import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from "./Modal";


const Plus = () => {
    const [plus,setPlus] = useState(false)
    const [post,setPost] = useState('')
    const [posts,setPosts] = useState([])
    const plusHandler = (e)=>{
        setPlus(!plus)
    }
    const captionHandler = (e) =>{
        setPost(e.target.value)
    }

    const postAdd = (e) =>{
        setPosts(pre=>[...pre , post])
    }
    console.log(posts)
    return (
        <div className='flex justify-center pt-2 pb-5'>
            <div>
                <button onClick={plusHandler} >
                    <AiOutlinePlus className='mt-4 text-6xl bg-indigo-200 rounded-full'/>
                </button>
                { plus &&
                    <Modal plusHandler={plusHandler} captionHandler={captionHandler} postAdd = {postAdd} />
                }
            </div>
        </div>
    );
};

export default Plus;