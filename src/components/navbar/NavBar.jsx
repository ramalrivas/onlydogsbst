import CartWidget from "../cartwidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-brand">

        </div>
        <div className="nabvar-menu">
        <ul>
            <li><NavLink className="" to='/'> Home</NavLink></li>
            <li><NavLink className="" to='/category/eat'> Alimentacion</NavLink></li>
            <li><NavLink className="" to='/category/transport'> Paseo y Transporte</NavLink></li>
        </ul>
        </div>
       <NavLink className="" to='cart'> <CartWidget /> </NavLink>
    </div>
  )
}

export default NavBar