import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Signup.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username,
                email,
                password,
                
            });

            if (response.status === 201) {
                alert('User created successfully');
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/login');
            } else {
                alert('Failed to create user');
            }
        } catch (error) {
            alert('Error: Signup failed');
            console.log(error);
        }
    };

    return (
        <div className='reg-mainpage'>
            <center>
                <form onSubmit={handleSubmit} className='regform'>
                    <h2>SIGN UP</h2>
                    <div>
                        <label>Username:</label><br />
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <br />
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
                    <div>
                        <label>Confirm Password:</label><br />
                        <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <br /><br />
                    <button type='submit'>Sign up</button>
                    <p>or</p>
                    <button type='button' onClick={handleclick}>Login</button>
                </form>
            </center>
        </div>
    );
};

export default Register;
