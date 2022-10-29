import "./Navbar.css"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
export default function Navbar(){
 return (
 <nav className="nav">
   <Link to="/" className="site-title">
    Choice to Equipment
    </Link>
    <Link to="/category/futbol">
      Futbol
    </Link>
    <Link to="/category/basket">
      Basket
    </Link>
   <ul>
    <li className="active">
      <Link to ="/Stock">Stock</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
    </li>
   </ul>
  
    <CartWidget/>
 </nav>

 )
}