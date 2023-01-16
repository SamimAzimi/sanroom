import React from 'react'
import logo from '../resources/images/logo.png'
import HomeLogo from '../resources/icons/home.svg'
import ProductLogo from '../resources/icons/bathtube.svg'
import ContactLogo from '../resources/icons/contact.svg'

import { Link } from "react-router-dom";
import '../styles/header.css'
function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="SANROOM" />
            </div>
            <nav className='menuNav'>
                <ul className='navList'>
                    <li className='navListItems'><img src={HomeLogo} alt="icons" className="ulLogo"></img><Link className='NavLinks' to="/">Home</Link></li>
                    <li className='navListItems'><img src={ProductLogo} alt="icons" className="ulLogo"></img><Link className='NavLinks' to="products">Products</Link></li>
                    <li className='navListItems'><img src={ContactLogo} alt="icons" className="ulLogo"></img><Link className='NavLinks' to="contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header