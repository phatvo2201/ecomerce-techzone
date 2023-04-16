import React, { useState } from "react";
import "./Filter.scss";

const Filter = ({ categories, priceRange, onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState("");

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        onFilterChange({ category: e.target.value, priceRange: selectedPriceRange });
    };

    const handlePriceRangeChange = (e) => {
        setSelectedPriceRange(e.target.value);
        onFilterChange({ category: selectedCategory, priceRange: e.target.value });
    };

    return (
        <div className="filter-container">
            <div className="filter-item">
                <label>Category:</label>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-item">
                <label>Price Range:</label>
                <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
                    <option value="">All</option>
                    {priceRange.map((range) => (
                        <option key={range} value={range}>
                            {range}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
