import React, { useContext, useEffect, useState } from 'react'
import { generateDateRange } from '../../service/utils';
import { ServiceFunctions } from '../../service/serviceFunctions';
import AuthContext from '../../service/AuthContext';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const BookingTable = ({ authorized, role, changeRoom, roomId, email, bookings, setAllBookings, setToggle, toggle }) => {

    const { authToken, user } = useContext(AuthContext)

    const hours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

    const today = new Date().toLocaleDateString()?.split('.')?.reverse()?.join('-')
    const newDate = new Date()
    const lastDate = new Date(new Date(newDate)?.setDate(new Date(newDate)?.getDate() + 6)).toLocaleDateString()?.split('.')?.reverse()?.join('-')

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const [datesArray, setDatesArray] = useState([])

    const [rooms, setRooms] = useState()
    useEffect(() => {
        ServiceFunctions.getRooms().then(data => setRooms(data))
    }, [])


    useEffect(() => {
        setStartDate(today)
        setEndDate(lastDate)
    }, [])

    useEffect(() => {
        setDatesArray(generateDateRange(startDate, endDate))
    }, [startDate, endDate])


    const [selected, setSelected] = useState([])


    const [hoveredBooking, setHoveredBooking] = useState()
    const [showTooltip, setShowTooltip] = useState(false)

    const onHover = (item) => {
        if (item && role === 'ADMIN') {
            setHoveredBooking(item)
            setShowTooltip(true)
        }
        else {
            setHoveredBooking()
            setShowTooltip(false)
        }
    }

    useEffect(() => {

    }, [hoveredBooking])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(selected);

    const [useremail, setUseremail] = useState('')
    const [phone, setPhone] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')



    return (
        <div className='booking-table'>

            <div className="booking-filter mb-3">
                <div className="filter-fields">
                    <div className="datepicker">
                        <div className='picker'>
                            <label htmlFor="" className='me-2'>c</label>
                            <input type="date" name="" id="" defaultValue={startDate}
                                min={role === "ADMIN" ? '' : today}
                                onChange={e => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className='picker'>
                            <label htmlFor="" className='me-2'>по</label>
                            <input type="date" name="" id="" defaultValue={endDate}
                                onChange={e => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <select name="" id="hall-selector" className="hall-selector" defaultValue={'genesis'}
                            onChange={e => { setSelected({ ...selected, roomId: e.target.value }); changeRoom(e.target.value) }}
                        >
                            {
                                rooms && rooms?.rooms.length ?
                                    rooms?.rooms?.map((room, i) => (
                                        <option value={room?.id} key={i}>{room?.name}</option>
                                    ))
                                    : null
                            }
                        </select>
                    </div>
                </div>

                <div>
                    <button className="prime-btn m-0 text-center" style={{ backgroundColor: 'var(--orange)' }}
                        onClick={e => {
                            if (authorized) {
                                ServiceFunctions.createBooking(e, authToken, selected, email, user?.id);
                                ServiceFunctions.getRoomBookings(roomId).then(data => setAllBookings(data))
                                setSelected([])
                                setToggle(!toggle)
                            }
                            else {
                                handleShow()
                            }
                        }}
                    >забронировать</button>
                </div>
            </div>

            <table className='booking-table'>

                <thead>
                    <th></th>
                    {
                        datesArray?.map((day, i) => (
                            <th key={i} className='ps-3 pe-3 sm-text text-center'>
                                {day && new Date(day).toLocaleDateString()}
                            </th>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        hours?.map((hour, i) => (
                            <tr key={i}>
                                <td className=' pe-4 text-center'>{hour}</td>
                                {
                                    datesArray?.map((day, i) => (
                                        <td className='text-center extra-sm-text booking-cell' key={i}
                                            style={
                                                selected.length && selected?.find(item => item?.date && item?.date === day && item?.hour && item?.hour === hour) ?
                                                    { backgroundColor: 'var(--orange)', color: 'white' } :
                                                    bookings && bookings.bookings?.find(item => item.date === day && item.hour === hour && item.roomId === Number(roomId)) ?
                                                        { backgroundColor: 'var(--dark)', color: 'var(--light)' }
                                                        :
                                                        {}
                                            }
                                            onMouseEnter={() => {
                                                const target = bookings && bookings.bookings?.find(item => item.date === day && item.hour === hour)
                                                onHover(target)
                                            }}
                                            onClick={(e) => {
                                                const target = selected.length && selected.find(item => item?.date === day && item?.hour === hour)
                                                if (target) {
                                                    setSelected((prevSchedule) =>
                                                        prevSchedule.filter((item) => !(item.date === day && item.hour === hour))
                                                    );
                                                }
                                                else {
                                                    setSelected([
                                                        ...selected,
                                                        {
                                                            date: day,
                                                            hour: hour,
                                                            roomId: roomId,
                                                            email: email
                                                        }
                                                    ])
                                                }
                                            }}
                                        >
                                            {
                                                bookings && bookings.bookings?.find(item => item.date === day && item.hour === hour) ?
                                                    'бронь'
                                                    :
                                                    'доступно'
                                            }
                                            {
                                                showTooltip && hoveredBooking && hoveredBooking.date === day && hoveredBooking.hour === hour ?
                                                    <div className="custom-tooltip">
                                                        <h5 className='fw-bold'>
                                                            {
                                                                hoveredBooking.user && hoveredBooking.user?.firstName + ' ' + hoveredBooking.user.lastName
                                                                ||
                                                                hoveredBooking.userData && hoveredBooking.userData?.firstName + ' ' + hoveredBooking.userData.lastName
                                                            }
                                                        </h5>
                                                        <p className='mb-1'>статус: {hoveredBooking.user && hoveredBooking.user.role || null}</p>
                                                        <p className='mb-1'>зал: {rooms?.rooms[hoveredBooking.roomId - 1]?.name}</p>
                                                        <p className='mb-1'>email: {
                                                            hoveredBooking.user && hoveredBooking.user.email
                                                            ||
                                                            hoveredBooking.userData && hoveredBooking.userData.email
                                                        }
                                                        </p>
                                                        <p className='mb-1'>тел.: {
                                                            hoveredBooking.user && hoveredBooking.user.phone
                                                            ||
                                                            hoveredBooking.userData && hoveredBooking.userData.phone
                                                        }
                                                        </p>
                                                        <div className="d-flex">
                                                            <span className='mb-1 me-2'>{new Date(hoveredBooking.date).toLocaleDateString()},</span>
                                                            <span className='mb-1'>{hoveredBooking.hour}</span></div>
                                                    </div> : null
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Быстрое бронирование</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-field">
                            <label className='sm-text' htmlFor="">имя</label>
                            <input type="text" className="form-input" onChange={e => setFirstName(e.target.value)} />
                        </div> <div className="form-field">
                            <label className='sm-text' htmlFor="">фамилия</label>
                            <input type="text" className="form-input" onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <label className='sm-text' htmlFor="">email</label>
                            <input type="text" className="form-input" onChange={e => setUseremail(e.target.value)} />
                        </div> <div className="form-field">
                            <label className='sm-text' htmlFor="">телефон</label>
                            <input type="text" className="form-input" onChange={e => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='sm-text text-center'>еще нет аккаунта? <br /> <Link className='prime-link' to={'/sign'}>Создать аккаунт</Link></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='prime-btn'
                        onClick={e => {
                            ServiceFunctions.createFastBooking(e, selected, {
                                email: useremail,
                                phone: phone,
                                firstName: firstName,
                                lastName: lastName
                            })
                        }}>
                        забронировать
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BookingTable