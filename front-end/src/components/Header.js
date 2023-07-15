import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <header class="hamburger">
      <div class="hamburger-container nav-hamburger-container">
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="ham-logo">
          <div class="inner_header_wrp">
            <div class="inner_header_inner">
              <div class="user_accoun">
                <div class="cm_drop-down_wrapper">
                  <div class="drop-down">
                    <div id="dropDown" class="drop-down__button">
                      <img
                        src="/assets/imgs/profile.png"
                        class="drop-down__icon"
                        alt="profile"
                      />

                      <div class="drop-down__menu-box">
                        <ul class="drop-down__menu">
                          <li data-name="profile" class="drop-down__item">
                            Your Profile
                          </li>
                          <li data-name="activity" class="drop-down__item">
                            Logout
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-items">

          <li><a class="mob-option" href="index.html">Home</a></li>
          <li><a class="mob-option" href="catalog.html">Catalog</a></li>
          <li><a class="mob-option" href="sell.html">Sell</a></li>
          <li><a class="mob-option" href="reapir.html">Repairs</a></li>
          <li><a class="mob-option" href="contact.html">Contact Us</a></li>
        </div>
      </div>
    </header>

    <header class="normal-nav">
      <img class="logo" src="/assets/imgs/logo.png" alt="" />

      <div class="nav-items">
        <ul>
            
        <li> <Link to="/">Home</Link>  </li>
          <li> <Link to="/catalog">Catalog</Link>  </li>
          <li> <Link to="/repair">Repair</Link>  </li>
          <li> <Link to="/sell">Sell</Link>  </li>
          <li> <Link to="/contact">Contact</Link>  </li>
        </ul>
      </div>

      <div class="right-nav">
        <div class="search-box">
          <img
            src="/assets/imgs/search.png"
            alt="search button"
            id="search-button"
          />
          <input
            type="text"
            id="nav-search"
            placeholder="Search for products"
          />
        </div>

        <div class="profile-icons">
          <img src="/assets/imgs/heart.png" alt="favorites" />
          <div class="inner_header_wrp">
            <div class="inner_header_inner">
              <div class="user_accoun">
                <div class="cm_drop-down_wrapper">
                  <div class="drop-down">
                    <div id="dropDown" class="drop-down__button">
                      <img
                        src="/assets/imgs/profile.png"
                        class="drop-down__icon"
                        alt="profile"
                      />

                      <div class="drop-down__menu-box">
                        <ul class="drop-down__menu">
                          <li data-name="profile" class="drop-down__item">
                            Your Profile

                           
                          </li>
                          <li data-name="activity" class="drop-down__item">
                            Logout
                           
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/imgs/bag.png" alt="cart" />
        </div>
      </div>
    </header>
   </>
  )
}

export default Header
