import { useSelector } from "react-redux"
import "./Cart.scss"

const Cart = () => {

    const carts = useSelector(state => state.carts)
    console.log(carts);
  return (
    <div>Cart</div>
  )
}

export default Cart