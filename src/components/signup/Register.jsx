import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import AuthForm from '../Auth';

const Register = () => {
  	const handleRegister = async (email, password) => {
		try {
		const response = await axios.post('http://localhost:3001/register', { email, password });
		console.log('Registration successful:', response.data.token);
		} catch (error) {
		console.error('Registration error:', error);
		}
  	};

  return (
    <div className="row">
			<div className="col-lg-6 mx-auto">
        <div>
          <h2>Register</h2>
          <AuthForm buttonText="Register" onSubmit={handleRegister} />
          <Button variant="info" className='my-3'>
            <Link to='/'>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
};


export default Register;