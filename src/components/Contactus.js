import React from 'react'
import ContactIcons from '../resources/icons/contact.svg'
import Gmail from '../resources/icons/email.svg'
import LocationIcon from '../resources/icons/location.svg'
import Fb from '../resources/icons/facebook.svg'
import Yt from '../resources/icons/youtube.svg'
import Insta from '../resources/icons/instagram.svg'
import '../styles/contact.css'
function Contactus() {
    return (
        <div className='details'>
            <div className='detailsList'>
                <ul className='contactDetailsList'>
                    <li className='contactDetailsListItems'><img src={ContactIcons} alt="footerIcons" className='footerIcons1Section' /><p className='phonenumber'>+937021090000223</p></li>
                    <li className='contactDetailsListItems'><img src={Gmail} alt="footerIcons" className='footerIcons1Section' /><a className='mailto' href="mailto:sanroom@gmail.com">sanroom@gmail.com</a></li>
                    <li className='contactDetailsListItems'><img src={LocationIcon} alt="footerIcons" className='footerIcons1Section' /><p className='address'>Almaty , UzbikstanAlmaty , UzbikstanAlmaty , Uzbikstan</p></li>
                </ul>
            </div>
            <div className='socialMediaContactPage'>
                <img src={Fb} alt="Facebook Icon" className="facebook" />
                <img src={Yt} alt="Youtube Icon" className="youtube" />
                <img src={Insta} alt="Insta Icon" className="insta" />
            </div>
        </div>
    )
}

export default Contactus