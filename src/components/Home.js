import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjdjYjFkMTYt/YjdjYjFkMTYt-Y2Y4NWRjZGEt-w1500._CB417228553_.jpg' alt='amazon banner' />
      
        <div className='home__row'>
          <Product id='2346578'
                  title='iPhone 8 Plus Wallet Phone Case, iPhone 7 Plus Case, XRPow Slim PU Leather Back Protective Case Cover With Credit Card Holder'
                  img='https://images-na.ssl-images-amazon.com/images/I/71%2BeAQvsEmL._AC_UY550_.jpg'
                  price= {13.99}
                  rating= {4}
          />
          <Product id='4903850'
                  title='Ray-Ban Unisex-Adult Rb3025 Classic Sunglasses'
                  img='https://images-na.ssl-images-amazon.com/images/I/51iqZGNiMKL._AC_UX679_.jpg'
                  price= {153.99}
                  rating= {5}
          />
        </div>

        <div className='home__row'>
          <Product id='4903850'
                  title='Philips Premium Digital Airfryer with Fat Removal Technology + Recipe Cookbook, 3 qt, Black, HD9741/99'
                  img='https://images-na.ssl-images-amazon.com/images/I/61il-Zpza8L._AC_SX679_.jpg'
                  price= {219.95}
                  rating= {4}
          />

          <Product id='4903850'
                  title='Samsung Galaxy Tab S6- 10.5" 256GB, Wifi Tablet- SM-T860NZALXAR, Mountain Gray'
                  img='https://images-na.ssl-images-amazon.com/images/I/71v8Md%2BkzjL._AC_SX679_.jpg'
                  price= {529.99}
                  rating= {4}
          />

          <Product id='4903850'
                  title='Samsung curved 49" LED Gaming Monitor Brand New Gagdet'
                  img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                  price= {19.99}
                  rating= {4}
          />
        </div>

        <div className='home__row'>
          <Product id='4903850'
                  title='Sony X750H 65-inch 4K Ultra HD LED TV -2020 Model - Brand New with 2 Years Warranty'
                  img='https://images-na.ssl-images-amazon.com/images/I/61qVVtdXJ1L._AC_SX522_.jpg'
                  price= {599.99}
                  rating= {5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
