import React, { useContext } from 'react'
import ProfileBtn from '../assets/ProfileBtn'
import { Link } from 'react-router-dom'
import AuthContext from '../service/AuthContext'
import { FiLogOut } from "react-icons/fi";


const Navpanel = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <div className='navpanel'>
            <div className="nav-container container">
                <span>ул. краснобогатырская 2с4</span>
                <div className="nav-links">
                    <Link to={'/'}>о студии</Link>
                    <Link to={'#'}>залы</Link>
                    <Link to={'#'}>контакты</Link>
                    <div className='d-flex align-items-center gap-2'>
                        <Link to={'/account'}><ProfileBtn /></Link>
                        {
                            user ?
                                <button className='logout-btn' onClick={() => logout()}>
                                    <FiLogOut />
                                </button>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navpanel