import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../service/AuthContext'

const SignUp = () => {

    const { register } = useContext(AuthContext)

    const [checked, setChecked] = useState(false)

    const [userData, setUserData] = useState({})

    return (
        <div className='signup-page'>
            <div className="signup-form bg-orange">
                <h4 className="text-center fw-bold mb-2">Регистрация</h4>
                <div className="form-field">
                    <label className='sm-text' htmlFor="">фамилия</label>
                    <input type="text" className="form-input" onChange={e => setUserData({ ...userData, lastName: e.target.value })} />
                </div>
                <div className="form-field">
                    <label className='sm-text' htmlFor="">имя</label>
                    <input type="text" className="form-input" onChange={e => setUserData({ ...userData, firstName: e.target.value })} />
                </div>
                <div className="form-field">
                    <label className='sm-text' htmlFor="">телефон</label>
                    <input type="text" className="form-input" onChange={e => setUserData({ ...userData, phone: e.target.value })} />
                </div>
                <div className="form-field">
                    <label className='sm-text' htmlFor="">email</label>
                    <input type="text" className="form-input" onChange={e => setUserData({ ...userData, email: e.target.value })} />
                </div>
                <div className="form-field">
                    <label className='sm-text' htmlFor="">пароль</label>
                    <input type="password" className="form-input" onChange={e => setUserData({ ...userData, password: e.target.value })} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button className='prime-btn'
                        onClick={e => {

                            register(e, userData)
                        }}
                    >
                        зарегистрироваться
                    </button>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <span className="extra-sm-text ms-2" onClick={e => setChecked(!checked)}>Я соглашаюсь с <span className="fw-bold" style={{ cursor: 'pointer' }}>Правовой информацией</span></span>
                </div>
                <div className='mt-2'>
                    <p className='sm-text text-center m-0'>уже есть аккаут? <Link className='prime-link' to={'/login'}>Войти</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp