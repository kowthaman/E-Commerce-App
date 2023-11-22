import React from 'react'
import './Hero.css'
import shop_icon from '../assets/shop_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image  from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2> 
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={shop_icon} alt=''/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-letest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='' />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='' />
        </div>
    </div>
  )
}
export default Hero;