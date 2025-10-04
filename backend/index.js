// create an express server and listen on port 5000
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';

// connect to mongodb
// try {
//     mongoose.connect('mongodb://localhost:27017/loginsignup')
//     console.log("Success: Connected to mongodb");
// } catch (err) {
//     console.log("Error in connecting to mongodb", err);
// }
mongoose.connect('mongodb://127.0.0.1:27017/loginsignup')
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("❌ MongoDB connection error:", err));


const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});