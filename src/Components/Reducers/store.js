import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import themeReducer from "./themeSlice";
import { profileDataSlice } from "./ProfileDataRedux";

export const store = configureStore({
  reducer: { auth: authReducer, thememode: themeReducer,profile: profileDataSlice.reducer },
});

export { authReducer, themeReducer };

