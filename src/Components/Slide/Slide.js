import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css';
import { Link } from 'react-router-dom';
function Slide() {
  return (
    <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={2000} >

      <div>
        <img alt="" src="/images/slide-1.jpg" />
        <div className='legend'>
          <h1>FIRST SLIDE</h1>
          <p>A modern watch that can be used in varoius events or weddings</p>
          <Link to='/cart-page' className='btn'>BUY NOW</Link>
        </div>

      </div>
      <div>
        <img alt="" src="/images/slide-2.jpg" />
        <div className='legend'>
          <h1>SECOND SLIDE</h1>
          <p>SADFNJHBDNDF BDBBHJCB DCDWBCBWCBW BCJDBJCBWDJ</p>
          <Link to='/cart-page' className='btn'>BUY NOW</Link>
        </div>

      </div>
      <div>
        <img alt="" src="/images/slide-3.jpg" />
        <div className='legend'>
          <h1>THIRD SLIDE</h1>
          <p>BDFBWF KSNFNQEQHFUH BFEFEHWB BWEHHW</p>
          <Link to='/cart-page' className='btn'>BUY NOW</Link>
        </div>

      </div>
    </Carousel>
  );
}
export default Slide;