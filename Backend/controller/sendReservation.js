
import ErrorHandler from "../error/error.js";
import reservationSchemaa from "../model/reservationSchema.js";
// import Reservation from "../model/reservationSchema.js"; // Assuming Reservation is a Mongoose model



const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await reservationSchemaa.create({ firstName, lastName, email, date, time, phone });
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default sendReservation;