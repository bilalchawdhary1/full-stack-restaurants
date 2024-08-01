// import sendReservation from "../controller/sendReservation.js";
import express from "express";
import reservationSchemaa from "../model/reservationSchema.js";

const router = express.Router();
// Define the route for sending reservations
// router.post('/send', sendReservation);
// Route to handle POST requests for creating a reservation
router.post('/send', async (req, res) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone) {
        return res.status(400).send('All fields are required');
    }

    try {
        await reservationSchemaa.create({ firstName, lastName, email, date, time, phone });
        res.status(200).send('Reservation created successfully');
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).send('Internal server error');
    }
});
export default router;
