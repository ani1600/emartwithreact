import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png"
          alt="here is the banner"
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={150}
            image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Echo Dot (4th Gen, Blue) with clock + Wipro 9W LED smart color Bulb - Works with Alexa - Smart Home starter kit"
            rating={4}
            price={4199}
            image="https://m.media-amazon.com/images/I/61PVYSa1OfL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903859"
            title="Inalsa Stand Mixer Kratos-1000W | 100% Pure Copper Motor| 5L SS Bowl| 8 Speed Control| Tilt Head| Includes Whisking Cone, Mixing Beater & Dough Hook| 2 Years Warranty, (Champagne)"
            rating={4}
            price={7950}
            image="https://m.media-amazon.com/images/I/61oscgd0KXL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="383478874"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 512GB SSD, 2.0GHz Quad-core 10th-Generation Intel Core i5 Processor, Four Thunderbolt 3 Ports) - Silver"
            rating={4}
            price={160990}
            image="https://m.media-amazon.com/images/I/716R-UhEB+L._AC_UL480_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="M MEDLER Epoch Nylon 55 litres Waterproof Strolley Duffle Bag- 2 Wheels - Luggage Bag - (Navy Blue)"
            rating={3}
            price={640}
            image="https://images-eu.ssl-images-amazon.com/images/I/71tzEgzCFcL._AC_UL450_SR450,320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="9988776633"
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
            price={85990}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
