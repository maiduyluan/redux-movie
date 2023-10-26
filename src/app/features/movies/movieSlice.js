import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trendingMoives: [],
  homepageMovie: [],
  dangchieuMovie: [],
}

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingMovie: (state, action) => {
        state.trendingMoives.push(action.payload)
    },

    sethomePageMovie: (state, action) => {
        state.homepageMovie.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTrendingMovie, sethomePageMovie , setDangChieuMovie} = moviesSlice.actions

export default moviesSlice.reducer