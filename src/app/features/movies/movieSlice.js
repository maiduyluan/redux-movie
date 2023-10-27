import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  episode: 0,
  inputNameMovie: '',
}

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setEpisode: (state, action) => {
      state.episode = action.payload
    },

    setInputNameMovie: (state, action) => {
      state.inputNameMovie = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEpisode, setInputNameMovie, setNameMovie } = moviesSlice.actions

export default moviesSlice.reducer