import React, { useEffect, useState } from 'react';
import "./Filter.css"
import { FaFilter } from 'react-icons/fa';
import MultiRangeSlider from "multi-range-slider-react";
import FilterProduct from './FilterProduct';
import Products from '../../Products';
import { useNavigate } from 'react-router-dom';
const Filter = ({priceRange,setPriceRange}) => {

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(310);
  const [filterData, setFilterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  useEffect(() => {
    fetch('https://renthouse-backend.onrender.com/product')
      .then((res) => res.json())
      .then((data) => {
        setFilterData(data);
        // Initially, set filtered data to all data
        setFilteredData(data);
       
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the price range
    const filtered = filterData.filter((product) => {
      const price = parseFloat(product.price);
      return price >= minValue && price <= maxValue;
    });
    setFilteredData(filtered);
    setPriceRange({minValue,maxValue})
  }, [minValue, maxValue, filterData,setPriceRange]);
  const navigate=useNavigate()
    const handelButton=()=>{
        navigate('/')
    }
  
  return (
    <div>
      <button type="button" className="btn btn-outline success border" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <FaFilter /> Filter
      </button>

      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="staticBackdropLabel">Filters</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5>Type of place</h5>
              <p>A home all to yourself. Nightly prices don't include fees or taxes.</p>

              <ul className="nav filter-pills mb-3 rounded border p-3" role="tablist">
                <li className="filter-item" role="presentation">
                  <a className="filter-link  border rounded ps-3 pe-3 pt-2 pb-2" data-bs-toggle="pill" type="a" role="tab" aria-controls="pills-home" aria-selected="true">

                    <h6>Any Type</h6>
                    <small>$139 avg.</small>
                  </a>
                </li>
                <li className="filter-item" role="presentation">
                  <a className="filter-link  border rounded ps-4 pe-4 pt-2 pb-2" data-bs-toggle="pill" type="a" role="tab" aria-controls="pills-room" aria-selected="false">
                    <h6>Room</h6>
                    <small>$33 avg.</small>
                  </a>
                </li>
                <li className="filter-item" role="presentation">

                  <a className="filter-link  border rounded ps-3 pe-3 pt-2 pb-2 text-decoration-none" id="pills-tropical-tab" data-bs-toggle="pill" type="a" role="tab" aria-controls="pills-tropical" aria-selected="false">
                    <h6> Entire Home</h6>
                    <small>$158 avg.</small>


                  </a>
                </li>
              </ul>
              <MultiRangeSlider
                min={0}
                max={310}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div style={{ margin: '10px' }}>
                  <input type='number' className='form-control shadow rounded' value={minValue} />
                </div>
                ____
                <div style={{ margin: '10px' }}>
                  <input type='number' className='form-control shadow rounded' value={maxValue} />
                </div>
              </div>
            </div>


            <div className="modal-footer">
              
              <button type="button" data-bs-dismiss="modal" onClick={handelButton} className="btn btn-primary">Show {filteredData?.length} Places</button>
                
            </div>
            

          </div>
        </div>
      </div>
    </div>


  );
};

export default Filter;