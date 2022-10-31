import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataDigitalArray} from './Data.js'
import './SlidingComp.css'

export default function SlidingComp() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 4}, background: #222; color: 	#808080`
          );
        }
      };
  return (
    <div className='Nmae'>
        <Slider {...settings}>
        {dataDigitalArray.map((item) =>(
             <div className='card'>
             <div className='card-top' id='card-top'>
                <img src={item.URL} alt="image is loading"/>
             </div>
             <div className='card-bottom'>
                <button>Add to Cart</button>
             </div>
         </div>
        ))}
        </Slider>
       
       
    </div>
  )
}
