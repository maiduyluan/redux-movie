'use client'
import Carousel from '@/components/trangchu/Carousel'
import CardFilm from '@/components/trangchu/CardFilm'
import { useHomepageMovieQuery } from './features/services/moviesApi'

export default function Home() {
  const { data, error, isLoading } = useHomepageMovieQuery()
  
  return (
    <div className='xl:w-10/12 md:w-8/12 w-full'>
      <Carousel data={data?.results} />
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 p-5'>
        {data?.results?.map((item, index) => (
          <CardFilm
            key={index}
            imageURL={item?.poster_path}
            title={item?.title}
            id={item?.id}
          />
        ))}
      </div>
    </div>
  )
}
