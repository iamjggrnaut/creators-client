import { URL } from "./config"

export const ServiceFunctions = {

    // BOOKINGS
    getUserBookings: async (userId, token) => {
        const res = await fetch(`${URL}/booking/${userId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            }
        })
        const data = await res.json()
        return data
    },
    getAdminUserBookings: async (userId, token) => {
        const res = await fetch(`${URL}/booking/admin/${userId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            }
        })
        const data = await res.json()
        return data
    },
    getPartnerUserBookings: async (userId, token) => {
        const res = await fetch(`${URL}/booking/partner/${userId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            }
        })
        const data = await res.json()
        return data
    },

    getRoomBookings: async (roomId) => {
        const res = await fetch(`${URL}/booking/room/${roomId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        return data
    },

    getRoomBookingsExtended: async (token) => {
        const res = await fetch(`${URL}/booking/extended`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token

            }
        })
        const data = await res.json()
        return data
    },


    createBooking: async (e, token, obj, email, userId) => {
        if (!obj || !obj.length) {
            e.preventDefault()
        }
        const res = await fetch(`${URL}/booking/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ bookings: obj, email: email, userId: userId })
        })
        const data = await res.json()
        return data
    },

    createFastBooking: async (e, obj, userData) => {
        if (!obj || !obj.length) {
            e.preventDefault()
        }
        const res = await fetch(`${URL}/booking/fast/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ bookings: obj, userData: userData, email: userData?.email })
        })
        const data = await res.json()
        return data
    },


    // ROOMS
    getRooms: async () => {
        const res = await fetch(`${URL}/room`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        return data
    },


    // MANAGE users
    getAllUsers: async (token) => {
        const res = await fetch(`${URL}/admin/secure/all-users`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            }
        })
        const data = await res.json()
        return data
    },

    getUser: async (id, token) => {
        const res = await fetch(`${URL}/admin/secure/get-user/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            }
        })
        const data = await res.json()
        return data
    },

    updateUser: async (id, object, token) => {
        const res = await fetch(`${URL}/admin/secure/update-user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify(object)
        })
        const data = await res.json()
        return data
    },

}