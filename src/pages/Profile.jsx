import React, { useContext, useEffect, useState } from 'react'
import '../styles/account.css'
import AuthContext from '../service/AuthContext'
import BookingTable from '../components/account/BookingTable'
import { ServiceFunctions } from '../service/serviceFunctions'

const ManageUsers = () => {

    const { user, authToken } = useContext(AuthContext)

    const role = user ? user.role : null

    const [users, setUsers] = useState()
    useEffect(() => {
        ServiceFunctions.getAllUsers(authToken).then(data => setUsers(data))
    }, [])

    console.log(users);


    return (
        <div className='partner-tab'>
            {
                users && users.length ?
                    users.map((u, i) => (
                        <div className="user-row">
                            <span className="col-2 fw-bold">{`${u.lastName} ${u.firstName}`}</span>
                            <span className="col-2">{`${u.phone}`}</span>
                            <span className="col-3">{`${u.email}`}</span>
                            <span className="col">{`${u.role}`}</span>
                            <div className="col">
                                {
                                    u.role !== 'ADMIN' ?
                                        <button className='switch-btn extra-sm-text' style={{ width: '100%' }}
                                            onClick={e => {
                                                if (u.role === 'CLIENT') {
                                                    ServiceFunctions.updateUser(
                                                        u.id,
                                                        { ...u, role: 'PARTNER' },
                                                        authToken
                                                    )
                                                }
                                                if (u.role === 'PARTNER') {
                                                    ServiceFunctions.updateUser(
                                                        u.id,
                                                        { ...u, role: 'CLIENT' },
                                                        authToken
                                                    )
                                                }
                                            }}
                                        >
                                            {
                                                u.role === 'CLIENT' ?
                                                    'сделать партнером'
                                                    : 'сделать клиентом'
                                            }
                                        </button>
                                        : null
                                }
                            </div>
                        </div>
                    ))
                    : null
            }
        </div>
    )
}


const PartnerTab = () => {

    const today = new Date().toLocaleDateString()?.split('.')?.reverse()?.join('-')
    const newDate = new Date()
    const lastDate = new Date(new Date(newDate)?.setDate(new Date(newDate)?.getDate() + 10)).toLocaleDateString()?.split('.')?.reverse()?.join('-')


    return (
        <div className='partner-tab'>
            <div className="filter-fields mb-3">
                <div className='picker'>
                    <label htmlFor="" className='me-2'>c</label>
                    <input type="date" name="" id="" defaultValue={today} />
                </div>
                <div className='picker'>
                    <label htmlFor="" className='me-2'>по</label>
                    <input type="date" name="" id="" defaultValue={lastDate} />
                </div>
            </div>

            <div className='col-6'>
                <div className="d-flex">
                    <span className="col-6">начислено:</span>
                    <span className="col-6 fw-bold">хх руб.</span>
                </div>
                <div className="d-flex">
                    <span className="col-6">приведено:</span>
                    <span className="col-6 fw-bold">хх чел.</span>
                </div>
            </div>
        </div>
    )
}


export const Booking = () => {

    const { user, authToken } = useContext(AuthContext)

    const [toggle, setToggle] = useState(false)

    const [allBookings, setAllBookings] = useState()
    const [roomId, setRoomId] = useState(1)

    const role = user ? user.role : null

    useEffect(() => {
        if (role === 'ADMIN') {
            ServiceFunctions.getRoomBookingsExtended(authToken).then(data => setAllBookings(data))
        }
        else (
            ServiceFunctions.getRoomBookings(roomId).then(data => setAllBookings(data))
        )
    }, [toggle, role])

    console.log(allBookings);
    console.log(role);


    return (
        <div className='booking-tab'>
            <BookingTable
                authorized={true}
                email={user?.email}
                changeRoom={setRoomId}
                roomId={roomId}
                bookings={allBookings}
                setAllBookings={setAllBookings}
                setToggle={setToggle}
                toggle={toggle}
                role={role}
            />
        </div>
    )
}


const UserInfo = () => {

    const { user, authToken } = useContext(AuthContext)

    const role = user ? user.role : null

    const [bookings, setBookings] = useState()
    useEffect(() => {
        if (role === 'CLIENT') {
            ServiceFunctions.getUserBookings(user?.id, authToken).then(data => setBookings(data))
        }
        else if (role === 'PARTNER') {
            ServiceFunctions.getPartnerUserBookings(user?.id, authToken).then(data => setBookings(data))
        }
        else {
            ServiceFunctions.getAdminUserBookings(user?.id, authToken).then(data => setBookings(data))
        }
    }, [role && user])

    const [rooms, setRooms] = useState()
    useEffect(() => {
        ServiceFunctions.getRooms().then(data => setRooms(data))
    }, [])


    return (
        <div className='user-tab'>
            <div className='user-info col'>
                <p className="username mb-3">{user && `${user.firstName} ${user.lastName}`}</p>
                <div>
                    <p className="sm-text mb-0">статус</p>
                    <p>
                        {
                            user?.role === 'CLIENT' ? 'Клиент'
                                : user?.role === 'ADMIN' ? 'Администратор'
                                    : user?.role === 'PARTNET' ? 'Партнер'
                                        : 'Статус не определен'
                        }
                    </p>
                </div>
                <div>
                    <p className="sm-text mb-0">телефон</p>
                    <p>{user && user?.phone || 'Номер не указан'}</p>
                </div>
                <div>
                    <p className="sm-text mb-0">email</p>
                    <p>{user && user.email || 'email не указан'}</p>
                </div>
            </div>
            <div className='active-booking col'>
                <p className="booking-headline mb-3">Активные бронирования</p>
                <div>
                    {
                        bookings?.bookings?.length === 0 ?
                            <p className="sm-text">Активных бронирований не найдено</p>
                            :
                            bookings?.bookings?.map((item, i) => (
                                <div key={i} className='user-booking-row mb-4'>
                                    <p className='fw-bold mb-1'>Бронирование {item.id} </p>
                                    <p className='fw-bold mb-1'>Зал {rooms ? rooms?.rooms?.find(el => el.id === item.roomId)?.name : '-'} </p>
                                    <p className='mb-1'>{new Date(item.date).toLocaleDateString()}, {item.hour}</p>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}


const Profile = () => {

    const [tab, setTab] = useState(1)

    const changeTab = (num) => {
        setTab(num)
    }

    const { user } = useContext(AuthContext)
    const role = user ? user.role : null

    const showTab = (num) => {
        switch (num) {
            case 1:
                return <UserInfo />
            case 2:
                return <Booking />
            case 3:
                return <PartnerTab />
            case 4:
                return <ManageUsers />
            default:
                return <UserInfo />
        }
    }

    return (
        <div className='account-page'>
            <div className="account-container container">
                <div className="account-tabs">
                    <span className={tab === 1 ? "account-tab active-tab" : 'account-tab'} onClick={() => changeTab(1)}>личная информация</span>
                    <span className={tab === 2 ? "account-tab active-tab" : 'account-tab'} onClick={() => changeTab(2)}>бронирование</span>
                    {
                        role && role === 'PARTNER' || role === 'ADMIN' ?
                            <span className={tab === 3 ? "account-tab active-tab" : 'account-tab'} onClick={() => changeTab(3)}>партнерская программа</span>
                            : null
                    }
                    {
                        role && role === 'ADMIN' ?
                            <span className={tab === 4 ? "account-tab active-tab" : 'account-tab'} onClick={() => changeTab(4)}>пользователи</span>
                            : null
                    }
                </div>

                {showTab(tab)}

            </div>
        </div>
    )
}

export default Profile