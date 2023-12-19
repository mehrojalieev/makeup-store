import "./Nav.scss"
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaShoppingCart, FaHeart, FaRegUser, FaSearch  } from "react-icons/fa";

import NavLogo from "../../assets/images/logo.svg"
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { loadCurrency } from "../../redux/actions/currency-action";
import { Container } from "../../utils/Utils";

const Nav = (props) => {

  const {pathname} = useLocation()

  // For Currency
  const [getCurrency, setGetCurrency] = useState('')
  console.log(getCurrency);


  const { currency_data } = useSelector(state => state.currency)

  useEffect(() => {
    props.loadCurrency(getCurrency)
  }, [getCurrency])
  return pathname.includes("/signup") || pathname.includes("/login") ? null : (
    <nav>
        <div className="sale-card">
          <h3>EXTRA 15% OFF CLICK HERE</h3>
        </div>
    

          <div className="nav__wrapper">
          <div className="nav__logo" >
          <h1>Fragance</h1>
          </div>

            <form  className="nav-form" action="">
              <input type="text" placeholder="Search" />
              <button><FaSearch /></button>
            </form>

          <div className="nav-action">
              <Link className="user-link" to="signup">Sign In</Link>
              <Link>Help</Link>
              <select>
                <option value="usd">USD</option>
                <option value="rubl">RUBL</option>
                <option value="uzs">UZS</option>
              </select>
              <Link className="nav-cart">
              <i><FiShoppingCart/></i>
                <p>Cart</p>
              </Link>
          </div>
          </div>
    </nav>
  )
}

export default connect(null, { loadCurrency })(Nav)
