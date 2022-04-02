import React from 'react'
import "./Header.css"
import {Link} from "react-scroll"


const Header = () => {
  return (
    <>
    <div className='header' id='header' style={{position:"fixed", zIndex:"10", backgroundColor:"white"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='logo'>
                        <img src="images/logo.png" alt="" /> GRAB & GO
                    </div>
                </div>

                <div className='col-md-8'>
                    <ul className='nav_bar'>
                        <li><Link to = "#" className='active'  duration={1000}>HOME</Link> </li>
                        <li><Link to = "ourservices"  duration={300}>OUR SERVICES</Link></li>
                        <li><Link to = "our_product"  duration={500} >OUR PRODUCT</Link></li>
                        <li><Link to = "about"  duration={500} >ABOUT</Link></li>
                        <li><Link to = "footer"  duration={100}>CONTACT US</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Header;