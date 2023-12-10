import "./Nav.scss"
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaShoppingCart, FaHeart, FaRegUser, FaStar  } from "react-icons/fa";

import NavLogo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { loadCurrency } from "../../redux/actions/currency-action";

const Nav = (props) => {

const [getCurrency, setGetCurrency] = useState('')
console.log(getCurrency);


const {currency_data} = useSelector(state => state.currency)

useEffect(() => {
  props.loadCurrency(getCurrency)
}, [getCurrency])
// export {setGetCurrency}
  return (
    <>
    <div className="nav-header">
      <h4>Free shipping!</h4>
      <ul className="nav__header-menu">
        <li>Stock.</li>
        <li>Delivery and Payment.</li>
        <li>Articles.</li>
        <li>About Store</li>
      </ul>
      <select value={currency_data} onChange={(e) => setGetCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="uzs">UZS</option>
        <option value="rubl">RUBL</option>
      </select>
      <h4><FaStar/> Beauty Club</h4>
    </div>
    <nav>
      <div className="nav__logo">
        <Link to={"/"}><img src={NavLogo} alt="MAKEUP-LOGO" /></Link>
      </div>
      <div className="nav-search">

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>

        <button> Search <IoIosSearch />   </button>
      </div>


      <div className="nav__actions">
        <Link className="link-nav" to={"/cart"} >
          <span>Cart</span><FaShoppingCart />
        </Link>
        <Link className="link-nav" to={"/favourite"} >
          <span>Favourite</span><FaHeart />
        </Link>
        <Link className="link-nav cabinet-link">Cabinet <FaRegUser /></Link>

      </div>

    </nav>
    </>
  )
}

export default connect(null, {loadCurrency})(Nav)