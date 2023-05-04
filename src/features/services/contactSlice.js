import { createSlice } from "@reduxjs/toolkit";


export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: {
        show : true
    },
    reducers: {
        SetShow: (state, action) => {
            state.show = action.payload
        }
    }
})


export const { SetShow } = contactSlice.actions;
export default contactSlice.reducer