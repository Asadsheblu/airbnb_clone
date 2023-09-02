import React, { useEffect, useState } from 'react';
import '../Product.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaStar } from 'react-icons/fa';
import Modal from '../Modal/Modal';
const Lake = () => {
  const [Lake, setLake] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLake(data)
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
      <div class="row row-cols-1 row-cols-md-4  g-2">

        {Lake.filter((data) => {

          if (data.category === "Lake") {
            return data
          }

        }).map(product => (
          <div className='col' key={product._id}>
            <div class="w-100 h-100">

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
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal"><FaHeart className='fs-4' /></a>

                </p>




              </div>
              {/* Modal start*/}
              <Modal />
              {/* Modal end*/}
              <div class="card-body p-0">
                <div className='d-flex'>
                  <small className='fw-bold'>{product?.location}</small>
                  <small className='fw-bold ms-auto'> <FaStar className='fs-6 text-warning pb-1' />{product?.rating}</small>

                </div>
                <p class="card-text text-muted">{product?.details}</p>
                <small>{product?.start}-{product?.end}</small>
                <p class="card-text"><span className='fw-bold'>${product?.price}</span> night</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lake;



