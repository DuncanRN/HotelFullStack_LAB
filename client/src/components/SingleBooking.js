import { deleteBooking } from "./BookingService"


const SingleBooking = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }

    return (
        <>
            <h1>{booking.name}</h1>
                <p>Email: {booking.email}</p>
                <p>Checked In?: {booking.checkedIn}</p>
                <button onClick={handleDelete}> 🗑 </button>
                <hr></hr>
        
        </>
    )
}

export default SingleBooking;

// const SightingCard = ({sighting, removeSighting}) => {

//     console.log(sighting);
//     const handleDelete = () => {
//         deleteSighting(sighting._id).then(()=>{
//             removeSighting(sighting._id);
//         })
//     }
//     return (
//         <>
//             <h1>{sighting.species}</h1>
//             <p>Location: {sighting.location}</p>
//             <p>Date: {sighting.date}</p>
//             <button onClick={handleDelete}> 🗑 </button>
//             <hr></hr>
//         </>
//     )
// }

// export default SightingCard;