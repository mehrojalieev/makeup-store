import { useSelector } from "react-redux"
import "./Cart.scss"
import { connect } from "react-redux"
import { loadCartsReducer } from "../../redux/reducers/cart-reducer"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react"
import parse from "html-react-parser"

const Cart = () => {

  const [randomNumb, SetnandomNumb] = useState(Math.floor(Math.random() * 30))

  const { cart_data } = useSelector(state => state.carts)
  console.log(cart_data);
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        {
          cart_data.map(carts =>
            <div key={carts?.id} className="cart-list">
              {
                carts?.api_featured_image ? <img src={carts?.api_featured_image} alt="Cart-Image" />
                  : <img src="https://elisium.uz/thumb/2/Ofsz5-ho54VkutEB8ec3oA/r/d/375x50050790.jpg" alt="Nothing" />

              }

              {
                carts?.name !== 0 ? <h3>This Parfume. The best brand</h3>
                  :
                  <h3>{carts?.name}</h3>
              }
              {
                carts?.description !== 0 ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto.</p>
                  : <p>{parse(carts?.description?.slice(0, 70))}</p>
              }
              <div className="icons">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
              </div>
              <div className="purchase-action">
                <button className="purchase-btn">Purchase</button>
                {
                  carts?.price !== "0.0" || "0" || "" ? <strong>{randomNumb} $</strong>
                    : <strong>{carts?.price}</strong>
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default connect(null, { loadCartsReducer })(Cart)