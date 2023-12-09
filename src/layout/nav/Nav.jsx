import "./Nav.scss"
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import NavLogo from "../../assets/images/logo.svg"
const Nav = () => {
  return (
    <nav>
      <div className="nav-search">
        <i><IoIosSearch/></i>
        <input type="text"  />
      </div>
        <div className="nav__logo">
          <img src={NavLogo} alt="MAKEUP-LOGO" />
        </div>


        <div className="nav__actions">
          <i><IoCartOutline /></i>
        <i><FaRegHeart/></i>
        </div>

    </nav>
  )
}

export default Nav