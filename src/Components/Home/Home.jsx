import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assests/istockphoto-826171262-640_adpp_is.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BsListTask} from 'react-icons/bs'
import {TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section  className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop  type="video/mp4" ></video>
      <div className="homeContent container">
      <div className="textDiv">
                  <span data-aos="fade-up" className='smallText' >Our Packages</span>
        <span  data-aos="fade-up" className="smallText">
          Our Packages
        </span>

        <h1  data-aos="fade-up" className="homeTitle">
          Search Your Holiday
        </h1>

      </div>
      <div data-aos="fade-up" className="cardDiv grid">
         <div   data-aos="fade-up" className="destinationInput">
          <label htmlFor="city"> Search your destination: </label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here........' />
              <GrLocation   className="icon" />
            </div>
         </div>

         <div  data-aos="fade-up" className="dateInput">
          <label htmlFor="date">
            Select your date: </label>
            <div className="input flex">
              <input type="date" />
            </div>
         </div>
         <div className="PriceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max Price:</label>
            <h3 className="total">$5000</h3>
          </div>
          <div  data-aos="fade-up" className="input flex ">
            <input type="range" max="5000" min="1000" />
          </div>
         </div>
         <div  data-aos="fade-up" className="searchOptions flex">
         <HiFilter  className="icon" />
         <span>MORE FILTERS</span>
         </div>
      </div>
      <div  data-aos="fade-up" className="homeFooterIcons flex">
        <div className="rightIcons">
        <FiFacebook className="icon" />
        <AiOutlineInstagram className="icon" />
        <FaTripadvisor className="icon" />
        </div>
        <div  data-aos="fade-up" className="leftIcons">
        <BsListTask className="icon" />
        <TbApps className="icon" />
        </div>
      </div>
      </div>
    </section>
  )
}
export default Home
