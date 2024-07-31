import React, { useState } from 'react';
import '../Screens/login.css';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="wrapper">
      <form action="" className="form" onSubmit={handleLogin}>
        <h1 className="title">LOGIN</h1>
        <div className="inp">
          <input
            type="text"
            className="input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser />
        </div>
        <div className="inp">
          <input
            type="password"
            className="input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IoIosLock />
        </div>
        <button type="submit" className="submit">Login Here</button>
        <p className="footer">Don't have an account? <Link to="/" className="link">Signup</Link></p>
      </form>
      <div className="banner">
        <h1 className="wel_text">Welcome!</h1><br />
        <p className="para">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default LoginScreen;
