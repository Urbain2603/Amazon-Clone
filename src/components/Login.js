import React, { useState } from 'react';
import './Login.css';
import {Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth){
          history.push('/')
        }
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          className='login__logo'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button 
            className='login__signInButton'
            type='submit'
            onClick={signIn}
          >Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon Clone's 
          Conditions of Use & Sale. Please 
          see our Privacy Notice, our Cookies Notice 
          and our Interest Based Ads.
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login;
