import React, { useEffect, useContext, useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(
    Context
  );

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    // filterProducts();
  }, [priceRange, selectedCategories]);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
      setFilteredProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

//   const filterProducts = () => {
//     let filtered = products.filter(
//       (product) =>
//         product.price >= priceRange.min &&
//         product.price <= priceRange.max &&
//         (selectedCategories.length === 0 ||
//           selectedCategories.includes(product.category._id))
//     );
//     setFilteredProducts(filtered);
//   };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
  };

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category._id)) {
      setSelectedCategories((prev) =>
        prev.filter((catId) => catId !== category._id)
      );
    } else {
      setSelectedCategories((prev) => [...prev, category._id]);
    }
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <div className="sidebar">
            <h2>All Products</h2>
            {/* <div>
              <h3>Filter by price</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange.min}
                onChange={(e) =>
                  handlePriceRangeChange(Number(e.target.value), priceRange.max)
                }
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange.max}
                onChange={(e) =>
                  handlePriceRangeChange(priceRange.min, Number(e.target.value))
                }
              />
              <p>
                Price range: ${priceRange.min} - ${priceRange.max}
              </p>
            </div> */}
            {/* <div>
              <h3>Filter by category</h3>
              {categories.map((category) => (
                <div key={category._id}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category._id)}
                    onChange={() => handleCategorySelect(category)}
                  />
                  <label>{category.name}</label>
                </div>
              ))}
            </div> */}
          </div>
          <div className="content">
            <Products headingText="Popular Products" products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
    