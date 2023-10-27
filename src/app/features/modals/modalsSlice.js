import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCategoryModalShow: false,
  isYearsModalShow: false,
  isMenuModalShow: false,
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsCategoryModalShow: (state, action) => {
        state.isCategoryModalShow = action.payload
    },


    setIsYearsModalShow: (state, action) => {
      state.isYearsModalShow = action.payload
    },

    setIsMenuModalShow: (state, action) => {
      state.isMenuModalShow = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsCategoryModalShow, setIsYearsModalShow, setIsMenuModalShow } = modalsSlice.actions

export default modalsSlice.reducer