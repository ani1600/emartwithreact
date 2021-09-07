import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="here is the banner"
        />
        <div className="home_row">
          <Product />
          {/* Product */}
        </div>
        <div className="home_row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home_row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
