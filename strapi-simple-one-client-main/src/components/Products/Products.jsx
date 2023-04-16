import "./Products.scss";
import Product from "./Product/Product";
import { useState } from "react";

const Products = ({ products, innerPage, headingText, showFilters = true }) => {
  const [maxPriceRange, setMaxPriceRange] = useState(1000);
  const [minPriceRange, setMinPriceRange] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products?.data?.filter((product) => {
    const productCategories = product.attributes.categories.data.map(category => category.attributes.title);
    const productPrice = parseFloat(product.attributes.price);
    console.log("ppppppppppp")

    console.log(products)
    console.log("ppppppppppppp")

    
    if (maxPriceRange && productPrice > maxPriceRange) {
      return false;
    }
    if (minPriceRange && productPrice < minPriceRange) {
      return false;
    }
    if (selectedCategory && !productCategories.includes(selectedCategory)) {
      return false;
    }
    return true;
  });

  const handlePriceRangeChange = (event) => {
    const maxPrice = parseFloat(event.target.value);
    setMaxPriceRange(maxPrice);
  };
  
  const handleMinPriceRangeChange = (event) => {
    const minPrice = parseFloat(event.target.value);
    setMinPriceRange(minPrice);
  }

  // Log all categories to the console
  const categories = products?.data?.reduce((acc, product) => {
    const productCategories = product.attributes.categories.data;
    if (Array.isArray(productCategories)) {
      productCategories.forEach((category) => {
        if (!acc.includes(category.attributes.title)) {
          acc.push(category.attributes.title);
        }
      });
    }

    return acc;
  }, []);
  
  console.log(categories);
  console.log(products);


  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      {showFilters && (
        <div className="filters">
          <label>
            Price range:
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={minPriceRange}
              onChange={handleMinPriceRangeChange}
            />
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={maxPriceRange}
              onChange={handlePriceRangeChange}
            />
            <span className="slider-value">${minPriceRange}</span>
            <span className="slider-value">${maxPriceRange}</span>
          </label>
          <label>
            Category:
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              {categories?.map((categoryTitle) => (
                <option key={categoryTitle} value={categoryTitle}>
                  {categoryTitle}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
      <div className={`products ${innerPage ? "innerPage" : ""}`}>
        {filteredProducts?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>


    </div>
  );
};

export default Products;
