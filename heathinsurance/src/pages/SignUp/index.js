// Import your styles and image
import './Signup.module.scss';
import React, { useState } from 'react';
import bgImg from '../../assets/image/img1.jpg';
import { SignupApi } from '../../services/ApiSignUp/signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');
    const [identifycationNumber, setIdentifycationNumber] = useState('');

    const handleClick = async () => {
        try {
            //Validate userName
            if (!userName) {
                toast.error('User Name is required');
                return;
            }

            //Validate email
            if (!email || !email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                toast.error('Please enter a valid email address');
                return;
            }

            // Validate password
            if (!password) {
                toast.error('Password is required');
                return;
            }

            // Validate name
            if (!name) {
                toast.error('Name is required');
                return;
            }

            // Validate phoneNumber
            if (!phoneNumber) {
                toast.error('Phone number is required');
                return;
            }

            // Validate birthday
            if (!birthday) {
                toast.error('Birthday is required');
                return;
            }

            // Validate address
            if (!address) {
                toast.error('Address is required');
                return;
            }

            // Validate identificationNumber
            if (!identifycationNumber) {
                toast.error('Identification number is required');
                return;
            }

            // Assigning roles and additional user data
            const fullBirthday = birthday + 'T04:53:59.325Z';
            const roles = ['Customer'];

            const response = await SignupApi(
                userName,
                password,
                email,
                roles,
                name,
                identifycationNumber,
                fullBirthday,
                phoneNumber,
                address,
            );
            if (response.response && response.response.status === 'Success') {
                await toast.success(response.response.message + '. Please confirm your email to login!');
                navigate('/login');
            } else {
                if (response && response.status) {
                    toast.error(response.data.message);
                }
                console.log('Empty response:', response);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="login-form">
            <div className="register">
                <div className="col-1">
                    <h2>Sign Up</h2>
                    <span>Create a new account!</span>

                    <form id="form" className="flex flex-col">
                        <input
                            type="text"
                            id="userName"
                            name="email"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your UserName"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                        />
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            placeholder="Enter your birthday"
                        />
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your address"
                        />
                        <input
                            type="text"
                            id="identifycationNumber"
                            name="identifycationNumber"
                            value={identifycationNumber}
                            onChange={(e) => setIdentifycationNumber(e.target.value)}
                            placeholder="Enter your identification number"
                        />
                        <button type="button" className="btn" onClick={handleClick}>
                            Sign Up
                        </button>
                        <ToastContainer />
                        <span className="underline" />
                        <p>
                            Already have an account?{' '}
                            <a href="/login" className="login-link">
                                Log In
                            </a>
                        </p>
                    </form>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Register;
