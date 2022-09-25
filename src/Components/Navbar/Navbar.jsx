import "./Navbar.css"

export default function Navbar(){
 return (
 <nav className="nav">
   <a href="/" className="site-title">
    Choice to Equipment
    </a>
   <ul>
    <li className="active">
      <a href="/pricing">Precios</a>
      </li>
      <li>
      <a href="/about">Acerca de</a>
    </li>
   </ul>
 </nav>
 )
}