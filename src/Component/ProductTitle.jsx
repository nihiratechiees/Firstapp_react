import React from "react";

const Producttitle = () => {
    console.log('product title rendered')
    return (
        <h2>Product Listing</h2>
    );
}

export default React.memo(Producttitle);