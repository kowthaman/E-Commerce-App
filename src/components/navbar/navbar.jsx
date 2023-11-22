import React, { useContext, useState } from 'react'
import './navbar.css'
import navbar_logo from '../assets/navbar_logo.png'
import company_logo from '../assets/company_logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartitems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={navbar_logo} alt="" />
        <Link to='/'><img onClick={()=>{setMenu("shop")}} className='company_logo' src={company_logo} alt="" /></Link>{menu==="shop"?<hr/>:null}
      </div> 
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:null}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="men"?<hr/>:null}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="women"?<hr/>:null}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:null}</li>
      </ul> 
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">{getTotalCartitems()}</div>
      </div>
    </div>
  )
}

export default Navbar;