import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {user : null},
    reducers: {
        login(state,action){
            state.user = action.payload.user;
        }
    }
})

const store = configureStore({reducer: loginSlice.reducer});

export default store;

export const loginActions = loginSlice.actions;