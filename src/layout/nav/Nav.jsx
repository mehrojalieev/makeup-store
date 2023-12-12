import "./Nav.scss"
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaShoppingCart, FaHeart, FaRegUser, FaStar } from "react-icons/fa";

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
      <Container>
        <div className="sale-card">
          <h3>EXTRA 15% OFF CLICK HERE</h3>
        </div>
          <div className="nav__wrapper">
          <Link className="nav__logo" to={"/"}>
            <img width={100} height={90} src="https://img.myloview.com/posters/fashion-beauty-cosmetics-logo-banner-with-makeup-artist-beauty-set-for-make-up-red-lipstick-eyeshadow-makeup-brush-vector-hand-drawn-illustration-with-inscription-beauty-on-a-red-ink-grunge-smear-400-106863248.jpg" alt="" />
          </Link>
          <div className="nav__menu-container">
            <ul className="nav__menu">
              <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>Home</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>Products</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>About</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"}>Contact </NavLink></li>
            </ul>
          </div>

          <div className="nav-action">
            <div className="register-user">
              <i><FaRegUser/></i>
              <Link className="user-link">Cabinet</Link>
            </div>
          </div>
          </div>
      </Container>
    </nav>
  )
}

export default connect(null, { loadCurrency })(Nav)