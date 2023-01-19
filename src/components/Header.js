import React, {useState} from 'react'
import logo from '../resources/images/logo.png'
// // import HomeLogo from '../resources/icons/home.svg'
// import ProductLogo from '../resources/icons/bathtube.svg'
// import ContactLogo from '../resources/icons/contact.svg'
import { GoHome } from 'react-icons/go'
import { MdBathtub } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiMenu3Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";


import '../styles/header.css'
function Header() {

    const [active,setActive]=useState(false);

    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="SANROOM" />
            </div>
            <nav className="mobileNav">
                <div className="threeLineMenu" onClick={()=>setActive(!active)} ><RiMenu3Line/></div>
            </nav>
            <div className={active? "open" : "modal"}>
                <div className="close threeLineMenu" onClick={()=>setActive(false)}>
                <AiOutlineClose/>
                </div>
                <div className="modalContent" onClick={()=>setActive(false)}>
                <Link className='NavLinks' to="/">
                        <li className='mobileList'><GoHome className='ulLogo' />Home</li>
                    </Link>
                    <Link className='NavLinks' to="products">
                        <li className='mobileList'><MdBathtub className='ulLogo' />Products</li>
                    </Link>
                    <Link className='NavLinks' to="contact">
                        <li className='mobileList'><FaPhoneAlt className='ulLogo' />Contact Us</li>
                    </Link>
                </div>

            </div>



            <nav className='menuNav'>
                <ul className='navList'>
                    <Link className='NavLinks' to="/">
                        <li className='navListItems'><GoHome className='ulLogo' />Home</li>
                    </Link>
                    <Link className='NavLinks' to="products">
                        <li className='navListItems'><MdBathtub className='ulLogo' />Products</li>
                    </Link>
                    <Link className='NavLinks' to="contact">
                        <li className='navListItems'><FaPhoneAlt className='ulLogo' />Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header