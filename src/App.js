import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HoXg1FCVdWTE2NY6JWDK6GZQvRYRWLeuNJi1KvAXpim1ug7m0NYYXycZN9DnTkqJacnZM7Jogq1TnuPwEwzjjQC00le10g9QK');

function App() {
  const [,dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />  
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />  
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;