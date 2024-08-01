
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection} from './database/dbConnection.js';
import  {errorMiddleware}  from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
import bodyParser from 'body-parser';

// Load environment variables
dotenv.config({ path: './config/.env' });
const app = express();

// Ensure FRONTEND_URL and other essential environment variables are defined
if (!process.env.MONGO_URI) {
  console.error('ERROR: Missing essential environment variables.');
  process.exit(1);
}

app.post('/post', cors(), (req, res) => {
  
});
// Setup CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route for reservation
app.use('/api', reservationRouter);

// Initialize database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
