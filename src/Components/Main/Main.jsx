import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assests/pexels-piotrek-wilk-643479-1448736.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img2 from '../../Assests/pexels-pixabay-164565.jpg'
import img3 from '../../Assests/pexels-zakaria-2827374.jpg'
import img4 from '../../Assests/pexels-wanderer-731217.jpg'
import img5 from '../../Assests/pexels-vince-2265876.jpg'
import img6 from '../../Assests/pexels-the-world-hopper-929714-1851481.jpg'
import img7 from '../../Assests/pexels-stefanstefancik-127905.jpg'
import img8 from '../../Assests/pexels-riciardus-307008.jpg'
import img9 from '../../Assests/pexels-pixabay-302428.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade:'CULTURAL RELAX',
    fees: '$600',
    description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },

{
  id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  grade:'CULTURAL RELAX',
  fees: '$700',
  description:'The opitome of romance , Machu Picchu is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
}, 

{
  id:3,
  imgSrc: img3,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees: '$800',
  description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:4,
imgSrc: img4,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade:'CULTURAL RELAX',
fees: '$900',
description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:5,
imgSrc: img5,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade:'CULTURAL RELAX',
fees: '$1000',
description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:6,
imgSrc: img6,
destTitle: 'Pyramids',
location: 'Egypt',
grade:'CULTURAL RELAX',
fees: '$1100',
description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:7,
imgSrc: img7,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade:'CULTURAL RELAX',
fees: '$1200',
description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
{id:8,
imgSrc: img8,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade:'CULTURAL RELAX',
fees: '$1300',
description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
{id:9,
imgSrc: img9,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade:'CULTURAL RELAX',
fees: '$1400',
description:'The opitome of romance , Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='main container section ' >
      <div className="secTitle">
        <h3  data-aos="fade-up" className='title'>
          Most Visited destinations
        </h3>
      </div>
      <div  data-aos="fade-up" className="secContent grid">
            {
              Data.map(({id,  imgSrc, destTitle, location , grade , fees , description})=>{
                return(
                  <div key={id} className="singleDestination">
                    <div data-aos="fade-up" className="imageDiv">
                      <img src={imgSrc} alt={destTitle} />
                    </div>
                     <div data-aos="fade-up" className="cardInfo">
                      <h4 data-aos="fade-up" className="destTitle">
                        {destTitle}
                      </h4>
                      <span  data-aos="fade-up" className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                      </span>
                      <div data-aos="fade-up" className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>
                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button data-aos="fade-up"  className='btn flex' >
                        DETAILS <HiOutlineClipboardCheck className='icon' />
                      </button>
                     </div>
                  </div>
                )
              })
            }
      </div>

    </section>
  )
}

export default Main
