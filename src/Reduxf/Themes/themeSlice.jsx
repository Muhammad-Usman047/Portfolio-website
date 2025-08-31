import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeChange: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        }
    }
})

export const { themeChange } = themeSlice.actions;
export default themeSlice.reducer;