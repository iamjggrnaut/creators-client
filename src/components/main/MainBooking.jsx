import React from 'react'
import img from '../../assets/bookingimg.png'
import { Link } from 'react-router-dom'

const MainBooking = () => {

    return (
        <div className='main-booking'>
            <img className='main-booking-img' src={img} alt="" />
            <div className='main-booking-sub'>
                <p className="booking-title">ОНЛАЙН-ЗАПИСЬ</p>
                <p className='col-9'>
                    свободные даты, условия и правила брони, формы заявок
                    на ведущего, индивидуальные застройки и другие услуги
                </p>
                <br />
                <Link className='main-booking-btn' to={'#'}>забронировать</Link>
            </div>
        </div>
    )
}

export default MainBooking