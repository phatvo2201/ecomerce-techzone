import useFetch from "../../hooks/useFetch";

const ProductImages = ({ productImages }) => {
    if (!productImages) {
      return null;
    }
  
    return (
      <div className="product-images">
        {productImages.map((image) => (
          <img key={image.id} src={image.url} alt={image.alt} />
        ))}
      </div>
    );
  };
  
export default ProductImages;
