import React from "react";
import numeral from "numeral";

function ProductPriceFormat(props) {
  const myProductPrice = numeral(props.price).format("0,0.00");
  return <span>{myProductPrice}</span>;
}

export default ProductPriceFormat;
