import React from 'react'
import home1 from '../img/home1.png'
const AboutSection = () => {
  return (
    <div>
    <div className="description">
        <div className="title">
            <div className="hide">
                <h2>We work to make</h2>
            </div>
            <div className="hide">
                <h2> your <span>dreams</span> come</h2>
            </div>
            <div className="hide">
                true.
            </div>
        </div>
        <p>Contact us for any photography or videography ideas to discuss, we have professionals with amazing skills.</p>
    <button>Contact Us</button>
    </div>
    <img src={home1} alt="Guy with a camera" />
    </div>
  )
}

export default AboutSection