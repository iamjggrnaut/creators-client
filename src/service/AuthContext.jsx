import { createContext, useState, useEffect } from "react";
import { URL } from "./config";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({ children }) => {

    const [authToken, setAuthToken] = useState()
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const login = async (email, password, setError, setShow) => {
        if (!password || !email) {
            setError('Введите корректное значение для всех полей')
        }
        const response = await fetch(URL + '/user/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        const data = await response.json()
        if (response.status !== 200) {
            setError(data.message)
            setShow(true)
        }
        if (response.status === 200) {
            setAuthToken(data)
            setUser(jwtDecode(data?.token))
            localStorage.setItem('authToken', data?.token)
            navigate('/account')
        }
    }

    const target = localStorage.getItem('authToken')
    useEffect(() => {
        if (target) {
            setAuthToken(target)
            setUser(jwtDecode(target))
        }
    }, [target])

    const register = async (e, object) => {
        if (!object || (!object?.email || !object?.phone || !object?.firstName || !object?.lastName || !object?.password)) {
            e.preventDefault()
        }
        const res = await fetch(`${URL}/user/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(object)
        })
        const data = await res.json()
        if (res.status === 200) {
            setAuthToken(data)
            setUser(jwtDecode(data?.token))
            localStorage.setItem('authToken', data?.token)
            navigate('/account')
        }
        return data
    }


    const logout = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        localStorage.removeItem('dashboard')
    }


    const contextData = {
        login: login,
        logout: logout,
        user: user,
        authToken: authToken,
        register,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
