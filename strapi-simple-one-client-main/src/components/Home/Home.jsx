import React, { useEffect, useContext, useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import BlogSection from "../BlogSection/BlogSection";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(
        Context
    );
    const [saleProducts, setSaleProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
        getCategories();
        getSaleProducts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };
    
    const getSaleProducts = () => {
        fetchDataFromApi("/api/products?populate=*&[filters][sale]=true").then((res) => {
          setSaleProducts(res);
        });
      };
      
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                    <Products
                        headingText="Sale Products"
                        products={saleProducts}
                    />
                    <Products
                        headingText="Blog And News"
                        showFilters={false}
                    />
                    <BlogSection/>
                </div>
            </div>
        </div>
    );
};

export default Home;
