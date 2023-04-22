import React from 'react'
import './Home.css';
import Product from '../Product';

function Home() {
  return (
    <div className='home'>
      <img className=' home-image'
        src = "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/MA3000._CB592961919_.jpg"
        alt = "banner"/>

    <div className='home-row'>
      <Product 
        id = {123456}
        title = "Apple iPhone 14 Pro Max (256 GB) - Space Black"
        price = {25999}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/610pghkO81L._SX679_.jpg"
        />

      <Product 
        id = {173457}
        title = "Noise Vivid Call Bluetooth Calling Smartwatch with Metallic dial"
        price = {800}
        rating = {3}
        image = "https://m.media-amazon.com/images/I/613r4jBBFWL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
        />  

        <Product 
        id = {153426}
        title = "American Tourister 32 Ltrs Black Casual Backpack "
        price = {1890}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/81KEKEDFUcL._SY879_.jpg"
        />
    </div>

    <div className='home-row'>
      <Product 
        id = {122646}
        title = "Fender CD 60 Dread V3 DS 6 String Acoustic Guitar"
        price = {8799}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/61LMsVnXlxL._SX522_.jpg"
        />

      <Product 
        id = {178456}
        title = "Apple AirPods Pro (2nd Generation)"
        price = {2999}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
        />  

        <Product 
        id = {120026}
        title = "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
        price = {10900}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg"
        />
    </div>

    <div className='home-row'>
      <Product 
        id = {124656}
        title = "Samsung 108 cm (43 inches) Wondertainment Series Full HD Smart LED TV UA43TE50FAKXXL (Black-Hair Line)"
        price = {28900}
        rating = {4}
        image = "https://m.media-amazon.com/images/I/71VaWF2QQ4L._SX522_.jpg"
        />

    </div>
    </div>
  )
}

export default Home