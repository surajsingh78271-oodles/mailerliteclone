import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {isLoged:false,email:"",password:""},
  reducers: {
     loginHandle  (state,action) {
        state.email = action?.payload?.email
        state.password = action?.payload?.password
        state.isLoged = true
    },
    logoutHandle  (state) {
      state.email = ""
      state.password = ""
      state.isLoged = false
  },
  },
})

export const { loginHandle,logoutHandle } = AuthSlice.actions
export default AuthSlice.reducer