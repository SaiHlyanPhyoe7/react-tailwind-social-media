import React from 'react';
import useFetch from "../../../customHook/useFetch";
import {useDispatch, useSelector} from "react-redux";
import {addToCartHandler} from "../../../slicers/EcmeCalculationSlicer";

const EcommerceBody = () => {
    const {isPending,fetchError} = useFetch('https://fakestoreapi.com/products')
    const data = useSelector(state => state.navInput)
    const dispatch = useDispatch()

    const atcartHandler = (x)=>{
        // console.log(x)
        dispatch(addToCartHandler(x))

    }

    // console.log(data.chang)
    return (
        <div>
            <div className='w-[80%] mx-auto bg-white shadow-sm shadow-sky-300'>
                <div className='grid grid-cols-12 my-4'>
                    {isPending && <div className='text-4xl text-red-500 flex justify-center h-screen col-span-12 items-center'>Loading.....</div>}
                    {fetchError && <div>{fetchError}</div>}
                    {
                        data.chang.map((data,index)=>{
                            return (
                                <div key={data.id} className='group space-y-3 border border-red-400 col-span-4 h-[600px] row-auto px-5 overflow-hidden flex flex-col justify-evenly m-3
                                                rounded-tl-[20px] rounded-tr-[90px] rounded-br-[15px] rounded-bl-[50px]'>
                                    <div className='duration-1000 bg-white rounded-lg flex justify-center items-center mt-4'>
                                        <img src={data.image} alt="" className='duration-300 rounded-lg mt-8 mb-2 object-cover max-w-[100%] group-hover:rotate-[-12deg] h-[150px]'/>
                                    </div>
                                    <div className='duration-300 perspective-cus group-hover:perspective-cus group-hover:drop-shadow-3xl flex flex-col mx-4 px-5 pt-8 pb-2 justify-between hover:shadow-2xl p-1 h-[450px]
                                    rounded-tl-[20px] rounded-tr-[90px] rounded-br-[15px] rounded-bl-[50px]'>
                                        <div className='space-y-3'>
                                            <h1 className='text-lg font-semibold'>{data.title}</h1>
                                            <p className='px-2 flex-wrap overflow-y-auto text-sm text-gray-500 h-[110px]'>{data.description}</p>
                                        </div>
                                        <div className='flex justify-between space-y-3 items-center pb-4'>
                                            <h1 className='font-semibold text-lg text-red-400'>{data.price} $</h1>
                                            <button onClick={()=>atcartHandler(data.id)}
                                                className='bg-indigo-500 text-white px-3 py-2 rounded-lg shadow hover:shadow-lg hover:bg-indigo-600'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default EcommerceBody;