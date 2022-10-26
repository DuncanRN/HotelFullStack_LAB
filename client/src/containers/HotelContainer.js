import { useEffect, useState } from 'react'
import BookingsList from '../components/BookingsList';
import BookingForm from '../components/BookingForm'

const HotelContainer  = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    })

    const fetchBookings = () => {
        fetch('http://localhost:9000/api/bookings')
        .then(response => response.json())
        .then(bookings => setBookings(bookings))
    }

    const handleBookingSubmit = newBooking => {
        fetch('http://localhost:9000/api/bookings', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => fetchBookings())
    }


    // const removeBooking = (id) => {
    //     const temp = bookings.map(booking => booking);;
    //     const indexToDel = temp.map(booking => booking._id).indexOf(id);
    //     // console.log(indexToDel);

    //     temp.splice(indexToDel, 1);
    //     setBookings(temp);
    // }


    return (
        <>
            

            <BookingForm
                onFormSubmit={handleBookingSubmit}
            />

            <BookingsList bookings={bookings}  />

            {/* removeBooking={removeBooking} */}
        
        </>
    )
}

export default HotelContainer

