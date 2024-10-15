import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/signup');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });

            if (response.status === 200) {
                alert('Login successful');
                navigate('/'); // Redirect to homepage
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            alert('Error: Login failed');
            console.log(error);
        }
    };

    return (
        <div className='logmain'>
            <center>
                <form onSubmit={handleSubmit} className='logform'>
                    <h2>LOGIN</h2>
                    <div>
                        <label>Email:</label><br />
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <br />
                    <div>
                        <label>Password:</label><br />
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <br />
                    <button type='submit'>Login</button>
                    <p>or</p>
                    <button type='button' onClick={handleclick}>Signup</button>
                </form>
            </center>
        </div>
    );
};

export default Login;
