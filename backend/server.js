const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Models
const User = require('./models/User');
const Order = require('./models/Order');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// User Registration
app.post('/api/users/register', async (req, res) => {
    const { username, email, password, isadmin } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            username,
            email,
            password: hashedPassword,
            isAdmin: isadmin
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// User Login
app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User does not exist' });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        // Sign a JWT
        const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, 'your_secret_key', { expiresIn: '1h' });
        res.status(200).json({ token, isAdmin: user.isAdmin });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Order
app.post('/api/orders', async (req, res) => {
    const { name, email, productName, quantity, address } = req.body;

    try {
        const order = new Order({
            name,
            email,
            productName,
            quantity,
            address
        });

        await order.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
