import CartWidget from "../cartwidget/CartWidget";
import { NavLink } from "react-router-dom";
import {GiDogHouse} from "react-icons/gi"; 
import {TbDogBowl} from "react-icons/tb";
import {GiSittingDog} from "react-icons/gi";


const NavBar = () => {
 
  return (
    <div className="navbar-container">
        <div className="navbar-brand">
          
          <h1><span className="only">Only</span><span className="dogs">Dogs</span></h1>
        
        </div>
        <div className="nabvar-menu">
        <ul>
            <li><NavLink to='/'> <GiDogHouse />Inicio</NavLink></li>
            <li><NavLink to='/category/eat'> <TbDogBowl /> Alimentacion</NavLink></li>
            <li><NavLink to='/category/rest'> <GiSittingDog /> Descanso</NavLink></li>
        </ul>
        </div>
        <div className="navbar-cartWidget">  
          <NavLink className="" to='cart'> <CartWidget /></NavLink>
        </div>

     
    </div>
  )
}

export default NavBar