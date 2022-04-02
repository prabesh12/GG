import React from 'react'
import './About.css'


const About = (props) => {
  return (
      <>
        <div className='container'>
            <div className="about row">
                    <div className='col-md-6'>
                    <img className='about_img' src="../images/about1.png" alt="" />
                    </div>
                    <div className='col-md-6'>
                        <div className="content">
                            <h2>About Grab & Go</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lore dolor sit amet, consipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur. </p>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="content">
                            <h2>We deliver your groceries the way you expect</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lore dolor sit amet, consipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur. </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                    <img className='about_img' src="../images/about2.png" alt="" />
                    </div>
               

                    <div className='col-md-6'>
                        <img className='about_img' src="../images/about3.png" alt="" />
                    </div>
                    <div className='col-md-6'>
                        <div className="content">
                            <h2>Expert in ambient, fresh and frozen food delivery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lore dolor sit amet, consipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur. </p>
                        </div>
                    </div>
            </div>
        </div>
      </>
  )
}

export default About;