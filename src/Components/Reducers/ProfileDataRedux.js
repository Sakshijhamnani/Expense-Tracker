import { createSlice } from "@reduxjs/toolkit";

const initialPofileState = {
  userData: [],
  darkTheme: true,
};

export const profileDataSlice = createSlice({
  name: "updateProfile",
  initialState: initialPofileState,
  reducers: {
    profileData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('profileData',JSON.stringify(state.userData))
    },
    datacall:(state)=>{
      localStorage.setItem('profileData',JSON.stringify(state.userData))
    }
 
  },
});
export const { profileData,datacall } = profileDataSlice.actions;
export default profileDataSlice.reducer;