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
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection with error handling
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1);
    }
};

connectDB();

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
let transporter;
try {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Verify email configuration
    transporter.verify((error, success) => {
        if (error) {
            console.error('Email verification error:', error);
        } else {
            console.log('Email server is ready');
        }
    });
} catch (error) {
    console.error('Email transport creation error:', error);
}

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        console.log('Received contact form submission:', req.body);
        const { name, email, subject, message } = req.body;

        // Save to MongoDB
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });
        await newContact.save();
        console.log('Saved to MongoDB');

        // Send Email
        if (transporter) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
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
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({
            message: 'Error sending message',
            error: error.message
        });
    }
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    process.exit(1);
});
