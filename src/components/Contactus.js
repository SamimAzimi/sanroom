import React, { useState } from 'react'
import ContactIcons from '../resources/icons/contact.svg'
import Gmail from '../resources/icons/email.svg'
import LocationIcon from '../resources/icons/location.svg'
import Fb from '../resources/icons/facebook.svg'
import Yt from '../resources/icons/youtube.svg'
import Insta from '../resources/icons/instagram.svg'
import { MdOutlineMail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { GrSend } from 'react-icons/gr';


import { toast } from "react-toastify";
import emailjs from "emailjs-com";

// import ReactMapGL from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

import '../styles/contact.css'
function Contactus() {
    const [person, setPerson] = useState({
        fname: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!person.fname) return toast.info("Please Enter Your Name")
        if (!person.email) return toast.info("Please Enter Your Email")
        if (!person.subject) return toast.info("Please Enter a Passport")
        if (!person.message) return toast.info("Please Enter Your Message")


        emailjs
            .sendForm(
                "service_iam5u89",
                "template_d9pgrqc",
                e.target,
                "user_gVzTPBsJZ0J6JLX12Zgli"
            )
            .then(
                (result) => {
                    toast.info("Thanks, Your Message Has been Sent Successfully");
                    setPerson({
                        fname: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log(error)
                    toast.dark("Something Went Wrong");
                }
            );

    }

    return (

        <>
            <div className='contactContainer'>
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
                <form id="contactForm" onSubmit={handlesubmit} >

                    <div className="Groups">
                        <div>
                            <label htmlFor="fname" ><BsPerson />
                            </label>

                            <input value={person.fname}
                                onChange={handleChange} tabIndex="0" type="text" placeholder="Full Name" name="fname" />
                        </div>
                        <div>
                            <label htmlFor="email" ><MdOutlineMail />
                            </label>
                            <input tabIndex="1" value={person.email}
                                onChange={handleChange} placeholder="Type Your Email Address" type="email" name="email" />
                        </div>
                    </div>
                    <div >
                        <input tabIndex="2" className='subject' value={person.subject}
                            onChange={handleChange} placeholder="Subject" type="text" name="subject" />
                    </div>
                    <textarea value={person.message}
                        onChange={handleChange} id="one" tabIndex="3" name="message" placeholder="Type Your Message Here" />

                    <button type="submit" className='contactSubmit'><GrSend className='btns' /> <i>send</i></button>
                </form>

            </div>

            <div className="mapgl">
                <iframe
                    title="Kamiyab"

                    style={{ "border": "0" }}
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC3BR4ik4mFhyhhDibPEReVOodWKB2rdGc&q=Kamiyab+Bakery,6001+14th+Ave+Markham+ON+L3S+0A2+Canada"
                >
                </iframe>

            </div>


        </>
    )
}

export default Contactus