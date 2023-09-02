import React, { useState } from 'react';
import './Category.css'
import Products from './Products';
import Room from './Category/Room';
import Tropical from './Category/Tropical';
import Amazing from './Category/Amazing';
import Beach from './Category/Beach';
import Lake from './Category/Lake';
import Camping from './Category/Camping';
import { FaHome } from 'react-icons/fa';
import room from "../../assests/room.jpg"
import camping from "../../assests/camping.jpg"
import view from "../../assests/viwes.jpg"
import tropical from "../../assests/tropical.jpg"
import lake from "../../assests/lake.jpg"
import beach from "../../assests/beach.jpg"
import Filter from './Category/Filter/Filter';
const Category = () => {
const [priceRange,setPriceRange]=useState({
  minValue:0,
  maxValue:0
})
  return (
    <div className='container-fluid pt-3'>

      <div className='d-flex'>


        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="a" role="tab" aria-controls="pills-home" aria-selected="true">

              <div className='text-center'>
                <FaHome className='fs-5' />
                <br />
                <span>Home</span>
              </div>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-room-tab" data-bs-toggle="pill" data-bs-target="#pills-room" type="a" role="tab" aria-controls="pills-room" aria-selected="false">
              <div className='text-center'>
                <img src={room} width={20} height={20} alt='room' />
                <br />
                <span>Room</span>
              </div>
            </a>
          </li>
          <li className="nav-item" role="presentation">

            <a className="nav-link" id="pills-tropical-tab" data-bs-toggle="pill" data-bs-target="#pills-tropical" type="a" role="tab" aria-controls="pills-tropical" aria-selected="false">
              <div className='text-center'>
                <img src={tropical} width={20} height={20} alt='room' />
                <br />
                <span>Tropical</span>
              </div>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-amazing-tab" data-bs-toggle="pill" data-bs-target="#pills-amazing" type="a" role="tab" aria-controls="pills-amazing" aria-selected="true">
              <div className='text-center'>
                <img src={view} width={20} height={20} alt='room' />
                <br />
                <span>Amazing Views</span>
              </div>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-beach-tab" data-bs-toggle="pill" data-bs-target="#pills-beach" type="a" role="tab" aria-controls="pills-beach" aria-selected="false">
              <div className='text-center'>
                <img src={beach} width={20} height={20} alt='room' />
                <br />
                <span>Beach</span>
              </div>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-lake-tab" data-bs-toggle="pill" data-bs-target="#pills-lake" type="a" role="tab" aria-controls="pills-lake" aria-selected="false">
              <div className='text-center'>
                <img src={lake} width={20} height={20} alt='room' />
                <br />
                <span>Lake</span>
              </div>

            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-camping-tab" data-bs-toggle="pill" data-bs-target="#pills-camping" type="a" role="tab" aria-controls="pills-camping" aria-selected="false">
              <div className='text-center'>
                <img src={camping} width={20} height={20} alt='room' />
                <br />
                <span>Camping</span>
              </div>
            </a>
          </li>

        </ul>
        <div className='ms-auto'>
          <Filter priceRange={priceRange} setPriceRange={setPriceRange}/>
        </div>

      </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <Products priceRange={priceRange}/>
        </div>
        <div className="tab-pane fade" id="pills-room" role="tabpanel" aria-labelledby="pills-room-tab">
          <Room />
        </div>
        <div className="tab-pane fade" id="pills-tropical" role="tabpanel" aria-labelledby="pills-tropical-tab">
          <Tropical />
        </div>
        <div className="tab-pane fade" id="pills-amazing" role="tabpanel" aria-labelledby="pills-amazing-tab">
          <Amazing />
        </div>
        <div className="tab-pane fade" id="pills-beach" role="tabpanel" aria-labelledby="pills-beach-tab">
          <Beach />
        </div>
        <div className="tab-pane fade" id="pills-lake" role="tabpanel" aria-labelledby="pills-lake-tab">
          <Lake />
        </div>
        <div className="tab-pane fade" id="pills-camping" role="tabpanel" aria-labelledby="pills-camping-tab">
          <Camping />
        </div>
      </div>
      
    </div>

  );
};

export default Category;