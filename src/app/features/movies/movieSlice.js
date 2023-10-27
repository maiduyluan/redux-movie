import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trendingMoives: [],
  homepageMovie: [],
  episode: 0,
}

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setEpisode: (state, action) => {
      state.episode = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTrendingMovie, sethomePageMovie , setEpisode} = moviesSlice.actions

export default moviesSlice.reducer