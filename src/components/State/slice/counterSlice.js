import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    loginvalue: false,
    signupvalue: false,
    isAuthenticated: true
  },
  reducers: {
    setlogin: (state, action) => {
      state.loginvalue = action.payload;
    },
    setSignup: (state, action) => {
      state.signupvalue = action.payload;
    },
    loginsuccess: (state)=> {
        state.isAuthenticated=true;
    },
    logoutsuccess: (state)=> {
        state.isAuthenticated=false;
    }
   
  },
})

export const { setlogin, setSignup, loginsuccess, logoutsuccess } = counterSlice.actions

export default counterSlice.reducer;
