'use client'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Navbar from './Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { setIsMenuModalShow } from '@/app/features/modals/modalsSlice'


const NavigationMobile = ({ data }) => {
    const dispatch = useDispatch()
    const isMenuModalShow = useSelector((state) => state.modals.isMenuModalShow)
    
    const handleToggleMobile = () => {
        dispatch(setIsMenuModalShow(!isMenuModalShow))
    }

    return (
        <div className='lg:hidden'>
            <button
                className="text-3xl"
                onClick={handleToggleMobile}
            >
                <AiOutlineMenu />
            </button>
            { isMenuModalShow && <Navbar data={data} className={`absolute left-0 right-0 ${isMenuModalShow ? 'translate-x-0' : '-translate-x-[1000px]'} transition-all duration-300 w-full bg-teal-500 px-10 pb-5`} />}
        </div>
    )
}

export default NavigationMobile