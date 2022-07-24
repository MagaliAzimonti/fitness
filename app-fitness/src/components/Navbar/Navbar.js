import './Navbar.css'
import Button from '../Button/Button'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

    return (
      <nav className="Navbar">
        <div>
          <h1>Fitness</h1>
        </div>
        <div>
          <Button color='black'>Proteina</Button>
          <Button color='black'>Vitamina</Button>
          <Button color='black'>Aminoacidos</Button>
        </div>
        <CartWidget />
      </nav>
    )
}

export default Navbar 