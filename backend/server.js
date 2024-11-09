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
    origin: [
        'http://localhost:5173',
        'https://binaportfolio.netlify.app',
        'https://binaportfolio-backend.onrender.com'
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept']
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

        // Validate request body
        if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const { name, email, subject, message } = req.body;

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
            if (!transporter) {
                throw new Error('Email transporter not initialized');
            }

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
        } catch (emailError) {
            console.error('Email Error:', emailError);
            // Don't return here, as we still saved to database
            // Just log the email error
        }

        res.status(200).json({
            message: 'Message received and saved successfully!',
            emailSent: true
        });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({
            message: 'Server error processing your request',
            error: error.message
        });
    }
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Add a test route
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Server is working' });
});

// Add a root route
app.get('/', (req, res) => {
    res.json({ message: 'BinaPortfolio Backend API' });
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
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
