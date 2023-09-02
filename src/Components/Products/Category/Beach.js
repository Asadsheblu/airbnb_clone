import React, { useEffect, useState } from 'react';
import '../Product.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaStar } from 'react-icons/fa';
const Beach = () => {
  const [Beach, setBeach] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then(res => res.json())
      .then(data => {
        
        setBeach(data)
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

        {Beach.filter((data) => {

          if (data.category === "Beach") {
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
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal"><FaHeart className='fs-4' /></a>

                </p>




              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Loign/SignUp</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <button className='mt-3 btn btn-primary' type="submit">Submit</button>
                      </form>
                    </div>

                  </div>
                </div>
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

export default Beach;



