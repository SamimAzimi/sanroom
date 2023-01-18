import React, { useState } from 'react'
import Footer from './Footer'
import '../styles/products.css'
import { toast } from "react-toastify";
import { MdOutlineMail } from 'react-icons/md';
import { BsPerson, BsPhone } from 'react-icons/bs';
import { GrSend } from 'react-icons/gr';
import emailjs from "emailjs-com";
import { mirrors, toilets, sinks, accessories } from '../data/products'
function Catagory() {

    const [product, setProduct] = useState([]);

    const [inquiry, setInquiry] = useState({
        name: "",
        email: "",
        phone: "",
        itemID: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInquiry({ ...inquiry, [name]: value });
    };
    const handleSeemoreClicked = (e) => {
        e.preventDefault();

        if (!inquiry.name) return toast.info("Please Enter Your Name")
        if (!inquiry.phone) return toast.info("Please Enter Your Email")
        if (!inquiry.email) return toast.info("Please Enter a Passport")



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
                    setInquiry({
                        name: "",
                        email: "",
                        phone: "",
                        itemID: "",
                    });
                },
                (error) => {
                    console.log(error)
                    toast.dark("Something Went Wrong");
                }
            );
    }
    const handleCatagoryClick = (e) => {
        if (e === 1) {
            setProduct(toilets)
        }
        if (e === 2) {
            setProduct(mirrors)
        }
        if (e === 3) {
            setProduct(sinks)
        }
        if (e === 4) {
            setProduct(accessories)
        }

    }





    return (
        <>

            <ul className='productNavigation'>
                <li onClick={() => handleCatagoryClick(1)}>Toilets</li>
                <li onClick={() => handleCatagoryClick(2)}>Mirror</li>
                <li onClick={() => handleCatagoryClick(3)}>Sink</li>
                <li onClick={() => handleCatagoryClick(4)}>Furniture & Accessories</li>
            </ul>

            <section className='catagoryContainers'>

                {product.length > 0 ? product.map(product => {


                    return (
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className="flip-card-image">
                                        <img src={product.path} alt={product.alt} />
                                    </div>
                                </div>
                                <div class="flip-card-back">

                                    <h6>Inquiry About this Item</h6>
                                    <form className='inquiryForm'>
                                        <div className='qformgroup'>

                                            <label><BsPerson /></label>
                                            <input type='text' onChange={handleChange} value={inquiry.name} name="name" placeholder='Your Name' />
                                        </div>
                                        <div className='qformgroup'>
                                            <label><BsPhone /></label>
                                            <input onChange={handleChange} type='text' value={inquiry.phone} name="phone" placeholder='Cell Phone Number' />

                                        </div>
                                        <div className='qformgroup'>
                                            <label><MdOutlineMail /></label>
                                            <input onChange={handleChange} type='email' value={inquiry.email} name="email" placeholder='Email Address' />

                                        </div>

                                        <button type="button" className="inquiryBtn" onClick={() => handleSeemoreClicked(product.id)}>
                                            <GrSend /> Send
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    )
                }) : (
                    toilets.map(product => {


                        return (
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div className="flip-card-image">
                                            <img src={product.path} alt={product.alt} />
                                        </div>
                                    </div>
                                    <div class="flip-card-back">

                                        <h6>Inquiry About this Item</h6>
                                        <form className='inquiryForm'>
                                            <div className='qformgroup'>

                                                <label><BsPerson /></label>
                                                <input type='text' onChange={handleChange} value={inquiry.name} name="name" placeholder='Your Name' />
                                            </div>
                                            <div className='qformgroup'>
                                                <label><BsPhone /></label>
                                                <input onChange={handleChange} type='text' value={inquiry.phone} name="phone" placeholder='Cell Phone Number' />

                                            </div>
                                            <div className='qformgroup'>
                                                <label><MdOutlineMail /></label>
                                                <input onChange={handleChange} type='email' value={inquiry.email} name="email" placeholder='Email Address' />

                                            </div>

                                            <button type="button" className="inquiryBtn" onClick={() => handleSeemoreClicked(product.id)}>
                                                <GrSend /> Send
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        )
                    })

                )}
            </section>
            <Footer />
        </>
    )
}

export default Catagory