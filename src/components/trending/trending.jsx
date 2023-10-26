'use client'
import { CardFilm } from './CardFilmsTrending'
import { useTrendingMovieQuery } from '@/app/features/services/moviesApi'

export default function Trending() {
    const { data, error, isLoading } = useTrendingMovieQuery()

    return (
        <div className="flex flex-col item-center xl:w-4/12 md:w-4/12 w-full">
            <h1 className="text-2xl mb-3 font-bold text-white italic">TOP TRENDING</h1>
            {data?.results.slice(0,7).map((item, index) => (
                <CardFilm 
                    key={index} 
                    imageUrl={item?.poster_path}
                    title={item?.original_title}
                    views={item?.popularity}
                    overview={item?.overview}
                    id={item?.id}
                />
            ))}
        </div>

    )
}