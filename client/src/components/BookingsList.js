const BookingsList = ({bookings, removeBooking}) => {


    // const deleteBooking = (id) => {
    //     return fetch('http://localhost:9000/api/bookings/' + id, {
    //         method: 'DELETE'
    //     })
    // }

    // const handleDeleteClick = (booking) => {
    //     deleteBooking(booking._id).then(()=>{
    //         removeBooking(booking._id);
    //     })
    // }
    // OK NEED TO CREATE A SINGLE BOOKING COMPONENT AND PUT THESE TWO methods in there
    // that way they have the single vbooking to delete from teh API and can run the method that is passed down 
    // delete this booking from STATE!!!


    return (
        <div id="bookings-list">
            <h2>All Bookings</h2>
            <ul>
                {bookings.map(booking => {
                    return(
                        <li key={booking.id }> 
                            {booking.name} {booking.email} {booking.checkedIn} 
                            <button >X</button>
                            {/* onClick={handleDeleteClick} */}
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default BookingsList;


