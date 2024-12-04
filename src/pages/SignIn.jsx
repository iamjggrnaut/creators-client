import React, { useContext, useState } from 'react'
import '../styles/signin.css'
import { Link } from 'react-router-dom'
import LiWhite from '../assets/LiWhite'
import AuthContext from '../service/AuthContext'

const SignIn = () => {

    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState()
    const [show, setShow] = useState(false)

    const handleSubmit = (e, email, password) => {
        if (!email || !password) {
            e.preventDefault()
            alert('Введите логин и пароль')
        }
        else {
            login(email, pass, setError, setShow)
        }
    }

    return (
        <div className='sign-page'>
            <div className="sign-container container">

                <div className="login-form col-4">
                    <h3 className="text-center fw-bold mb-3">Вход</h3>
                    <div className="form-field">
                        <label className='sm-text' htmlFor="">email</label>
                        <input type="text" className="form-input" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-field mt-3">
                        <label className='sm-text' htmlFor="">пароль</label>
                        <input type="password" className="form-input" onChange={e => setPass(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <button className='prime-btn'
                            onClick={e => handleSubmit(e, email, pass)}
                        >
                            войти
                        </button>
                    </div>
                    <div className='mt-3'>
                        <p className='sm-text text-center'>еще нет аккаунта? <br /> <Link className='prime-link' to={'/sign'}>Создать аккаунт</Link></p>
                    </div>
                </div>

                <div className="col-7 signin-right">
                    <h6 className="title" style={{ fontSize: '72px' }}>
                        Creators. <br />Moscow
                    </h6>
                    <div className='mt-4'>
                        <div className='list-block'>
                            <LiWhite />
                            <span>фиксированные цены</span>
                        </div>
                        <div className='list-block'>
                            <LiWhite />
                            <span>продакшн под ключ</span>
                        </div>
                        <div className='list-block'>
                            <LiWhite />
                            <span>кураторы на съемки</span>
                        </div>
                        <div className='list-block'>
                            <LiWhite />
                            <span>ведущие</span>
                        </div>
                        <div className='list-block'>
                            <LiWhite />
                            <span>и многое другое</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn