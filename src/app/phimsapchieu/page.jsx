'use client'
import CardFilm from '@/components/trangchu/CardFilm'
import React from 'react'
import customAxios from '@/utils/customAxios'
import NumberPage from '@/components/numberpage/NumberPage'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNumber } from '../features/numberpage/numberpage'
import { useSapChieuMovieQuery } from '../features/services/moviesApi'

const Page = () => {
    const dispatch = useDispatch()
    const numberPage = useSelector((state) => state.number.numberPage)
    const { data, error, isLoading } = useSapChieuMovieQuery(numberPage)


    const handlePaganation = (id) => {
        dispatch(setNumber(id))
    }

    return (
        <div className='xl:w-10/12 md:w-8/12 w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 p-5'>
                {!!data && data?.results?.map((item, index) => (
                    <CardFilm
                        key={index}
                        imageURL={item?.poster_path}
                        title={item?.title}
                        id={item?.id}
                    />
                ))}
            </div>

            <NumberPage onHandlePagination={handlePaganation} />
        </div>
    )
}

export default Page
