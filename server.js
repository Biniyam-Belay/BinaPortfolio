const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept']
}));
app.use(express.json());

// Add a root route
app.get('/', (req, res) => {
    res.json({ message: 'BinaPortfolio Backend API' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: 'All fields are required',
                received: { name, email, subject, message }
            });
        }

        // Save to MongoDB
        try {
            const newContact = new Contact({
                name,
                email,
                subject,
                message
            });
            await newContact.save();
            console.log('Saved to MongoDB');
        } catch (dbError) {
            console.error('MongoDB Error:', dbError);
            return res.status(500).json({
                message: 'Database error',
                error: dbError.message
            });
        }

        // Send Email
        try {
            const mailOptions = {
                from: {
                    name: "Portfolio Contact Form",
                    address: process.env.EMAIL_USER
                },
                to: "yeabubina@gmail.com",
                subject: `New Contact Form Submission: ${subject}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email Error:', emailError);
            // Still return success if email fails but data is saved
            return res.status(200).json({
                message: 'Message saved but email notification failed',
                emailError: emailError.message
            });
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({
            message: 'Server error processing your request',
            error: error.message
        });
    }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

// Error handling
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
});
