import {createSlice} from '@reduxjs/toolkit';

const initialState={
    theme:false
}

export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state)=>{
           state.theme=!state.theme
        }
    }
})

export const {changeTheme} =themeSlice.actions

export default themeSlice.reducer