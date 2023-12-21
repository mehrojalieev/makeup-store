import "./Footer.scss"
import Flags from "../../assets/images/flags.svg"
import { Container } from "../../utils/Utils"
const Footer = () => {
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