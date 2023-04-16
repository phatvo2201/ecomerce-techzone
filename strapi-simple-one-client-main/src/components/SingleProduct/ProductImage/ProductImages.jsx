import React from "react";
import useFetch from "../../../hooks/useFetch";

const ProductImages = ({ productId }) => {
  const { data } = useFetch(`/api/productimages?_where[product.id]=${productId}`);

  return (
    <div className="product-images">
      {data &&
        data.map((image) => (
          <img key={image.id} src={process.env.REACT_APP_STRIPE_APP_DEV_URL + image.url} alt={image.alt} />
        ))}
    </div>
  );
};

export default ProductImages;
