import React from 'react';

function Products(props) {
  console.log(props)
  return (
    <div className="product">
      <div className="pdt-image">
        <img src={props.data.imgUrl} alt={props.data.name} />
      </div>
      <div className="pdt-name">{props.data.name}</div>
      <div className="pdt-price">{props.data.price}</div>
    </div>
  );
}

export default Products