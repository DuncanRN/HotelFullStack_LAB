const baseURL = 'http://localhost:9000/api/bookings/'

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

