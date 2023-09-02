import React, { useState } from 'react';
import "./Filter.css"
import { FaFilter } from 'react-icons/fa';
import MultiRangeSlider from "multi-range-slider-react";
const Filter = () => {
    const [minValue, set_minValue] = useState(10);
const [maxValue, set_maxValue] = useState(310);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
    return (
        <div>
<button type="button" class="btn btn-outline success border" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<FaFilter/> Filter
</button>

{/* Modal */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center" id="staticBackdropLabel">Filters</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Type of place</h5>
        <p>A home all to yourself. Nightly prices don't include fees or taxes.</p>
      
      <ul className="nav nav-pills mb-3 rounded border p-3"  role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link  border rounded ps-3 pe-3 pt-2 pb-2"  data-bs-toggle="pill" type="a" role="tab" aria-controls="pills-home" aria-selected="true"> 
    
    <h6>Any Type</h6>
     <small>$139 avg.</small>
    </a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link  border rounded ps-4 pe-4 pt-2 pb-2"  data-bs-toggle="pill"  type="a" role="tab" aria-controls="pills-room" aria-selected="false"> 
    <h6>Room</h6>
     <small>$33 avg.</small>
    </a>
  </li>
  <li className="nav-item" role="presentation">
  
    <a className="nav-link  border rounded ps-3 pe-3 pt-2 pb-2 text-decoration-none" id="pills-tropical-tab" data-bs-toggle="pill"  type="a" role="tab" aria-controls="pills-tropical" aria-selected="false">
    <h6> Entire Home</h6>
    <small>$158 avg.</small>


    </a>
  </li>
  </ul>
        <MultiRangeSlider
			min={10}
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
                        <input type='number' className='form-control shadow rounded' value={minValue}/>
                        </div>
                            ____
                        <div style={{ margin: '10px' }}>
                        <input type='number' className='form-control shadow rounded' value={maxValue}/>
                        </div>
				</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</div>

   
    );
};

export default Filter;