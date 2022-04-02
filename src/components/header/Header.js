import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='logo'>
                        <img src="images/logo.png" alt="" /> GRAB & GO
                    </div>
                </div>

                <div className='col-md-8'>
                    <ul className='nav_bar'>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">OUR SERVICES</a></li>
                        <li><a href="#">OUR PRODUCT</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">CONTACT US</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Header