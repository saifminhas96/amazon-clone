import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="12"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="123"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Fxu2M-oWL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234"
            title=" Apple Watch Series 5 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={399.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71isIVzDEtL._AC_SL1500_.jpg"
          />
          <Product
            id="1235"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
          />

          <Product
            id="123456"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            price={589.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567"
            title=" Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={299.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
