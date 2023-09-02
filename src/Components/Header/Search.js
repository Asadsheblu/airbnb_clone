import React, { useState } from 'react';
import { FaBeer, FaSearch } from "react-icons/fa"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Search = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className='container bg-white shadow rounded p-3'>
            <div className='row'>
            <div className='col-md-3'>
                <small className='text-muted'>City/Street</small>
                <input type='text' className='form-control rounded-pill'placeholder='Location'/>
            </div>
            <div className='col-md-3'>
            <small className='text-muted'>Check in</small>
            <Calendar  onChange={onChange} value={value} />
            </div>
          
            <div className='col-md-3'>
            <small className='text-muted'>Price Range</small>
                <input type='number' className='form-control rounded-pill-sm' placeholder='Price Range'/>
            </div>
            <div className='col-md-3'>
            <small className='text-muted'>Advance Filter</small>
            <br/>
                <button className='btn btn-success'><FaSearch/></button>
            </div>
            </div>
        </div>
    );
};

export default Search;