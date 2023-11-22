import React from 'react'
import './Footer.css'
import navbar_logo from '../assets/navbar_logo.png'
import company_logo from '../assets/company_logo.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={navbar_logo} alt="" />
            <img src={company_logo} alt="" />
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram} alt='' />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt='' />
            </div>
            <div className="footer-icons-container">
                <a href="https://www.linkedin.com/in/kanthasamy-kowthaman-21957220a"><img src={linkedin} alt='' /></a>
            </div>
        </div>
        <div className="copyright">
            <hr/>
            <p>Copyright &#169; 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
