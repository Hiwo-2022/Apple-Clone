import React from 'react'
import log from '../../Components/images/icons/logo.png'
import search from '../../Components/images/icons/search-icon.png'
import cart from '../../Components/images/icons/cart.png'

 function Header() {
  return (
    <div>
      
        <header className="header-wrapper">
            <div className="internal-wrapper">
              <ul>
                <li className="log-link">
                    <a href="#">
                        <img src= {log} />
                    </a>
                </li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iphone</a></li>
                <li><a href="#">ipad</a></li>
                <li><a href="#">watch</a></li>
                <li><a href="#">tv</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Support</a></li>
                <li className="search-link">
                    <a href="#">
                        <img src= {search} />
                    </a>
                </li>
                <li className="cart-link">
                    <a href="#">
                        <img src= {cart}  />
                    </a>
                </li>
              </ul>
            </div>
        </header>


    </div>
  )
}

export default Header;