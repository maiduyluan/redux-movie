import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '@/app/features/movies/movieSlice'
import modalsReducer from '@/app/features/modals/modalsSlice'
import numberReducer from '@/app/features/numberpage/numberpage'
import { moviesApi } from './features/services/moviesApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movie: movieReducer,
    modals: modalsReducer,
    number: numberReducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(moviesApi.middleware),
})

setupListeners(store.dispatch)
