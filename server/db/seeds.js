use hotel;
db.dropDatabase();
db.bookings.insertMany([
    {
        name: "Janet Weiss",
        email: "janet@sleater-kinney.com",
        checkedIn: "True"
    },
    {
        name: "Stephen Malkmus",
        type: "dronecoma@pavement.com",
        checkedIn: "False"
    }
])