import { createSlice } from "@reduxjs/toolkit/react";


export interface counterSlice {
    counter:number
}
const initialState: counterSlice = {
    counter: 0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter+=1
        }
    }
})


export const {increment} = counterSlice.actions;
export default counterSlice.reducer