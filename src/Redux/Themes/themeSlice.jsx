import { createSlice } from '@reduxjs/toolkit';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('mu-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* storage unavailable */ }
  const prefersLight =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: getInitialTheme() },
  reducers: {
    themeChange: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('mu-theme', state.value); } catch { /* ignore */ }
    },
    setTheme: (state, action) => {
      state.value = action.payload;
      try { localStorage.setItem('mu-theme', state.value); } catch { /* ignore */ }
    },
  },
});

export const { themeChange, setTheme } = themeSlice.actions;
export default themeSlice.reducer;