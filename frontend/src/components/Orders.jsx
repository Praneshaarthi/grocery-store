import React, { useState } from 'react';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/orders', {
                name,
                email,
                productName,
                quantity,
                address
            });

            if (response.status === 201) {
                alert('Order placed successfully');
                setName('');
                setEmail('');
                setProductName('');
                setQuantity(1);
                setAddress('');
            } else {
                alert('Failed to place order');
            }
        } catch (error) {
            alert('Error: Order submission failed');
            console.log(error);
        }
    };

    return (
        <div className='order'>
            <center>
                <form onSubmit={handleSubmit} className='order'>
                    <h2>ORDER HERE</h2>
                    <label>Name:</label><br />
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required /><br />
                    <label>Email:</label><br />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                    <label>Product Name:</label><br />
                    <input type='text' value={productName} onChange={(e) => setProductName(e.target.value)} required /><br />
                    <label>Quantity:</label><br />
                    <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} required min="1" /><br />
                    <label>Address:</label><br />
                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} required /><br /><br />
                    <button type='submit'>Order</button>
                </form>
            </center>
        </div>
    );
};

export default Orders;
