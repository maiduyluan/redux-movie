// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTkwMTA5MmZkYzg0ZWJiNmUwYmMyZmVmNjZkODljOCIsInN1YiI6IjY0ZTE4MTMyZGE5ZWYyMDEwMjMyZGFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RvcKF0YAMLumRPlx3u01NaN_NeG-uBmstl41QXEVwvM'
    }
  }),
  endpoints: (builder) => ({
    trendingMovie: builder.query({
      query: () => `/3/trending/movie/day?language=en-US`,
    }),

    homepageMovie: builder.query({
      query: () => `/3/movie/popular?language=en-US&page=1`,
    }),

    dangChieuMovie: builder.query({
      query: (numberPage) => `/3/movie/now_playing?language=en-US&page=${numberPage}`,
    }),

    sapChieuMovie: builder.query({
      query: (numberPage) => `/3/movie/upcoming?language=en-US&page=${numberPage}`,
    }),

    phoBienMovie: builder.query({
      query: (numberPage) => `/3/movie/popular?language=en-US&page=${numberPage}`,
    }),

    yearsMovie: builder.query({
      query: ({numberPage, years}) => {
        return `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${numberPage}&primary_release_year=${years}&sort_by=popularity.desc`
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useTrendingMovieQuery, 
  useHomepageMovieQuery, 
  useDangChieuMovieQuery, 
  useSapChieuMovieQuery, 
  usePhoBienMovieQuery, 
  useYearsMovieQuery,
} = moviesApi
