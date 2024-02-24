import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: { auth: authReducer, thememode: themeReducer },
});

export { authReducer, themeReducer };

