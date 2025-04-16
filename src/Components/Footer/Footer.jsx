import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assests/2257010-uhd_3840_2160_24fps.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section  data-aos="fade-up" className='footer' >
      <div className="videoDiv">
                  <video src={video2} loop autoPlay muted type="video/mp4" >   </video>
      </div>
           <div  data-aos="fade-up" className="secContent container">
            <div data-aos="fade-up" className="contactDiv flex">
              <div data-aos="fade-up" className="text">
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us </h2>
              </div>
              <div data-aos="fade-up" className="inputDiv  flex">
                <input type="text"  placeholder='Enter Email Address' />
                <button className='btn flex'  type='submit'  >
                   SEND <FiSend  className="icon"  />
                </button>
              </div>
            </div>
            <div data-aos="fade-up"  className="footerCard flex">
              <div data-aos="fade-up" className="footerIntro flex">
                <div className="logoDiv">
                  <a href="#"  className='logo flex' >
                  <MdOutlineTravelExplore className="icon"/>  Travel.
                  </a>
                </div>
                <div className="footerParagraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores iste dolorem architecto impedit. Corporis fugiat sint tempora, ab temporibus perferendis, magnam commodi laudantium libero rerum cum. Placeat, cupiditate quia!

                </div>
                <div className="footerSocials flex">
                <AiOutlineTwitter className="icon"/>
                <AiFillYoutube className="icon"/>
                <AiFillInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
                </div>
              </div>
              <div data-aos="fade-up" className="footerLinks grip">
                <div className="linkGroup">
                  <span className="groupTitle">
                    OUR AGENCY
                  </span>
                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                  </li>
                </div>
                <div className="linkGroup">
                  <span className="groupTitle">
                    PARTNERS
                  </span>
                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                  </li>
                </div>
                <div className="linkGroup">
                  <span className="groupTitle">
                    LAST MINUTE
                  </span>
                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                  </li>

                  <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Oceanial
                  </li>
                </div>
              </div>

              <div  className="footerDiv">
                <small>BEST TRAVEL WEBSITE THEME</small>
                <small>COPYRIGHTS RESERVED  -  ENG : ABDELRAHMAN 2024</small>
              </div>
            </div>
           </div>
    </section>
  )
}
export default Footer
