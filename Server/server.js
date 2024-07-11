import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import borrowerRoutes from './routes/borrowerRoutes.js';
import loanRoutes from './routes/loanRoutes.js';

dotenv.config();

const app = express();

// db
connectDB();

// mw
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', userRoutes);
app.use('/api/borrowers', borrowerRoutes);
app.use('/api/loans', loanRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
