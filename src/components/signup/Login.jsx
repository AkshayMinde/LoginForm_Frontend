import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

import AuthForm from '../Auth';


const UserLogin = () => {
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('https://loginform-6c2n.onrender.com/login', { email, password });
      console.log('Login successful:', response.data.token);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="row">
			<div className="col-lg-6 mx-auto">
        <div>
          <h2>Login</h2>
          <AuthForm buttonText="Login" onSubmit={handleLogin} />
          <Button variant="info" className='my-3'>
            <Link to='/register'>Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;