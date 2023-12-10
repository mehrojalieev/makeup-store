import "./Footer.scss"
import Flags from "../../assets/images/flags.svg"
const Footer = () => {
  return (
    <footer>
        <div className="footer-wrapper">  
          <div className="footer-menu">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Cateogries</li>
              <li>Location</li>
            </ul>
            <ul>
              <li>Delivery</li>
              <li>Contact</li>
              <li>Cateogries</li>
              <li>Location</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Cateogries</li>
              <li>Location</li>
            </ul>
          </div>
          <div className="footer-action">
            <strong className="number-text">+99897848888</strong>
            <p>You can write us a letter call us by phone</p>
            <div className="email-action">
              <input type="text" placeholder="Your email" />
              <button>Send</button>
            </div>
          </div>
        </div>
        <div className="flags">
          <img src={Flags} alt="" />
        </div>
        <div className="copy-right">
          <h3>MAKEUP™. BEAUTY WITHOUT LIMITS</h3>
          <p>© MAKEUP 2021-2023</p>
        </div>
    </footer>
  )
}

export default Footer 