import {createSlice} from "@reduxjs/toolkit";

const initialState = 0;

const calculationSlicer = createSlice({
    name : 'calc',
    initialState,
    reducers : {
        addToCartHandler : (state, action)=>{
            return state += 1
        }
    }

})

export const {addToCartHandler} = calculationSlicer.actions
export default calculationSlicer.reducer