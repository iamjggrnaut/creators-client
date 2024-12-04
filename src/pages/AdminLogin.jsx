import React from 'react'
import '../styles/admin.css'

const AdminLogin = () => {

    return (
        <div className='container admin-sign-page'>
            <div className="login-form col-4">
                <h3 className="text-center fw-bold mb-3">админ</h3>
                <div className="form-field">
                    <label className='sm-text' htmlFor="">логин</label>
                    <input type="text" className="form-input" />
                </div>
                <div className="form-field mt-3">
                    <label className='sm-text' htmlFor="">пароль</label>
                    <input type="password" className="form-input" />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button className='prime-btn'>
                        войти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin