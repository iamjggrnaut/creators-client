import React from 'react'
import { Link } from 'react-router-dom'
import MainTop from '../components/main/MainTop'
import MainAdvantages from '../components/main/MainAdvantages'
import MainHalls from '../components/main/MainHalls'
import MainBooking from '../components/main/MainBooking'


const Main = () => {


    return (
        <div className='main-page'>
            <MainTop />
            <MainAdvantages />
            <MainHalls />
            <MainBooking />
        </div>
    )
}

export default Main