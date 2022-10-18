import React, {useContext} from 'react';
import {ContextData} from "../../../store/DataProvider";

const NewPost = () => {
    const {obj} = useContext(ContextData)
    console.log(obj)
    return (
        <div>
            {
                obj.map((i,index)=>{
                    return(
                        <div key={index}></div>
                    )
                })
            }
        </div>
    );
};

export default NewPost;