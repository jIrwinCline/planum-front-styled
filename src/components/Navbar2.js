import React, { Component } from 'react'


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
              <li id="nav-item">
                <a
                  href="https://radhippie.com/t/httpradhippiecomttops"
                  id="A_16"
                >
                  Paintings
                </a>
              </li>
              <li id="nav-item">
                <a href="https://radhippie.com/t/band-products" id="A_18">
                  Jewels
                </a>
              </li>
              <li id="nav-item">
                <a href="https://radhippie.com/t/accessories" id="A_20">
                  Cleansing
                </a>
              </li>
              <li id="nav-item">
                <a href="https://radhippie.com/t/backpacks" id="A_22">
                  Retreats
                </a>
              </li>
              <li id="nav-item tarot">
                <a
                  href="https://radhippie.com/t/tapestries-groovy-stuff"
                  id="A_24"
                >
                  Tarot Readings
                </a>
              </li>
            </ul>
          </div>
        );
    }
}
