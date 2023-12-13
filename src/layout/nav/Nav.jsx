import "./Nav.scss"
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaShoppingCart, FaHeart, FaRegUser, FaSearch  } from "react-icons/fa";

import NavLogo from "../../assets/images/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { loadCurrency } from "../../redux/actions/currency-action";
import { Container } from "../../utils/Utils";

const Nav = (props) => {

  // For Currency
  const [getCurrency, setGetCurrency] = useState('')
  console.log(getCurrency);


  const { currency_data } = useSelector(state => state.currency)

  useEffect(() => {
    props.loadCurrency(getCurrency)
  }, [getCurrency])
  return (
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
            <div className="register-user">
              <i><FaRegUser/></i>
              <Link className="user-link">Cabinet</Link>
            </div>
          </div>
          </div>
    </nav>
  )
}

export default connect(null, { loadCurrency })(Nav)
{/* <div className="nav__menu-container">
  <ul className="nav__menu">
    <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>Products</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>About</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>Contact </NavLink></li>
  </ul>
</div> */}