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
            <li><NavLink to='/' style={({ isActive }) => ({ color: isActive ? "#242529" : "#8A96A3" })}
  className={'noActive'}> <GiDogHouse />Inicio</NavLink></li>
            <li><NavLink to='/category/eat' style={({ isActive }) => ({ color: isActive ? "#242529" : "#8A96A3" })}
  className={'noActive'}> <TbDogBowl /> Alimentacion</NavLink></li>
            <li><NavLink to='/category/rest' style={({ isActive }) => ({ color: isActive ? "#242529" : "#8A96A3" })}
  className={'noActive'}> <GiSittingDog /> Descanso</NavLink></li>
        </ul>
        </div>
        <div className="navbar-cartWidget">  
          <NavLink to='cart' style={({ isActive }) => ({ color: isActive ? "#ADB6BF" : "#8A96A3" })}
  className={'noActive'}> <CartWidget /></NavLink>
        </div>

     
    </div>
  )
}

export default NavBar