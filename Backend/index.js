const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const orderfrom = require('./models/Orderform')
const app = express();
const PORT = process.env.PORT || 3000;



// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// Connect to MongoDB

/*
mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('MongoDB connection error:', err));
*/

// Routes
const orderRouter = require('./routes/OrderformRoutes');
app.use('/order', orderRouter);

// POST route to send email
app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    // Construct email content
    const content = `
        Order ID: ${req.body.Order_id}
        Customer Name: ${req.body.Customer_name}
        Phone Number: ${req.body.Phone_Number}
        Size: ${req.body.Size}
        Customer Email: ${req.body.Customer_email}
        Colour: ${req.body.Colour}
        Quantity: ${req.body.Quantity}
        Customer Age: ${req.body.Customer_age}
        Customer Gender: ${req.body.Customer_gender}
        Created At: ${req.body.created_at}
        Returning Customer: ${req.body.Returning_Customer ? 'Yes' : 'No'}
    `;

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Configure transporter (e.g., SMTP)
        service: 'gmail',
        auth: {
            user:  'izyreld@gmail.com',
            pass: 'czsx keci ffae xoov'
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: 'izyreld@gmail.com',
        subject: 'Your Subject',
        text: content
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully!' });
        }
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
