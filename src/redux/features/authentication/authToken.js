import { createSlice } from "@reduxjs/toolkit";

const initialState={
  userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null, 
}
const authTokenSlice = createSlice({
  name: 'authToken',
  initialState:initialState,
  reducers:{
    setCredentials:(state,action)=>{
        state.userInfo =action.payload;
        localStorage.setItem('userInfo',JSON.stringify(action.payload))
    },
    resetToken: state => {
        state.userInfo = '';
      },
  }


}); 

export const {setCredentials,resetToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;