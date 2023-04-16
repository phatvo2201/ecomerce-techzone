import { useState } from "react";
import "./Category.scss";
import CategoryItem from "../../Category/Category";

const Category = ({ categories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className={`category${item.id === selectedCategoryId ? ' active' : ''}`}
            onClick={() => handleCategoryClick(item.id)}
          >
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
            />
          </div>
        ))}
      </div>
      {selectedCategoryId && <CategoryItem categoryId={selectedCategoryId} />}
    </div>
  );
};

export default Category;
