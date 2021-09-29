import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        sidebar: true,
    },
    reducers: {
        openSidebar(state, action) {
            state.sidebar = true;
        },
        closeSidebar(state, action) {
            state.sidebar = false;
        }
    }
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
