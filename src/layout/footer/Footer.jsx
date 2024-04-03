import "./Footer.scss"
import { Container } from "../../utils/Utils"
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [openShopMenu, setOpenShopMenu] = useState(false)
  const [openMenuMore, setOpenMenuMore] = useState(false)
  const [openMenuHelp, setOpenMenuHelp] = useState(false)
  const [openMenuMoreHelp, setOpenMenuMoreHelp] = useState(false)

  return (
    <footer>
      <Container>
        <div className="footer-wrapper">
          <div className="footer__menu-container">
            <ul className="footer-menu">
              <li>Shop</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Celebrity Scents</li>
              <li>Hard To Find</li>
              <li>Testers</li>
              <li>Travel Size Mini's</li>
              <li>Perfume Samples</li>
              <li>Cologne Samples</li>
              <li>Holiday Sales</li>
            </ul>
            <ul className="footer-menu">
              <li>More Ways To Shop</li>
              <li>Deodorant</li>
              <li>After Shave</li>
              <li>Shower Gel</li>
              <li>Body Cream</li>
              <li>Pure Perfume</li>
              <li>Body Lotions</li>
              <li>Gift Sets</li>
            </ul>
            <ul className="footer-menu">
              <li>Help</li>
              <li>Order Status</li>
              <li>Shipping Infol</li>
              <li>Return Info</li>
              <li>Contact Info</li>
              <li>About Us</li>
              <li>FAQ'S</li>
              <li>Earn Rewards</li>
            </ul>
            <ul className="footer-menu">
              <li>More Help</li>
              <li>Affiliates</li>
              <li>Wholesale Information</li>
              <li>Customer Testimonials</li>
              <li>Safe Shopping Guarantee</li>
              <li>Blog</li>
              <li>Privacy</li>
              <li>Site Map</li>
            </ul>
          </div>


        <div className="responsive__footer-wrapper">
              <div className="menu-dropdown">
                  <div onClick={() => setOpenShopMenu(!openShopMenu)} className="dropdown-header">
                    <h3>Shop</h3>
                    <i>{openShopMenu ? <SlArrowUp/> : <SlArrowDown/>}</i>
                  </div>
                  <ul style={openShopMenu ? {display: 'flex'} : {display: 'none'}} className="dropdown__menu-items">
                     <li>
                      <Link className="item-link">Best Sellers</Link>
                     </li>
                     <li>
                      <Link className="item-link">New Arriwals</Link>
                     </li>
                     <li>
                      <Link className="item-link">Celebrity Scents</Link>
                     </li>
                     <li>
                      <Link className="item-link">Hard To Find</Link>
                     </li>
                     <li>
                      <Link className="item-link">Testers</Link>
                     </li>
                  </ul>
              </div>
              <div className="menu-dropdown">
                  <div onClick={() => setOpenMenuMore(!openMenuMore)} className="dropdown-header">
                    <h3>More Ways to Shop</h3>
                    <i>{openMenuMore ? <SlArrowUp/> : <SlArrowDown/>}</i>
                  </div>
                  <ul style={openMenuMore ? {display: 'flex'} : {display: 'none'}} className="dropdown__menu-items">
                     <li>
                      <Link className="item-link">Deodorant</Link>
                     </li>
                     <li>
                      <Link className="item-link">After Shave</Link>
                     </li>
                     <li>
                      <Link className="item-link">Shower Gel</Link>
                     </li>
                     <li>
                      <Link className="item-link">Body Cream</Link>
                     </li>
                     <li>
                      <Link className="item-link">Pure PErfume</Link>
                     </li>
                     <li>
                      <Link className="item-link">Gift Sets</Link>
                     </li>
                  </ul>
              </div>
              <div className="menu-dropdown">
                  <div onClick={() => setOpenMenuHelp(!openMenuHelp)} className="dropdown-header">
                    <h3>Help</h3>
                    <i>{openMenuHelp ? <SlArrowUp/> : <SlArrowDown/>}</i>
                  </div>
                  <ul style={openMenuHelp ? {display: 'flex'} : {display: 'none'}} className="dropdown__menu-items">
                     <li>
                      <Link className="item-link">Order Status</Link>
                     </li>
                     <li>
                      <Link className="item-link">Shipping Info</Link>
                     </li>
                     <li>
                      <Link className="item-link">Return Info</Link>
                     </li>
                     <li>
                      <Link className="item-link">Contact Info</Link>
                     </li>
                     <li>
                      <Link className="item-link"> About Us</Link>
                     </li>
                     <li>
                      <Link className="item-link">FAQ'S</Link>
                     </li>
                     <li>
                      <Link className="item-link">Earn Rewards</Link>
                     </li>
                  </ul>
              </div>
              <div className="menu-dropdown">
                  <div onClick={() => setOpenMenuMoreHelp(!openMenuMoreHelp)} className="dropdown-header">
                    <h3>More Help</h3>
                    <i>{openMenuMoreHelp ? <SlArrowUp/> : <SlArrowDown/>}</i>
                  </div>
                  <ul style={openMenuMoreHelp ? {display: 'flex'} : {display: 'none'}} className="dropdown__menu-items">
                     <li>
                      <Link className="item-link">Affiliates</Link>
                     </li>
                     <li>
                      <Link className="item-link">Wholesale Information</Link>
                     </li>
                     <li>
                      <Link className="item-link">Customer Testimonials</Link>
                     </li>
                     <li>
                      <Link className="item-link">Safe Shopping Guarantee</Link>
                     </li>
                     <li>
                      <Link className="item-link">Blog</Link>
                     </li>
                     <li>
                      <Link className="item-link">Privacy</Link>
                     </li>
                     <li>
                      <Link className="item-link">Site Map</Link>
                     </li>
                  </ul>
              </div>
        </div>

          <div className="footer__action-container">
            <div className="form__action">
              <h4>Join Our Coupon List</h4>
              <p>Get the best deals and discounts on name brand fragrances and more.</p>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button>Sign Up</button>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer 