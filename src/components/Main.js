import React from 'react'
import IsometericImage from '../resources/images/isometericFutureToilet.png'
import HomeSlider from './HomeSlider'
import { homeSliderdata } from '../data/homeSliderData'
import Footer from './Footer'
import '../styles/main.css'
import { Link } from 'react-router-dom'
function Main() {
    return (
        <>
            <main>
                <section className='sectionHero'>
                    <div>

                        <h1 className='MainMessage'>Depend on us for the quailty you seek</h1>
                    </div>

                    <div className='isometericBg'>
                    </div>
                    <img src={IsometericImage} alt="IsometericToilets" className="isometericImage" />
                </section>
                <div className='circle'>

                </div>
                <div className='circle1'>

                </div>
                <div className='circle2'>

                </div>
                <div className='circle3'>

                </div>
                <HomeSlider />
                <div className='cardsContainer'>
                    {homeSliderdata.map(data => {
                        return (

                            <div className='card'>
                                <div className='cardImageContainer'>
                                    <img src={data.path} alt={data.alt} />
                                </div>
                                <Link className='cardbtn' to="products">See More ...</Link>
                            </div>
                        )
                    })}
                </div>


            </main>


            <Footer />
        </>

    )
}

export default Main