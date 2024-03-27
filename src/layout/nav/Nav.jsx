import "./Nav.scss"
import { toast } from "react-toastify"
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Container } from "../../utils/Utils";
import { FiShoppingCart } from "react-icons/fi";
import { connect, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { loadCurrency } from "../../redux/actions/currency-action";

const Nav = (props) => {
  const { pathname } = useLocation()
  const { currency_data } = useSelector(state => state.currency)

  // HOOKS
  const [getCurrency, setGetCurrency] = useState('')

  toast.success("Successfully", {
    position: 'top-right',

  })

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

<Container>

      <div className="nav__wrapper">
        <Link to={"/"} className="nav__logo" >
          <h1>Fragance</h1>
        </Link>

        <form style={pathname.includes("/signup") || pathname.includes("/login") ? {visibility: "hidden" } : { display: "flex" }}
          className="nav-form">
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
</Container>

    </nav>
  )
}

export default connect(null, { loadCurrency })(Nav)
