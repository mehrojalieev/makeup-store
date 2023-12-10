import { useSelector } from "react-redux"
import "./Cart.scss"
import { connect } from "react-redux"
import { loadCartsReducer } from "../../redux/reducers/cart-reducer"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react"
import parse from "html-react-parser"
import { IoMdCloseCircleOutline } from "react-icons/io";
// import { removeCarts } from "../../redux/actions/cart-action";

const Cart = (props) => {

  const [randomNumb, SetnandomNumb] = useState(Math.floor(Math.random() * 30))

  const { cart_data } = useSelector(state => state.carts)
  console.log(cart_data);

  const hanleRemoveCart = (carts) => {
    console.log(carts);
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        {
          cart_data?.map(carts =>
            carts !== null && carts !== undefined &&
              <div className="cart-list">
                <img src={carts?.api_featured_image} alt="Cart-Image" />
                <button onClick={() => hanleRemoveCart(carts)} className="remove-btn"><IoMdCloseCircleOutline/></button>
                <h3>{carts?.name}</h3>
                <p>{carts?.description?.slice(0, 70)}</p>

                <div className="icons">
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                </div>
                <div className="purchase-action">
                  <button className="purchase-btn">Purchase</button>

                  <strong>{carts?.price}</strong>

                </div>
              </div>
          )
        }
      </div>
    </div>
  )
}

export default connect(null, { loadCartsReducer })(Cart)