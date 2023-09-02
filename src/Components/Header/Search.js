import React from 'react';

import "./Navbar.css"

const Search = () => {

    return (
        <div className='container'>

            <div className='search text-center'>
                <div>
                    <label for="exampleInputEmail1" class="form-label">Where</label>
                    <input type="text" class="form-control rounded-pill" placeholder='Search Destination' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div>
                    <label for="exampleInputEmail1" class="form-label">Check In</label>

                    <input type="date" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div>
                    <label for="exampleInputEmail1" class="form-label">Check Out</label>
                    <input type="date" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div>
                    <label for="exampleInputEmail1" class="form-label">Who</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">
                            <div className='d-flex'>
                                <div>Adults</div>
                                <div></div>
                            </div>
                        </option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
                    <button className='btn btn-danger rounded-pill ps-3 pe-3 pt-2 pb-2 mt-4'>Search</button>

                </div>
              </div>  
        </div>
    );
};

export default Search;