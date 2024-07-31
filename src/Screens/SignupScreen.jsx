import React, { useState } from 'react';
import '../Screens/login.css';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'false');
    window.location.href = '/login';
  };

  return (
    <div className="wrapper">
      <form action="" className="form" onSubmit={handleSignup}>
        <h1 className="title">SIGN UP</h1>
        <div className="inp">
          <input
            type="text"
            className="input"
            placeholder="full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <FaUser />
        </div>
        <div className="inp">
          <input
            type="text"
            className="input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MdEmail />
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
        <button type="submit" className="submit">Signup Here</button>
        <p className="footer">Already have an account <Link to="/login" className="link">Login</Link></p>
      </form>
      <div className="banner">
        <h1 className="wel_text">Welcome!</h1><br />
        <p className="para">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default SignupScreen;
