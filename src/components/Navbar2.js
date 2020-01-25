import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar2 extends Component {
  render() {
    return (
      <div /*class="collapse navbar-collapse"*/ id="product-navbar">
        <ul className="product-nav-ul">
          {/* <li id="LI_13">
                <a href="/" id="A_14">
                  Home
                </a>
              </li> */}
          <Link
            to={{
              pathname: "/products",
              state: {
                pageCategory: "painting"
              }
            }}
          >
            <li id="nav-item">Paintings</li>
          </Link>
          {/* <Link
            to={{
              pathname: "/products",
              state: {
                pageCategory: "painting",
                highEnd: true
              }
            }}
          >
            <li id="nav-item">High-End Art</li>
          </Link> */}
          {/* <Link
                to={{
                  pathname: "/products",
                  state: {
                    pageCategory: "jewelery"
                  }
                }}
              >
                <li id="nav-item">Jewelery</li>
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  state: {
                    pageCategory: "crystal"
                  }
                }}
              >
                <li id="nav-item">Crystals</li>
              </Link> */}
          <Link to="/retreats">
            <li id="nav-item">Retreats</li>
          </Link>
          {/* <Link to="/tarot">
                <li id="nav-item">Tarot Readings</li>
              </Link> */}
        </ul>
      </div>
    );
  }
}
