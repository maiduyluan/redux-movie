import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numberPage: 1,
}

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    setNumber: (state, action) => {
        state.numberPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNumber} = numberSlice.actions

export default numberSlice.reducer