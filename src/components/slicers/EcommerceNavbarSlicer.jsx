import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    org:[],
    chang:[]
}

const inputSlicer = createSlice({
    name : 'navInput',
    initialState,
    reducers: {
        receive : (state,action)=>{
            state.org=action.payload
            state.chang = action.payload
        },
        filteredInput : (state,action)=>{
            if (action.payload.length<1){
                state.chang = state.org
            }else {
                state.chang = state.org.filter(i => i.title.toLowerCase().includes(action.payload))
            }
        },


    }
})

export const {receive,filteredInput} = inputSlicer.actions
export default inputSlicer.reducer