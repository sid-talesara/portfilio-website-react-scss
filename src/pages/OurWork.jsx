import React from 'react'
import {Link} from 'react-router-dom'
import OurWorkStyle from '../assets/OurWork.css'
// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
const OurWork = () => {
  return (
    <div className='work'>
      <div className='Movie'>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
        <img src={athlete} alt="athlete" />
        </Link>
      </div>

      <div className='Movie'>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
        <img src={theracer} alt="athlete" /></Link>
      </div>

      <div className='Movie'>
        <h2>GoodTimes</h2>
        <div className="line"></div>
        <Link>
        <img src={goodtimes} alt="athlete" /></Link>
      </div>
    </div>
  )
}

export default OurWork