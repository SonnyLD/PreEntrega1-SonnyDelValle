import { AiOutlineShopping } from "react-icons/ai"
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { getTotalItemCount } = useContext(cartContext);

  return (
    < Link to="/cart">
       <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">{getTotalItemCount() > 0 && getTotalItemCount()}</span>
      </button>
    </Link>
  )
}

export default CartWidget