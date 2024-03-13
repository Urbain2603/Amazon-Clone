import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './Axios';

function Payment() {

  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();

  }, [basket])

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replaceState('/orders')
    })
  }

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : 'Guest'}</p>
            <p>Shangwe Street, House No. 295</p>
            <p>Dar es salaam, Tanzania</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                id = {item.id}
                img = {item.img}
                title = {item.title}
                price = {item.price}
                rating = {item.rating}
              />
            ))
            }
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Order Total: <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={ processing || disabled || succeeded }>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
        

      </div>
      
    </div>
  )
}

export default Payment;
