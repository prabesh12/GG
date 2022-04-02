import React from 'react'
import Form from './Form'
import Map from './Map'
import "./GetInTouch.css"


const GetInTouch = () => {
  return (
    <>
    <div className='getintouch container' id='getintouch'>
        <div className="row">
            <div className="col-md-6"><Map/></div>
            <div className="col-md-6"><Form/></div>
        </div>
    </div>
    </>
  )
}

export default GetInTouch