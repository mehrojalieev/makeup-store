import "./Nav.scss"
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaShoppingCart, FaHeart, FaRegUser, FaStar  } from "react-icons/fa";

import NavLogo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom";
const Nav = () => {
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
      <h4><FaStar/> Beauty Club</h4>
    </div>
    <nav>
      <div className="nav__logo">
        <img src={NavLogo} alt="MAKEUP-LOGO" />
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

export default Nav