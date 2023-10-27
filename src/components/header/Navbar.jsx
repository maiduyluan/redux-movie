'use client'
import React from 'react'
import Link from "next/link";
import SearchBar from './SearchBar';
import years from '@/utils/yearsArr'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCategoryModalShow, setIsYearsModalShow, setIsMenuModalShow } from '@/app/features/modals/modalsSlice';

const Navbar = ({ data, className }) => {
    const dispatch = useDispatch()
    const isCategoryModalShow = useSelector((state) => state.modals.isCategoryModalShow)
    const isYearsModalShow = useSelector((state) => state.modals.isYearsModalShow)
    const isMenuModalShow = useSelector((state) => state.modals.isMenuModalShow)

    return (
        <div className={className}>
            <div className="text-sm lg:flex-grow">
                <button
                    value="category"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                    onClick={() => 
                        dispatch(setIsCategoryModalShow(!isCategoryModalShow))}
                >
                    Thể Loại
                </button>
                <div className=" absolute flex-col bg-teal-600 z-10 rounded-lg">
                    {isCategoryModalShow && data?.map((item, index) => (
                        <Link
                            className="hover:text-red-300 w-40 text-lg px-2.5"
                            href={`/category/${item.id}`}
                            key={index}
                            onClick={() => {
                                dispatch(setIsCategoryModalShow(!isCategoryModalShow)),
                                dispatch(setIsMenuModalShow(!isMenuModalShow))
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <Link
                    href="/phimdangchieu"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                    onClick={() => dispatch(setIsMenuModalShow(!isMenuModalShow))}
                >
                    Đang Chiếu
                </Link>
                <Link
                    href="/phimsapchieu"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                    onClick={() => dispatch(setIsMenuModalShow(!isMenuModalShow))}
                >
                    Sắp Chiếu
                </Link>
                <Link
                    href="/phimphobien"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                    onClick={() => dispatch(setIsMenuModalShow(!isMenuModalShow))}
                >
                    Phổ Biến
                </Link>
                <div
                    value="year"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer"
                    onClick={() => dispatch(setIsYearsModalShow(!isYearsModalShow))}
                >
                    Năm
                    {isYearsModalShow &&
                        <div className="absolute flex-col bg-teal-600 z-10 rounded-lg">
                            {years.map((item, index) => (
                                <Link
                                    href={`/years/${item.name}`}
                                    key={index}
                                    className="hover:text-red-300 w-20 text-lg text-center"
                                    onClick={() => {
                                        dispatch(setIsYearsModalShow(!isYearsModalShow)),
                                        dispatch(setIsMenuModalShow(!isMenuModalShow))
                                    }}
                                >{item.name}</Link>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <SearchBar />

        </div>
    )
}

export default Navbar