import React, { useEffect, useState } from 'react'
import BookingTable from '../components/account/BookingTable'
import { ServiceFunctions } from '../service/serviceFunctions'

const Booking = () => {

    const [roomId, setRoomId] = useState(1)


    const [bookings, setBookings] = useState()
    useEffect(() => {
        ServiceFunctions.getRoomBookings(roomId).then(data => setBookings(data))
    }, [roomId])

    console.log(bookings);


    return (
        <div className='account-page container'>
            <div className="booking-tab">
                <BookingTable
                    authorized={false}
                    changeRoom={setRoomId}
                    roomId={roomId}
                    bookings={bookings}
                />
            </div>
        </div>
    )
}

export default Booking