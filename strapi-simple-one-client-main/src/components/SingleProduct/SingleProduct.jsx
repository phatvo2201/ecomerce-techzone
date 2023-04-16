import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the styles
import { Carousel } from 'react-responsive-carousel'; // import the Carousel component

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  // Check if product.img is an array
  const imgSrcList = Array.isArray(product.img.data)
    ? product.img.data.map((img) => process.env.REACT_APP_STRIPE_APP_DEV_URL + img.attributes.url)
    : [process.env.REACT_APP_STRIPE_APP_DEV_URL + product.img.data[0].attributes.url];
  

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <Carousel>
              {imgSrcList.map((src) => (
                <div>
                  <img key={src} src={src} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Memory:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <br></br>

              <span className="text-bold">
                Cpu:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <br></br>
              <div className="cart-buttons">
              <input
                    autoFocus
                    type="text"
                    placeholder="Your Phone"
                />
              <hr></hr>
              <hr></hr>

              <hr></hr>

              <hr></hr>
              <hr></hr>

              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={10} />
                Đăng Ký Tư Vấn
              </button>
            </div>
            <br></br>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts

          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
