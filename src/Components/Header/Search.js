import React, { useState } from 'react';
import "./Navbar.css";

const Search = () => {
  const [where, setWhere] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfAdults, setNumberOfAdults] = useState(1); // Default to 1 adult

  // Handle form submission
  const handleSearch = () => {
    console.log(checkIn);
    // Use the filter values to fetch or manipulate your data as needed
    // You can access the filter values: where, checkIn, checkOut, numberOfAdults
  };

  return (
    <div className='container'>
          <form onSubmit={handleSearch}>
      <div className='search text-center'>
      

      
        <div>
          <label htmlFor="where" className="form-label">Where</label>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder='Search Destination'
            id="where"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="checkIn" className="form-label">Check In</label>
          <input
            type="date"
            className="form-control rounded-pill"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="form-label">Check Out</label>
          <input
            type="date"
            className="form-control rounded-pill"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberOfAdults" className="form-label">Who</label>
          <select
            id="numberOfAdults"
            className="form-select"
            value={numberOfAdults}
            onChange={(e) => setNumberOfAdults(e.target.value)}
          >
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
          </select>
        </div>
        <div>
          <button
            className='btn btn-danger rounded-pill ps-3 pe-3 pt-2 pb-2 mt-4'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
    
      </div>
      </form>
    </div>
  );
};

export default Search;
