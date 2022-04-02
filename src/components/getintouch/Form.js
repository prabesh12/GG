import React from 'react'
const Form = () => {
    return (
        <>
                <div className="formColumn">
                    <div className="formWrap">
                        <div className="formTopSection">
                            <h3>Let's Talk</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <form action="form">
                            <input type="text" placeholder='Email Address' />
                            <input type="password" placeholder='Password' />
                            <textarea name="" rows="5" placeholder='Your Message'></textarea>
                            <button type='submit'>submit now</button>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default Form