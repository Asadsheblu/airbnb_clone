import React, { useEffect, useState } from 'react';
import '../Product.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaStar } from 'react-icons/fa';
const Camping = () => {
  const [Camping, setRoom] = useState([])
  useEffect(() => {
    fetch("https://renthouse-backend.onrender.com/product")
      .then(res => res.json())
      .then(data => {

        setRoom(data)
      }
      )
  }, [])
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className='container-fluid p-4'>
      <div className="row row-cols-1 row-cols-md-4  g-2">

        {Camping.filter((data) => {

          if (data.category === "Camping") {
            return data
          }

        }).map(product => (
          <div className='col' key={product._id}>
            <div className="w-100 h-100">

              <Slider {...sliderSettings}>

                {product.images.map((image, index) => (
                  <>

                    <div key={index} className='w-100 h-100'>
                      <img height={250} src={image} alt='image' className='w-100 rounded shadow' />

                    </div>

                  </>
                ))}

              </Slider>
              <div className='d-flex'>

                <div>
                  <p className='mx-auto '>
                    <small className='fw-bold bg-primary text-white p-1 rounded'>{product?.category}</small>
                  </p>
                </div>

                <p className='ms-auto heart'>
                  <FaHeart className='fs-4' />

                </p>




              </div>

              <div className="card-body p-0">
                <div className='d-flex'>
                  <small className='fw-bold'>{product?.location}</small>
                  <small className='fw-bold ms-auto'> <FaStar className='fs-6 text-warning pb-1' />{product?.rating}</small>

                </div>
                <p className="card-text text-muted">{product?.details}</p>
                <small>{product?.start}-{product?.end}</small>
                <p className="card-text"><span className='fw-bold'>${product?.price}</span> night</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camping;



