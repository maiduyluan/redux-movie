import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCategoryModalShow: false,
  isYearsModalShow: false
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsCategoryModalShow: (state, action) => {
        state.isCategoryModalShow = !state.isCategoryModalShow
    },


    setisYearsModalShow: (state, action) => {
      state.isYearsModalShow = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsCategoryModalShow, setisYearsModalShow } = modalsSlice.actions

export default modalsSlice.reducer