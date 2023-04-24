import React from 'react';

import Slider from 'react-slick';


const SliderTest = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 700,
    cssEase: "linear"
  };
  return (
    <div className='flex justify-center'>
      <Slider {...settings} className="bg-white text-center w-40 h-40 mt-5 flex items-center mb-5">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>

    );
}


export default SliderTest;