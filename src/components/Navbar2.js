import React, { Component } from 'react'
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
              <Link
                to={{
                  pathname: "/products",
                  state: {
                    pageCategory: "jewelry"
                  }
                }}
              >
                <li id="nav-item">Jewels</li>
              </Link>
              <Link
                to={{
                  pathname: "/products",
                  state: {
                    pageCategory: "cleansing"
                  }
                }}
              >
                <li id="nav-item">Cleansing</li>
              </Link>
              <Link to="/retreats">
                <li id="nav-item">Retreats</li>
              </Link>
              <Link to="/tarot">
                <li id="nav-item">Tarot Readings</li>
              </Link>
            </ul>
          </div>
        );
    }
}
