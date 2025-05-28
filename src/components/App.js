
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Wishlist from "./WishList";
import TotalCostComponent from "./TotalCostComponent";

const App = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <>
        <div className="main-container">
        <div className="left-side">
          <div className="all-products">
            <h1>All Products</h1>
            <p style={{ marginBottom: "20px" }}>
              All products that are avaialable
            </p>
            <div className="products">
              {loading ? (
                <div className="loader-div">
                  <div className="loader"></div>
                </div>
              ) : (
                <ProductCard />
              )}
            </div>
          </div>
          <div className="wishlist">
              <Wishlist />
          </div>
          <div className="cartAndTotalCost">
            <div className="cart">
              <Cart />
            </div>
            <div className="total-cost right-side">
              <TotalCostComponent/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
