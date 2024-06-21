import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <h2 style={{ fontSize: '50px' }} className='display-3'>NEW ARRIVALS ONLY</h2>
                    <div style={{ fontSize: '30px' }}>
                        <div className="hand-hand-icon">
                            <p className='display-5'>New</p>
                        </div>
                        <p className='display-5'>Collections</p>
                        <p className='display-5'>For everyone</p>
                    </div>
                    <div className='hero-latest-btn'>
                        <p>Latest Collection</p>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img style={{ width: '300px' }} src="https://i.pinimg.com/736x/95/6d/b1/956db1e0bbd4c1fbec108c2dc44df676.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero