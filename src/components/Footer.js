import React from 'react'
import '../styles/footer.css'
import ContactIcons from '../resources/icons/contact.svg'
import Gmail from '../resources/icons/email.svg'
import LocationIcon from '../resources/icons/location.svg'
import SanroomLogo from '../resources/images/logo.png'
import Fb from '../resources/icons/facebook.svg'
import Yt from '../resources/icons/youtube.svg'
import Insta from '../resources/icons/instagram.svg'
function Footer() {
    return (
        <footer>
            <section className='contactDetailsFooter'>
                <ul className='contactDetailsList'>
                    <li className='contactDetailsListItems'><img src={ContactIcons} alt="footerIcons" className='footerIcons1Section' />
                        <div className='phoneGroupsFooter'>
                            <p className='phonenumber'>+7 707 647 2852</p>
                            <p className='phonenumber'>+7 707 898 0363</p>
                        </div>
                    </li>
                    <li className='contactDetailsListItems'><img src={Gmail} alt="footerIcons" className='footerIcons1Section' /><a className='mailto' href="mailto:sanroom@gmail.com">sanroom.sales@gmail.com</a></li>
                    <li className='contactDetailsListItems'><img src={LocationIcon} alt="footerIcons" className='footerIcons1Section' /><p className='address'>Aportmebel, Ырысты, Almaty, Kazakhstan</p></li>
                </ul>
            </section>
            <section className='socialMediaIcons'>
                <img src={Fb} alt="Facebook Icon" className="facebook" />
                <img src={Yt} alt="Youtube Icon" className="youtube" />
                <img src={Insta} alt="Insta Icon" className="insta" />
            </section>
            <section className='logoFooter'>
                <img src={SanroomLogo} alt="SANROOM Logo" />
            </section>
        </footer>
    )
}

export default Footer