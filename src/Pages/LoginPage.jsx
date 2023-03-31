import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import '../App.css';
const LoginPage = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong Credentials');
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }
  return (
    <form action='login' className='login' onSubmit={login}>
      <h1>Login</h1>
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
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
