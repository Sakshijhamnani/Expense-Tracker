import {createSlice} from '@reduxjs/toolkit'

const initialState={
    token:localStorage.getItem('token'),
    retrievedData:'',
    loggedIn:true

}
export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
      updateData(state,action){
        state.retrievedData=action.payload
      },
      logOutHandler(state){
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('profileData')
        state.loggedIn=!state.loggedIn

      }  ,
       logInHandler(state){
         state.loggedIn=!state.loggedIn
      }
    }
})

export const {updateData,logOutHandler,logInHandler}=authSlice.actions

export default authSlice.reducer