import React, { useState } from 'react';
import '../App.css';
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://blogs-api-s5vy.onrender.com/register',
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.status === 200) {
      alert('registeration successfull');
    } else {
      alert('registeration failed');
    }
  };

  return (
    <form action='login' className='register' onSubmit={register}>
      <h1>Register</h1>
      <input
        placeholder='username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder='password'
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
