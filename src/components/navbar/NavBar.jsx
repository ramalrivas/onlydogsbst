import CartWidget from "../cartwidget/CartWidget"


const NavBar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-brand">

        </div>
        <div className="nabvar-menu">
        <ul>
            <li>Home</li>
            <li>Alimentacion</li>
            <li>Paseo y Transporte</li>
        </ul>
        </div>
        <CartWidget />
    </div>
  )
}

export default NavBar