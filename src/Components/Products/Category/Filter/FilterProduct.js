import React from 'react';

const FilterProduct = (props) => {
    const { price } = props.product
    console.log(price);
    return (
        <div>
            <h1>{price}</h1>
        </div>
    );
};

export default FilterProduct;