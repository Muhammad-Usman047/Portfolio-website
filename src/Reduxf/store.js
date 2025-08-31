import {configureStore} from '@reduxjs/toolkit';
import themeReducer from "./Themes/themeSlice";

export const store = configureStore({
    reducer: {
        theme : themeReducer,
    }
})