import {useState} from 'react';

const BookingForm = ( { handleChange, onFormSubmit } ) => {

    const [name, setName] = useState('');
    const [email, setEmail ] = useState('');
    const [checkedIn, setCheckedIn] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleCheckedInChange = (event) => {
        setCheckedIn(event.target.value);
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setCheckedIn('');
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const payload ={
            name,
            email,
            checkedIn
        }
        onFormSubmit(payload);
        resetForm();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleNameChange} />

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={email} onChange={handleEmailChange} />

            <label htmlFor="checkedIn">Checked In?: </label>
            <select name="checkedIn" value={checkedIn} onChange={handleCheckedInChange}>
                <option value="" disabled>Choose...</option>
                <option value="True">Checked In</option>
                <option value="False">Not Checked In</option>
            </select>

            <input type="submit" value="Save" />

        </form>

    )
}

export default BookingForm;