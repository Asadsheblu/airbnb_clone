import React from 'react';
const ProductUpload = () => {

  const imageKey = "8883b33790ee9795a35b86084c95369f"
  const upload = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const rating = e.target.rating.value;
    const details = e.target.details.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const start = e.target.timeStart.value;
    const end = e.target.timeEnd.value;
    console.log(start, end);
    const images = [];

    // Get all the file inputs
    const fileInputs = [e.target.image1, e.target.image2, e.target.image3, e.target.image4];

    // Create an array of Promises to upload all selected images
    const uploadPromises = fileInputs.map((fileInput) => {
      if (fileInput.files[0]) {
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);

        // Upload image to imgBB
        return fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              images.push(data.data.url);
            }
          });
      } else {
        return Promise.resolve(); // If no file is selected, resolve immediately
      }
    });

    // Wait for all image uploads to complete
    Promise.all(uploadPromises).then(() => {
      const productData = {
        location,
        rating,
        details,
        category,
        price,
        images,
        start,
        end
      };

      // Create Post For Upload product Database
      fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((postData) => {
          if (postData.insertedId) {
            window.location.reload()
          }
          // Handle the response from the product upload if needed
        });
    });
  };

  return (
    <div className='container p-5'>
      <form onSubmit={upload}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Location</label>
          <input name='location' type="text" className="form-control" />

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Rating</label>
          <input name='rating' type="text" className="form-control" />

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Select Category</label>
          <select name='category' class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="Room">Room</option>
            <option value="Tropical">Tropical</option>
            <option value="Amazing viwes">Amazing viwes</option>
            <option value="Lake">Lake</option>
            <option value="Camping">Camping</option>
            <option value="Beach">Beach</option>
          </select>

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Details</label>
          <input name='details' type="text" className="form-control" />

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Price</label>
          <input name='price' type="number" className="form-control" />

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Date</label>
          <div className='d-flex'>
            <div className="mb-3 w-100">
              <input type="date" name="timeStart" className="form-control"></input>
              <div className="mb-3 w-100">
                <input type="date" name="timeEnd" className="form-control"></input>
              </div>
            </div>
          </div>

        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Upload Image</label>
          <div className='d-flex p-2'>
            <input name='image1' type="file" multiple className="form-control m-2" />
            <input name='image2' type="file" className="form-control m-2" />

          </div>
          <div className='d-flex p-2'>
            <input name='image3' type="file" className="form-control m-2" />
            <input name='image4' type="file" className="form-control m-2" />

          </div>

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>

    </div>
  );
};

export default ProductUpload;