import "./Nav.scss"
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { loadCurrency } from "../../redux/actions/currency-action";
import { toast } from "react-toastify"

const Nav = (props) => {

  const { pathname } = useLocation()
  toast.success("Successfully", {
    position: 'top-right',

  })
  // For Currency
  const [getCurrency, setGetCurrency] = useState('')
  console.log(getCurrency);

  const { currency_data } = useSelector(state => state.currency)
  useEffect(() => {
    props.loadCurrency(getCurrency)
  }, [getCurrency])
  return (
    <nav>
      {
        pathname.includes("/signup") || pathname.includes("/login") ? null :
          <div className="sale-card">
            <h3>EXTRA 15% OFF CLICK HERE</h3>
          </div>
      }


      <div className="nav__wrapper">
        <Link to={"/"} className="nav__logo" >
          <h1>Fragance</h1>
        </Link>

        <form style={pathname.includes("/signup") || pathname.includes("/login") ? {visibility: "hidden" } : { display: "block" }}
          className="nav-form" action="">
          <input type="text" placeholder="Search" />
          <button><FaSearch /></button>
        </form>

        <div className="nav-action">
          {
             pathname.includes("/signup") || pathname.includes("/login") ? null : 
             <Link className="user-link" to="signup">Sign In</Link>

          }
          <Link>Help</Link>
          {
            pathname.includes("/signup") || pathname.includes("/login") ? null :
            <>
                <select>
                  <option value="usd">USD</option>
                  <option value="rubl">RUBL</option>
                  <option value="uzs">UZS</option>
                </select>
                <Link className="nav-cart">
                  <i><FiShoppingCart /></i>
                  <p>Cart</p>
                </Link>
              </>
          }
        </div>
      </div>
    </nav>
  )
}

export default connect(null, { loadCurrency })(Nav)
