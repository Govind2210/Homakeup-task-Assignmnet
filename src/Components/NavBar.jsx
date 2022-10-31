import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="header-Container" id="header-Container">
        <div className="gmb">
          <div>Up to 50% off Selection Item * Exclusion Apply*</div>
        </div>
        <div className="usd">
          <div>Free 60 Days Retrun</div>
        </div>
        <div className="beautybay-header">
          <div className="mobile-header">
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                  Beauty Bay
                </a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Cart
                      </a>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="desktop-header">
            <nav>
                <ul className="desktop-header__menu">
                    <li className="headerLink">Offers</li>
                    <li className="headerLink">Christmas</li>
                    <li className="headerLink">Trending</li>
                    <li className="headerLink">Brand</li>
                    <li className="headerLink">Makeup</li>
                    <li className="headerLink">Skin Care</li>
                    <li className="headerLink">Health Care</li>
                    <li className="headerLink">Bath & Body</li>
                    <li className="headerLink">Wellness</li>
                    <li className="headerLink">Accessories</li>
                    <li className="headerLink">Gifting</li>
                </ul>
            </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
